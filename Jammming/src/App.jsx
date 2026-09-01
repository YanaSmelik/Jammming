import { useState } from "react";
import "./App.css";
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import styles from "./styles/app.module.css";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

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

  function handleAddTrackToPlaylist(track) {
    if(!playlist.includes(track)) {
      setPlaylist([...playlist, track]);
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
            <SearchResults tracklist={searchResults} handleAddTrackToPlaylist={handleAddTrackToPlaylist}/>
            <Playlist tracklist={playlist} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
