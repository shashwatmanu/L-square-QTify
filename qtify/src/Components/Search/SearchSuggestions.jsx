import React from 'react'
import { Box, Stack } from '@mui/material';
import styles from "./Search.module.css";

const SearchSuggestions = ({albums}) => {
    // console.log(albums);
  return (
    <>
<Box sx={{display:'flex',top: '74px',position:'absolute',border:'1px solid #34c94b',width:'576px',backgroundColor:'#121212',borderRadius:'0px 0px 10px 10px',borderTop:'none',zIndex:'2'}}>
    <Stack>
{albums.map((album)=>{
    return (<>
    <Box sx={{display:'flex', alignItems:'center', width:'576px', justifyContent:"space-between"}}>
<Box sx={{display:'flex'}}>
<img className={styles.image} src={album.image}></img>
<Stack>
    <h3 className={styles.text}>{album.title}</h3>
    <h6 className={styles.text}>{album.songs[0].artists[0]}, {album.songs[0].artists[1]}</h6>
</Stack>
</Box>

<Box>
<p className={styles.text}>{album.follows} Follows</p>
</Box>
</Box>

    </>)
})}
</Stack>
</Box>
    </>
  )
}
export default SearchSuggestions;
