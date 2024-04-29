
import Navbar from "./Components/Navbar/Navbar"
import { useEffect, useState } from 'react';
import axios from "axios"; 
import Card from "./Components/Card/CardComponent"
import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import  Section  from "./Components/Section/Section";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette:{
    secondary:{
      main: '#34c94b'
    },
    primary:{
      main: '#ffffff'
    }
  }
})

function App() {
const [topAlbums, setTopAlbums] = useState([])
const [newAlbums, setNewAlbums] = useState([])
const [songs, setSongs] = useState([])
const [genres, setGenres] = useState([])
  
  const fetchTopAlbums = async() =>{
    let res = await axios.get('https://qtify-backend-labs.crio.do/albums/top')
    setTopAlbums(res.data);
  }

  const fetchNewAlbums = async() =>{
    let res = await axios.get('https://qtify-backend-labs.crio.do/albums/new')
    setNewAlbums(res.data);
  }

  const fetchSongs = async() =>{
    let res = await axios.get('https://qtify-backend-labs.crio.do/songs');
  setSongs(res.data);

  }
  const fetchGenres= async()=>{
    let res = await axios.get('https://qtify-backend-labs.crio.do/genres');
    setGenres(res.data.data);
    // console.log(res.data.data)

  }
  useEffect(()=>{
    fetchTopAlbums();
    fetchNewAlbums();
    fetchSongs();
    fetchGenres();
  },[])


  return (<>
  <ThemeProvider theme={theme}>
  <Navbar/>
  <HeroSection/>
  
  <Section albumData={topAlbums} sectionName="Top Albums"  isSongs={false}/>
  <Section albumData={newAlbums} sectionName="New Albums" isSongs={false}/>
  <Section albumData={songs} sectionName="Songs" isSongs={true} genres={genres}/>
  </ThemeProvider>
  </>)
}

export default App;
