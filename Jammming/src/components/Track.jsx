import styles from '../styles/track.module.css';

function Track(props) {

  return (
    <div className={styles.container}>
      <h2>{props.track.title}</h2>
      <p>Artist: {props.track.artist.name}</p>
      <p>Album: {props.track.album.title}</p>
      <button type="button" onClick={() => props.handleAddTrackToPlaylist(props.track)}>+</button>
    </div>
  );
}

export default Track;