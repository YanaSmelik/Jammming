import styles from '../styles/playlist.module.css';
import Tracklist from './Tracklist';

function Playlist(props) {
   return (
      <div className={styles.container}>
         //TODO Implement onchange input for setting playlist title
         <h1>Playlist</h1>
         <Tracklist tracklist={props.tracklist} onButtonClick={props.onButtonClick} isPlaylist={true}/>
      </div>
   );
}

export default Playlist;