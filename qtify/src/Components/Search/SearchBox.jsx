import React from "react";
import styles from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () =>{
    return (<>
    <form className={styles.wrapper}>
        <input className={styles.search} placeholder="Search an album of your choice"></input>
        <button className={styles.searchButton}><SearchIcon/></button>
    </form>
    </>)
}
export default SearchBox;