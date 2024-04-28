import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import "./CardComp.css"
import { Stack } from '@mui/material';

const CardComponent = ({img, follows, albumName}) => {
  return (
    <>
    
     <Card sx={{ width: 159, maxHeight: 205, borderRadius: '7px' }}>
      
        <CardMedia
          component="img"
          height="169px"
          image={img}
          alt={img}
          

        />
        <Box sx={{display: 'flex', height:'24px', alignItems:'center', paddingLeft:'5px'}}>
          <Chip label={follows + " Follows"} style={{backgroundColor: 'black', color: 'white', fontFamily:'inherit',height:'18px',borderRadius:'5px'}}></Chip> 
          </Box>
    
    </Card>
    <Box sx={{color: 'white', size: '14px', lineHeight: '21px',maxWidth: 159}}>{albumName}</Box>
    
    </>
  )
}
export default CardComponent;
