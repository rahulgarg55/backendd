const axios = require('axios');

const API_BASE_URL = 'https://restcountries.com/v3.1';

const searchCountries = async (name) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/name/${name}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return [];
    }
    throw error;
  }
};

const getCountryDetails = async (countryCode) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/alpha/${countryCode}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('Country not found');
    }
    throw error;
  }
};

module.exports = {
  searchCountries,
  getCountryDetails,
};
