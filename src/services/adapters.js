export const adaptOfferData = (data) => {
  return ({
    bedrooms: data.bedrooms,
    city: {
      location: {
        latitude: data.city.location.latitude,
        longitude: data.city.location.longitude,
        zoom: data.city.location.zoom
      },
      name: data.city.name
    },
    description: data.description,
    goods: data.goods,
    host: {
      avatarUrl: data.host[`avatar_url`],
      id: data.host.id,
      isPro: data.host[`is_pro`],
      name: data.host.name
    },
    id: data.id,
    images: data.images,
    isFavorite: data[`is_favorite`],
    isPremium: data[`is_premium`],
    location: {
      latitude: data.location.latitude,
      longitude: data.location.longitude,
      zoom: data.location.zoom
    },
    maxAdults: data[`max_adults`],
    previewImage: data[`preview_image`],
    price: data.price,
    rating: data.rating,
    title: data.title,
    type: data.type
  });
};

export const adaptOffersData = (data) => {
  return data.map((offerData) => {
    return adaptOfferData(offerData);
  });
};

export const adaptAuthInfo = (authInfo) => {
  return {
    avatarUrl: authInfo[`avatar_url`],
    email: authInfo.email,
    id: authInfo.id,
    isPro: authInfo[`is_pro`],
    name: authInfo.name
  };
};

export const adaptReview = {
  fromServerToClient(serverData) {
    return {
      id: serverData.id,
      rating: serverData.rating,
      date: serverData.date,
      comment: serverData.comment,
      user: {
        id: serverData.user.id,
        avatarUrl: serverData.user[`avatar_url`],
        isPro: serverData.user[`is_pro`],
        name: serverData.user.name
      }
    };
  }
};

export const adaptReviews = (serverData) => {
  return serverData.map((item) => adaptReview.fromServerToClient(item));
};
