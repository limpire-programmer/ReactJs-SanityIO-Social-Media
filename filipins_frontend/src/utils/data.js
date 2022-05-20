export const categories = [
  {
    name: 'Personal',
    image: 'https://img.icons8.com/external-soft-fill-juicy-fish/344/external-personal-internet-security-soft-fill-soft-fill-juicy-fish-2.png',
  },
  {
    name: 'Family',
    image: 'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/344/external-family-family-icongeek26-linear-colour-icongeek26-7.png',
  },
  {
    name: 'Favorites',
    image: 'https://img.icons8.com/external-prettycons-lineal-color-prettycons/344/external-favorites-social-media-prettycons-lineal-color-prettycons.png',
  },
  {
    name: 'Screenshots',
    image: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-screen-augmented-reality-flaticons-lineal-color-flat-icons-2.png',
  },
  {
    name: 'Wallpaper',
    image: 'https://img.icons8.com/fluency/344/wallpaper.png',
  },
  {
    name: 'Food',
    image: 'https://img.icons8.com/external-flat-land-kalash/344/external-food-food-flat-land-kalash-20.png',
  },
  {
    name: 'Nature',
    image: 'https://img.icons8.com/external-microdots-premium-microdot-graphic/344/external-beautiful-nature-landscape-microdots-premium-microdot-graphic.png',
  },
  {
    name: 'Art',
    image: 'https://img.icons8.com/external-detailed-filled-line-rakhmat-setiawan/344/external-illustration-graphic-design-filled-line-detailed-filled-line-rakhmat-setiawan.png',
  }, {
    name: 'travel',
    image: 'https://i.pinimg.com/236x/fa/95/98/fa95986f2c408098531ca7cc78aee3a4.jpg',
  },
  {
    name: 'Quotes',
    image: 'https://i.pinimg.com/236x/46/7c/17/467c17277badb00b638f8ec4da89a358.jpg',
  }, {
    name: 'Random',
    image: 'https://img.icons8.com/ios/344/xlarge-icons.png',
  }, {
    name: 'Animals',
    image: 'https://img.icons8.com/color/344/giraffe-full-body.png',
  },
  {
    name: 'Others',
    image: 'https://img.icons8.com/ios/344/moleskine-icon.png',
  },
];

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    } `;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
          asset->{
            url
          }
        },
            _id,
            destination,
            postedBy->{
              _id,
              userName,
              image
            },
            save[]{
              _key,
              postedBy->{
                _id,
                userName,
                image
              },
            },
          }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};