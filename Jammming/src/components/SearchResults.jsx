import styles from '../styles/searchResults.module.css';
import Tracklist from './Tracklist';

function SearchResults(props){
 return (
   <div className={styles.container}>
    <h1>Search Results</h1>
    <Tracklist tracklist={props.tracklist.data || []} handleAddTrackToPlaylist={props.handleAddTrackToPlaylist}/>
   </div>
 );
}

export default SearchResults;