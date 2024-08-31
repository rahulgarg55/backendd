/**
 * Provides routes for searching and retrieving country information.
 *
 * @module routes/countries
 */

/**
 * Searches for countries by name.
 *
 * @param {string} name - The name to search for.
 * @returns {Promise<Object[]>} - An array of country objects matching the search.
 */

/**
 * Retrieves details for a specific country.
 *
 * @param {string} countryCode - The ISO 3166-1 alpha-2 country code.
 * @returns {Promise<Object>} - The country object.
 */
const express = require('express');
const router = express.Router();
const countriesService = require('../services/countriesService');

router.get('/search/:name', async (req, res) => {
  try {
    const { name } = req.params;

    const countries = await countriesService.searchCountries(name);
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching countries', error: error.message });
  }
});

router.get('/:countryCode', async (req, res) => {
  try {
    const { countryCode } = req.params;
    const country = await countriesService.getCountryDetails(countryCode);
    res.json(country);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching country details', error: error.message });
  }
});

module.exports = router;
