import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { getPlaylist } from "./utils/getPlaylist";

// Import the `getPlaylist` function from the previous example

// Create a styled table component
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

// Create a styled table row component
const Row = styled.tr`
  border-bottom: 1px solid #ccc;
`;

// Create a styled table cell component
const Cell = styled.td`
  padding: 10px;
  text-align: left;
`;

// Update the function signature to accept a `accessToken` prop of type `string`
export const PlaylistTable: React.FC<{ accessToken?: string }> = ({
  accessToken,
}) => {
  // Use the useState hook to store the playlist data in state
  const [playlists, setPlaylists] = useState([]);

  // Use the useEffect hook to call the `getPlaylist` function when the component
  // mounts and update the playlist data in state
  useEffect(() => {
    async function fetchData() {
      // Check if the user has granted permission and an access token is available
      if (accessToken) {
        // Call the `getPlaylist` function and update the playlist data in state
        const data = await getPlaylist(accessToken);
        setPlaylists(data.items);
      }
    }
    fetchData();
  }, [accessToken]);

  // Check if the user has granted permission and an access token is available
  if (accessToken) {
    return (
      <Table>
        {/* Loop through the playlist data and render a table row for each playlist */}
        <tbody>
          {playlists.map((playlist: any) => (
            <Row key={playlist.id}>
              <Cell>{playlist.name}</Cell>
              <Cell>{playlist.description}</Cell>
              <Cell>{playlist.tracks.total}</Cell>
            </Row>
          ))}
        </tbody>
      </Table>
    );
  } else {
    // If the user has not granted permission, render a button to initiate the OAuth flow
    return <button onClick={startAuthFlow}>Connect to Spotify</button>;
  }

  // Define a function to start the OAuth flow
  function startAuthFlow() {
    // Redirect the user to the Spotify login page to grant permission
    window.location.href = `https://accounts.spotify.com/authorize?client_id=<CLIENT_ID>&response_type=token&redirect_uri=http://127.0.0.1:5173/callback`;
  }
};
