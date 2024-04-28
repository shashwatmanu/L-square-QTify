import React from 'react'
import Card  from '../../Components/Card/CardComponent'
import Box from '@mui/material/Box';
import "./Section.css"
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const Section = ({albumData, sectionName}) => {
  const gridLayout = albumData.map((album)=>
  <Grid item>
    <Card img={album.image} follows={album.follows} albumName={album.title} key={album.id}/>
    </Grid>
  )
  return (<>
   <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '32px', marginRight: '30px', marginBottom: '12px'}}>
<Box sx={{color: 'white'}}>{sectionName}</Box>
<Box><button className='button'>Collapse</button></Box>
   </Box>
  <Box sx={{marginLeft: '32px', marginRight: '32px', marginBottom: '32px'}}>
    <Grid container spacing={4}>
      {gridLayout}
      </Grid>
      </Box>
      <hr/>
    </>
  )
}
export default Section;


