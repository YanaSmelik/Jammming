import styles from "../styles/searchBar.module.css";
import { useState } from 'react'

function SearchBar(props) {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.container}>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="What are you looking for?"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      ></input>
      <button
        onClick={(event) => {
          props.handleSearch(search);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
