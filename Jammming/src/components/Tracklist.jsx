import styles from '../styles/tracklist.module.css';

function Tracklist() {
   const[trackList, setTracklist] = useState([]);


   return (
      <div className={styles.container}>
         <h1>Track list</h1>
      </div>
   );
}

export default Tracklist;