const isDevelopment = process.env.NODE_ENV === 'development';

export const API_BASE_URL = isDevelopment 
  ? 'http://localhost:3001/api'
  : 'https://isabel-sobe-desce-server.herokuapp.com/api'; // Replace with your actual production server URL

export const OPENTOPO_API_KEY = '5b3ce3597851110001cf624818e5bb9be6b57bd24'; 