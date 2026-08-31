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

   const handleSearch = async (searchQuery) => {
     setSearchResults( await getData(searchQuery));
  };

  async function getData(searchQuery) {
    const url = `https://api.deezer.com/search?q=${searchQuery}`;
    const corsProxy = "https://proxy.corsfix.com/?";
    try {
      const response = await fetch(corsProxy + url); 
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      return result;
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
            <SearchResults searchResults={searchResults} />
            <Playlist tracklist={searchResults} />
          </div>
        </div>
        <Track />
      </div>
    </>
  );
}

export default App;
