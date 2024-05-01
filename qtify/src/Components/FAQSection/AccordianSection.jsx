import React from 'react'
import {Box, Stack, Typography} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

 const AccordianSection = () => {
  return (
    <>
    <Box sx={{display:'flex',justifyContent:'center', marginTop:'32px'}}>
        <Stack>
          <Box sx={{display:'flex', flexDirection:'column',alignItems:'center'}}>
            <Box>
        <Typography variant='h4' sx={{color:'white',fontFamily:'inherit', fontWeight:'600', marginBottom:'12px'}}>FAQs</Typography>
        </Box>
        <Box>
        <Accordion sx={{borderRadius:'10px', width:'800px', marginBottom:'12px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{fill: "#34c94b"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{backgroundColor:'#121212', color:'white', border:'1px solid white', borderRadius:'10px'}}
        >
          Is QTify free to use?
        </AccordionSummary>
        <AccordionDetails>
        Yes! It is 100% free, and has 0% ads!
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{borderRadius:'10px', marginBottom:'12px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{fill: "#34c94b"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{backgroundColor:'#121212', color:'white', border:'1px solid white', borderRadius:'10px'}}
        >
        Can I download and listen to songs offline?
        </AccordionSummary>
        <AccordionDetails>
        Sorry, unfortunately we don't provide the service to download any songs.
        </AccordionDetails>
      </Accordion>
      </Box>
      </Box>
        </Stack>
    </Box>
    </>
  )
}
export default AccordianSection;
