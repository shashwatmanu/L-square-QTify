import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';

import "./CardComp.css"
import { Stack } from '@mui/material';

const CardComponent = ({songs, img, follows, albumName, likes, isSongs}) => {
  // let some = {...songs};
  let title = "";
  if(!isSongs){
  title = songs.length+" songs";
 }

  return (
    <>
    <Tooltip title={title} placement='top' arrow>
     <Card sx={{ width: 159, maxHeight: 205, borderRadius: '7px' }}>
      
        <CardMedia
          component="img"
          height="169px"
          image={img}
          alt={img}
          

        />
        <Box sx={{display: 'flex', height:'24px', alignItems:'center', paddingLeft:'5px'}}>
         {isSongs?(<Chip label={likes + " Likes"} style={{backgroundColor: 'black', color: 'white', fontFamily:'inherit',height:'18px',borderRadius:'5px'}}></Chip>):(<Chip label={follows + " Follows"} style={{backgroundColor: 'black', color: 'white', fontFamily:'inherit',height:'18px',borderRadius:'5px'}}></Chip>)}
          </Box>
    
    </Card>
    <Box sx={{color: 'white', size: '14px', lineHeight: '21px',maxWidth: 159}}>{albumName}</Box>
    </Tooltip>
    </>
  )
}
export default CardComponent;
