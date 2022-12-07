// Import the necessary libraries
import axios from "axios";

// Define the function
export const getPlaylist = async (accessToken: string): Promise<any> => {
  // Make a GET request to the Spotify API
  const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // Return the response
  return response.data;
};
