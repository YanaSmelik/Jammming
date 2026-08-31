import styles from "../styles/tracklist.module.css";
import Track from "./Track";

// Reusable in SearchResults and in Playlist
function Tracklist(props) {
  let tracklist = props.tracklist?.data || [];
  let tracks = tracklist.map((track) => {
    return (
      <Track
        name={track.title}
        artist={track.artist.name}
        album={track.album.title}
        key={track.id}
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
