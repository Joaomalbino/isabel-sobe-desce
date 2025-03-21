import axios from 'axios';
import { API_BASE_URL } from '../config';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const searchLocation = async (query) => {
  try {
    const response = await api.get('/search', {
      params: { q: query }
    });
    return response.data;
  } catch (error) {
    console.error('Search error:', error);
    throw error;
  }
};

export const getElevation = async (lat, lon) => {
  try {
    const response = await api.get('/elevation', {
      params: { lat, lon }
    });
    return response.data;
  } catch (error) {
    console.error('Elevation error:', error);
    throw error;
  }
};

export const getRoute = async (startLat, startLon, endLat, endLon) => {
  try {
    const response = await api.get('/route', {
      params: { startLat, startLon, endLat, endLon }
    });
    return response.data;
  } catch (error) {
    console.error('Route error:', error);
    throw error;
  }
};

export const checkHealth = async () => {
  try {
    const response = await api.get('/health');
    return response.data;
  } catch (error) {
    console.error('Health check error:', error);
    throw error;
  }
}; 