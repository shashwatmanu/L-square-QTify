import React from 'react'
import Card  from '../../Components/Card/CardComponent'
import Box from '@mui/material/Box';
import "./Section.css"
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useState } from 'react';
import  Carousel  from '../Carousel/Carousel';

const Section = ({albumData, sectionName}) => {
  const [showAll, setShowAll] = useState(false);
  const gridLayout = albumData.map((album)=>
  <Grid item>
    <Card img={album.image} follows={album.follows} albumName={album.title} key={album.id}/>
    </Grid>
  )
 const handleClick = () => {
  setShowAll(!showAll);
 }

  return (<>
   <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '32px', marginRight: '30px', marginBottom: '12px'}}>
<Box sx={{color: 'white'}}>{sectionName}</Box>
<Box sx={{marginBottom:'10px'}}><button className='button' onClick={handleClick}>{showAll?"Collapse":"Show all"}</button></Box>
   </Box>
  {showAll?(<><Box sx={{marginLeft: '32px', marginRight: '32px', marginBottom: '32px'}}>
    <Grid container spacing={4}>
      {gridLayout}
      </Grid>
      </Box>
      <hr/></>):(<Carousel data={albumData}/>)}
    </>
  )
}
export default Section;


