import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const {points} = props;
  const city = [52.38333, 4.9];
  const zoom = 12;

  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });

  useEffect(() => {
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);


    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    points.forEach((point) => {
      leaflet
        .marker([point.city.location.latitude, point.city.location.longitude], {icon})
        .addTo(map);
    });
  }, []);

  return (
    <div id="map" style={{height: `100%`}}></div>
  );
};

Map.propTypes = {
  points: PropTypes.array.isRequired,
};

export default Map;
