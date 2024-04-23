import React from "react";
import {Box, Stack, Typography} from '@mui/material';
import HeadphoneImage from "../../Assets/Headphone.png";
import './HeroSection.css';


const HeroSection = () => {
    return (<>
    <Box sx={{
        backgroundColor: "inherit",
        width: '100%',
        height: '270px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'inherit',
        color: 'white'
    }}>
        <Stack> 
            <Typography variant="h4">100 Thousand Songs, ad-free</Typography>
            <Typography variant="h4">Over thousands podcast episodes</Typography>
        </Stack>
        <img src={HeadphoneImage} alt="Headphones" className="headphone"/>
    </Box>
    
    </>)

}
export default HeroSection;
