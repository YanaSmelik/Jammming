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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Playlist />
      <SearchBar />
      <SearchResults />
      <Track />
      <Tracklist />
    </>
  )
}

export default App
