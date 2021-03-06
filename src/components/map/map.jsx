import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import {Coords} from '../../const.js';

const Map = (props) => {
  const {city, points, activePoint} = props;
  const center = [Coords[city].latitude, Coords[city].longitude];
  const zoom = 12;

  const pin = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [20, 32]
  });

  const activePin = leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: [20, 32]
  });

  useEffect(() => {
    const map = leaflet.map(`map`, {
      center,
      zoom,
      zoomControl: false,
      marker: true
    });

    const markers = [];

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    points.forEach((point) => {
      const icon = (activePoint && activePoint.id === point.id) ? activePin : pin;

      markers.push(
          leaflet
            .marker([point.location.latitude, point.location.longitude], {icon})
            .addTo(map)
      );
    });

    return () => {
      map.remove();
      markers.forEach((marker) => map.removeLayer(marker));
    };

  }, [city, points, activePoint]);

  return (
    <div id="map" style={{height: `100%`}}></div>
  );
};

Map.propTypes = {
  city: PropTypes.string,
  points: PropTypes.array.isRequired,
  activePoint: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

export default Map;
