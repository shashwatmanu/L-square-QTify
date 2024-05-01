import React from "react";
import styles from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { Stack, Box } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../App";
import  SearchSuggestions  from "./SearchSuggestions";


const SearchBox = () =>{
    const {newAlbums, topAlbums} = useContext(UserContext);
    const [search, setSearch] = useState("");
    const [searchAlbums, setSearchAlbums] = useState([]);
   

    let allAlbumsVar = [];
    for(let i=0;i<topAlbums.length;i++){
      allAlbumsVar.push(topAlbums[i]);
      allAlbumsVar.push(newAlbums[i]);
       }
    //    console.log(allAlbumsVar);

       const handleChange = (e) =>{
        setSearch(e.target.value);
       }

       useEffect(()=>{
let searchedAlbums = [];
for(let i=0;i<allAlbumsVar.length;i++){
    if(search!==""){
    if(allAlbumsVar[i]){
    if(allAlbumsVar[i].title.toLowerCase().includes(search)){
        searchedAlbums.push(allAlbumsVar[i]);
    }}}
    // console.log(allAlbumsVar[i].title);
}
// console.log(searchedAlbums);
setSearchAlbums(searchedAlbums);
       },[search])





    return (<>
    <form >
        
           <Stack>
            <div className={styles.wrapper}> 
        <input onChange={handleChange} className={styles.search} placeholder="Search an album of your choice" value={search}></input>
        <button className={styles.searchButton}><SearchIcon/></button>
        </div>
        <div><SearchSuggestions albums={searchAlbums}/></div>
        </Stack> 
       
    </form>
    </>)
}
export default SearchBox;