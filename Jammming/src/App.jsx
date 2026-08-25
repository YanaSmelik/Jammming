import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Track from './components/Track';
import Tracklist from './components/Tracklist';
import styles from './styles/app.module.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles.container}>
        <div>
          <SearchBar />
        </div>
        <div className={styles.mainContent}>
          <SearchResults />

          <div>
            <Tracklist />
            <Playlist />
          </div>
        </div>
        <Track />
      </div>
    </>
  )
}

export default App
