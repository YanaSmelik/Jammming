import styles from '../styles/playlist.module.css';
import Tracklist from './Tracklist';

function Playlist(props) {
   return (
      <div className={styles.container}>
         <h1>Playlist</h1>
         {/* <Tracklist tracklist={props.tracklist}/> */}
      </div>
   );
}

export default Playlist;