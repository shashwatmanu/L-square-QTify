import React, { useEffect } from 'react'
import Card  from '../../Components/Card/CardComponent'
import Box from '@mui/material/Box';
import "./Section.css"
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useState } from 'react';
import  Carousel  from '../Carousel/Carousel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import axios from "axios"; 

const Section = ({albumData, sectionName, isSongs, genres}) => {
  const [showAll, setShowAll] = useState(false);
  const [value, setValue] = React.useState('1');
//  if(isSongs){console.log(albumData)}

let filteredAlbums = [];
if(isSongs){
  
  for(let i=0;i<albumData.length;i++){
    // console.log(albumData[i].genre.label);
    // console.log(value);
    if(albumData[i].genre.label===value){
      filteredAlbums.push(albumData[i]);
    }
  }
}
console.log(filteredAlbums);
  


  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      // maxWidth: 40,
      width: '100%',
      backgroundColor: '#34c94b',
    },
  });
  
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      // fontWeight: theme.typography.fontWeightRegular,
      // fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: '#fff',
      '&.Mui-selected': {
        color: '#fff',
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'black',
      },
    }),
  );


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const gridLayout = albumData.map((album)=>
  <Grid item>
    <Card img={album.image} follows={album.follows} albumName={album.title} key={album.id} likes={null}/>
    </Grid>
  )

  const tabs = (<Box sx={{ width: '100%', bgcolor: 'inherit', marginBottom: '24px', marginLeft: '32px'}}>
  <StyledTabs value={value} onChange={handleChange} indicatorColor='secondary'>
  <StyledTab label="All" value={1}/>
    {genres?(genres.map((genre)=><StyledTab label={genre.label} value={genre.label}/>)):("")}
    
  </StyledTabs>
</Box>)

 const handleClick = () => {
  setShowAll(!showAll);
 }

  return (<>
   <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '32px', marginRight: '30px', marginBottom: '12px'}}>
<Box sx={{color: 'white'}}>{sectionName}</Box>

{isSongs?"":(<Box sx={{marginBottom:'10px'}}><button className='button' onClick={handleClick}>{showAll?"Collapse":"Show all"}</button></Box>)}
   </Box>
{isSongs?tabs:""}

  {showAll?(<><Box sx={{marginLeft: '32px', marginRight: '32px', marginBottom: '32px'}}>
    <Grid container spacing={4}>
      {gridLayout}
      </Grid>
      </Box>
      <hr/></>):(<Carousel data={(value!==1&&isSongs===true)?filteredAlbums:albumData} isSongs={isSongs}/>)}
      {(isSongs)?<hr/>:""}
    </>
  )
}
export default Section;


