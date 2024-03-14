const axios = require('axios');

async function getAltPrice() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=altcoin&vs_currencies=usd');
    const altPrice = response.data.altcoin.usd;
    return altPrice;
  } catch (error) {
    console.error('Error retrieving ALT price:', error);
    throw error;
  }
}

module.exports = {
  getAltPrice
};
