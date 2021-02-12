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
    city: Cities.AMSTERDAM,
    isPremium: true,
    image: `img/apartment-01.jpg`,
    price: 120,
    isBookmarked: true,
    rating: 4.8,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    inside: [
      {
        name: `Wi-Fi`,
        isAvailable: true,
      },
      {
        name: `Heating`,
        isAvailable: true,
      },
      {
        name: `Kitchen`,
        isAvailable: true,
      },
      {
        name: `Fridge`,
        isAvailable: true,
      },
      {
        name: `Washing machine`,
        isAvailable: true,
      },
      {
        name: `Coffee machine`,
        isAvailable: true,
      },
      {
        name: `Dishwasher`,
        isAvailable: true,
      },
      {
        name: `Towels`,
        isAvailable: true,
      },
      {
        name: `Baby seat`,
        isAvailable: true,
      },
      {
        name: `Cabel TV`,
        isAvailable: true,
      }
    ],
    host: {
      name: `Angelina`,
      photo: `img/avatar-angelina.jpg`,
      isPro: true
    }
  },
  {
    id: 2,
    city: Cities.AMSTERDAM,
    isPremium: true,
    image: `img/room.jpg`,
    price: 80,
    isBookmarked: true,
    rating: 4.0,
    title: `Wood and stone place`,
    type: `Private room`,
    inside: [
      {
        name: `Wi-Fi`,
        isAvailable: false,
      },
      {
        name: `Heating`,
        isAvailable: true,
      },
      {
        name: `Kitchen`,
        isAvailable: true,
      },
      {
        name: `Fridge`,
        isAvailable: true,
      },
      {
        name: `Washing machine`,
        isAvailable: true,
      },
      {
        name: `Coffee machine`,
        isAvailable: false,
      },
      {
        name: `Dishwasher`,
        isAvailable: false,
      },
      {
        name: `Towels`,
        isAvailable: true,
      },
      {
        name: `Baby seat`,
        isAvailable: false,
      },
      {
        name: `Cabel TV`,
        isAvailable: true,
      }
    ],
    host: {
      name: `Max`,
      photo: `img/avatar-max.jpg`,
      isPro: false
    }
  },
  {
    id: 3,
    city: Cities.COLOGNE,
    isPremium: false,
    image: `img/apartment-02.jpg`,
    price: 132,
    isBookmarked: false,
    rating: 4.7,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    inside: [
      {
        name: `Wi-Fi`,
        isAvailable: false,
      },
      {
        name: `Heating`,
        isAvailable: false,
      },
      {
        name: `Kitchen`,
        isAvailable: false,
      },
      {
        name: `Fridge`,
        isAvailable: false,
      },
      {
        name: `Washing machine`,
        isAvailable: true,
      },
      {
        name: `Coffee machine`,
        isAvailable: false,
      },
      {
        name: `Dishwasher`,
        isAvailable: false,
      },
      {
        name: `Towels`,
        isAvailable: true,
      },
      {
        name: `Baby seat`,
        isAvailable: false,
      },
      {
        name: `Cabel TV`,
        isAvailable: true,
      }
    ],
    host: {
      name: `Max`,
      photo: `img/avatar-max.jpg`,
      isPro: false
    }
  },
  {
    id: 4,
    city: Cities.DUSSELDORF,
    isPremium: true,
    image: `img/apartment-03.jpg`,
    price: 180,
    isBookmarked: true,
    rating: 5.0,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    inside: [
      {
        name: `Wi-Fi`,
        isAvailable: false,
      },
      {
        name: `Heating`,
        isAvailable: true,
      },
      {
        name: `Kitchen`,
        isAvailable: true,
      },
      {
        name: `Fridge`,
        isAvailable: true,
      },
      {
        name: `Washing machine`,
        isAvailable: true,
      },
      {
        name: `Coffee machine`,
        isAvailable: true,
      },
      {
        name: `Dishwasher`,
        isAvailable: true,
      },
      {
        name: `Towels`,
        isAvailable: false,
      },
      {
        name: `Baby seat`,
        isAvailable: false,
      },
      {
        name: `Cabel TV`,
        isAvailable: true,
      }
    ],
    host: {
      name: `Max`,
      photo: `img/avatar-max.jpg`,
      isPro: false
    }
  }
];
