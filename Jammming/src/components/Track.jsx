import styles from '../styles/track.module.css';

function Track(){
   const[name, setName] = useState('');
   const[artist, setArtist] = useState('');
   const[album, setAlbum] = useState('');


     return (
      <div className={styles.container}>
    <h1>Track</h1>
    </div>
 );
}

export default Track;