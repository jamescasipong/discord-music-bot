const SpotifyWebApi = require('spotify-web-api-node');

// Initialize the Spotify API client
const spotifyApi = new SpotifyWebApi({
  clientId: '481cc19d42be4d1f98a3d51159d694dc',
  clientSecret: '7c831fa74f10401bbd6ba7bea2a7c5d0'
});

// Function to initialize and get access token
const initializeSpotify = async () => {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    console.log(`Spotify Access Token: ${data.body['access_token']}`);
    spotifyApi.setAccessToken(data.body['access_token']);
  } catch (err) {
    console.error('Error retrieving Spotify access token:', err);
    throw err; // Propagate the error if necessary
  }
};

// Export the Spotify API client and the initialization function
module.exports = {
  spotifyApi,
  initializeSpotify,
};
