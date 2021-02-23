const Cities = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

export const offers = [
  {
    id: 1,
    city: {
      name: Cities.AMSTERDAM,
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    isPremium: true,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`
    ],
    price: 120,
    isFavorite: true,
    rating: 4.8,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    bedrooms: 2,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    maxAdults: 4,
    goods: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Cabel TV`
    ],
    host: {
      name: `Angelina`,
      avatarUrl: `img/avatar-angelina.jpg`,
      isPro: true
    }
  },
  {
    id: 2,
    city: {
      name: Cities.AMSTERDAM,
      location: {
        latitude: 52.369553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    isPremium: true,
    images: [
      `img/room.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`
    ],
    price: 80,
    isFavorite: true,
    rating: 4.0,
    title: `Wood and stone place`,
    type: `Private room`,
    bedrooms: 2,
    description: `Situated in Amsterdam, within 2.2 km of Amsterdam RAI and 2.5 km of Royal Theater Carré, Modern Houseboat Apartment in Amsterdam with Terrace offers accommodation with free WiFi, air conditioning and a terrace. This boat is 3.1 km from Rijksmuseum and 3.1 km from Artis Zoo.
    The boat features a TV. Towels and bed linen are available.`,
    maxAdults: 3,
    goods: [
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Towels`,
      `Cabel TV`,
      `Rolling mill`
    ],
    host: {
      name: `Max`,
      avatarUrl: `img/avatar-max.jpg`,
      isPro: false
    }
  },
  {
    id: 3,
    city: {
      name: Cities.AMSTERDAM,
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10
      }
    },
    isPremium: false,
    images: [
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`
    ],
    price: 132,
    isFavorite: false,
    rating: 4.7,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    bedrooms: 2,
    description: `The elegant rooms at the Hotel Pullman Cologne include air conditioning, a flat-screen TV and a modern bathroom with a bath and shower. High-speed internet is available for a daily charge, and WiFi is provided free of charge in public areas.
    Guests at the Pullman are welcome to relax in the brasserie e.l.f. with summer terrace. LAB12 is the in-house bar inspired by perfume here in Cologne, the city of fragrances, and it serves aromatic drinks.
    The spa includes a sauna, a steam room, a gym, and massage treatments are also available.`,
    maxAdults: 2,
    goods: [
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Cabel TV`,
      `Boat`,
      `Van`
    ],
    host: {
      name: `Max`,
      avatarUrl: `img/avatar-max.jpg`,
      isPro: false
    }
  },
  {
    id: 4,
    city: {
      name: Cities.AMSTERDAM,
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10
      }
    },
    isPremium: true,
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`
    ],
    price: 180,
    isFavorite: true,
    rating: 5.0,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    bedrooms: 3,
    description: `Situated in the heart of the city of Düsseldorf, this design hotel offers bright rooms with air conditioning, free Wi-Fi in all areas and a 24-hour reception. The popular Königsalle shopping street is 1 km away.
    Each of the modern rooms at Motel One Düsseldorf Hauptbahnhof is simply furnished with a flat-screen TV and contemporary-style bathroom. Some offer guests extra comfort with larger beds.`,
    maxAdults: 5,
    goods: [
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Dishwasher`,
      `Towels`,
      `Iron`,
      `Snowman costume`,
      `Cabel TV`
    ],
    host: {
      name: `Max`,
      avatarUrl: `img/avatar-max.jpg`,
      isPro: true
    }
  }
];
