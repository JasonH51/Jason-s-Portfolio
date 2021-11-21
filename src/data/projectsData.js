export const featured = [
  {
    id: 1,
    name: `E-Commerce-Website`,
    desc: `E-Commerce website using FakeStoreAPI.com for dummy data. This was a great project to make for me because I was able to practice using redux/toolkit.`,
    img: 'assets/e-website.PNG',
    git: 'https://github.com/JasonH51/e-commerce-website',
    website: 'https://wojak.netlify.app/',
    tech: ['react', 'styled-components', 'redux', 'react-router', 'axios']
  },
  {
    id: 2,
    name: `Mongodb - Express`,
    desc: `This is a CRUD api that uses models for products, users, carts, and orders. This api has routes for get, put, post, delete and saves everything to a cloud.mongodb database.`,
    img: 'assets/e-api.PNG',
    git: 'https://github.com/JasonH51/e-commerce-api',
    website: '',
    tech: ['nodejs', 'express', 'mongodb', 'mongoose', 'JWT']
  }
  // {
  //   id: 3,
  //   name: `E-Commerce-Admin`,
  //   desc: `This is a place to interact with the database. You can create/edit/delete products and users.`,
  //   img: 'assets/admin.PNG',
  //   git: 'https://github.com/JasonH51/admin',
  //   website: 'https://admin-only.netlify.app/',
  //   tech: ['react', 'material-ui', 'redux', 'axios', 'react-router']
  // }
];

export const frontEnd = [
  {
    id: 1,
    name: `Movies & TV shows`,
    desc: `I build this website using React and pulled the data using themoviedb.org API. You're able to see the currently trending movies and shows right now, filter by category, and search by name. All API requests are dynamic using javascript template literals. Try it out and find your next show to watch.`,
    img: 'assets/movieWebsite.PNG',
    git: 'https://github.com/JasonH51/Movies-TV-Series',
    website: 'https://movies-tv-series.netlify.app',
    tech: ['react', 'axios', 'react-router', 'material-ui', 'moviedb api']
  },
  {
    id: 2,
    name: `Food & Entertainment`,
    desc: `This web app gets your current location (if allowed) from the DOM and uses this data to dynamically render and fetch from google maps and travel advisor api (from rapidapi.com) using the coordinates and "type" category from the drop-down menu. You'll get a list of local businesses and relevant information about them.`,
    img: 'assets/mapSite.PNG',
    git: 'https://github.com/JasonH51/food-and-entertainment',
    website: 'https://food-and-entertainment.netlify.app/',
    tech: ['react', 'axios', 'material-ui', 'react-google-maps', 'travel-advisor-api']
  },
  {
    id: 3,
    name: `E-Commerce-Website`,
    desc: `E-Commerce website using FakeStoreAPI.com. This shopping web app uses redux to store cart and user information which persists. You're about to checkout the cart using react-stripe-checkout. Also, this project is part of a full stack package I'm currently working on.`,
    img: 'assets/e-website.PNG',
    git: 'https://github.com/JasonH51/e-commerce-website',
    website: 'https://wojak.netlify.app/',
    tech: ['react', 'redux', 'axios', 'react-router', 'styled-components']
  }
  // {
  //   id: 4,
  //   name: `E-Commerce-Admin`,
  //   desc: `This is a place to interact with the database. You can create/edit/delete products and users.`,
  //   img: 'assets/admin.PNG',
  //   git: 'https://github.com/JasonH51/admin',
  //   website: 'https://admin-only.netlify.app/',
  //   tech: ['react', 'material-ui', 'redux', 'axios', 'react-router']
  // }
];

export const backEnd = [
  {
    id: 1,
    name: `Mongodb - Express`,
    desc: `E-commerce backend server connected with a cloud.mongodb database. Building a CRUD API that uses mongoose models for products, users, carts, and orders. When a post request is made at the register endpoint, I'm using CryptoJS to encrypt the password before saving it to the database and a JWT is created on login. Admins can update, create, and delete anything in the database and users can get items from the database.`,
    img: 'assets/e-api.PNG',
    git: 'https://github.com/JasonH51/e-commerce-api',
    website: '',
    tech: ['nodejs', 'express', 'JWT', 'mongodb', 'mongoose']
  }
];
