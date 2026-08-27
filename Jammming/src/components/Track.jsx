import styles from '../styles/track.module.css';

function Track(props){

     return (
      <div className={styles.container}>
    <h1>Track</h1>
    <p>{props.name}</p>
    <p>{props.artist}</p>
    <p>{props.album}</p>
    </div>
 );
}

export default Track;