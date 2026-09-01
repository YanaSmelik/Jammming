import styles from "../styles/tracklist.module.css";
import Track from "./Track";

// Reusable in SearchResults and in Playlist
function Tracklist(props) {
   let tracks = props.tracklist.map((track) => {
      return (
         <Track
            track={track}
            key={track.id}
            handleAddTrackToPlaylist={props.handleAddTrackToPlaylist}
         />
      );
   });

   return (
      <div className={styles.container}>
         <h1>Track list</h1>
         <ul>{tracks}</ul>
      </div>
   );
}

export default Tracklist;
