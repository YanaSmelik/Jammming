import styles from '../styles/track.module.css';

function Track(props){

  //TODO handleAddTrackToPlaylist={props.handleAddTrackToPlaylist}

     return (
      <div className={styles.container}>
    <h2>{props.name}</h2>
    <p>Artist: {props.artist}</p>
    <p>Album: {props.album}</p>
    </div>
 );
}

export default Track;