import styles from '../styles/playlist.module.css';
import Tracklist from './Tracklist';

function Playlist() {
   return (
      <div className={styles.container}>
         <h1>Playlist</h1>
         <Tracklist />
      </div>
   );
}

export default Playlist;