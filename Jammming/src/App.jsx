import { useState } from "react";
import "./App.css";
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Track from "./components/Track";
import Tracklist from "./components/Tracklist";
import styles from "./styles/app.module.css";
import tracks from "./data/tracks.json";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [searchResults, setSearchResults] = useState(tracks);

  const handleSearch = (searchInput) => {
    getData();
  };

  //TODO CORS proxi, query for url
  async function getData() {
    const url = "https://api.deezer.com/user/2529/playlistshttps://musicbrainz.org/ws/2/recording?fmt=json&query=%22we%20will%20rock%20you%22%20AND%20arid:0383dadf-2a4e-4d10-a46a-e9e041da8eb3";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div>
          <SearchBar handleSearch={handleSearch} />
        </div>
        <div className={styles.mainContent}>
          <div>
            <SearchResults tracklist={searchResults} />
            <Playlist tracklist={searchResults} />
          </div>
        </div>
        <Track />
      </div>
    </>
  );
}

export default App;
