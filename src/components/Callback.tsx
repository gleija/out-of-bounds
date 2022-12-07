import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Import the PlaylistTable component from the previous example
import { PlaylistTable } from "./PlaylistTable";

// Define the Callback component
export const Callback: React.FC = () => {
  // Use the useLocation hook to access the URL query string
  const location = useLocation();

  // Use the useState hook to store the access token in state
  // Update the type of the access token to be `string | null`
  const [accessToken, setAccessToken] = useState<string | null>(null);
  // Use the useEffect hook to extract the access token from the URL query string
  // when the component mounts, and update the access token in state
  useEffect(() => {
    const token = new URLSearchParams(location.hash).get("#access_token");
    setAccessToken(token);
  }, []);

  // If the access token is available, render the PlaylistTable component
  // and pass the access token as a prop
  if (accessToken) {
    return <PlaylistTable accessToken={accessToken} />;
  } else {
    // If the access token is not available, render a message indicating that
    // the user needs to grant permission
    return (
      <p>You need to grant permission to access your Spotify playlists.</p>
    );
  }
};
