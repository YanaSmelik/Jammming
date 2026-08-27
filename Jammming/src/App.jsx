import { useState } from 'react'
import './App.css'
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Track from './components/Track';
import Tracklist from './components/Tracklist';
import styles from './styles/app.module.css';
import tracks from './data/tracks.json';


function App() {
  const[playlist, setPlaylist] = useState([]);
  const[searchResults, setSearchResults] = useState(tracks);

  return (
    <>
      <div className={styles.container}>
        <div>
          <SearchBar />
        </div>
        <div className={styles.mainContent}>

          <div>
            <SearchResults tracklist={searchResults}/>
            <Playlist tracklist={searchResults} />
          </div>
        </div>
        <Track />
      </div>
    </>
  )
}

export default App
