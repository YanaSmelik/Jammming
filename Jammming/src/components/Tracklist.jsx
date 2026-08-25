import styles from '../styles/tracklist.module.css';
import Track from './Track';

// Reusable in SearchResults and in Playlist
function Tracklist({tracklist}) {

    let tracks = tracklist.map((track) => {
      //TODO: track.id = from API 
      return <Track name={track.name} artist={track.artist} album={track.album} key={track.id} /> 
   })

   return (
      <div className={styles.container}>
         <h1>Track list</h1>
         <ul>{tracks}</ul>
      </div>
   );
}

export default Tracklist;