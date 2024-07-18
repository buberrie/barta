import axios from 'axios';

// Function to fetch latest cryptocurrency exchange rates
export async function GET(request) {
  try {
    const apiKey = process.env.NEXT_COINMARKET_API_KEY;
    const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

    // Parameters for the API request
    const params = {
      start: 1,      
      limit: 5,     
      convert: 'USD'
    };

    // Headers containing the API key
    const headers = {
      'X-CMC_PRO_API_KEY': apiKey
    };

    // Sending GET request to CoinMarketCap API
    const response = await axios.get(url, { headers, params });

    // Processing the response data to extract relevant information
    const data = response.data.data.reduce((acc, crypto) => {
      // Extracting only USDT, BTC, and ETH data
      if (crypto.symbol === 'USDT' || crypto.symbol === 'BTC' || crypto.symbol === 'ETH') {
        acc[crypto.symbol.toLowerCase()] = crypto.quote.USD.price; // Storing symbol and USD price
      }
      return acc;
    }, {});

    // Returning a Response object with JSON data and HTTP status 200
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    // Handling errors, logging them, and returning an error Response
    console.error('Error fetching exchange rates:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch exchange rates' }), { status: 500 });
  }
}
