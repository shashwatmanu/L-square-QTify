
import Navbar from "./Components/Navbar/Navbar"
import { useEffect, useState, createContext } from 'react';
import axios, { all } from "axios"; 
import Card from "./Components/Card/CardComponent"
import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import  Section  from "./Components/Section/Section";
import { createTheme, ThemeProvider } from "@mui/material";
import  AccordianSection  from "./Components/FAQSection/AccordianSection";

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

export const UserContext = createContext();

function App() {
const [topAlbums, setTopAlbums] = useState([])
const [newAlbums, setNewAlbums] = useState([])
const [songs, setSongs] = useState([])
const [genres, setGenres] = useState([])
const [allAlbums, setAllAlbums] = useState([])


  
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
    // document.title='QTify';
    fetchTopAlbums();
    fetchNewAlbums();
    fetchSongs();
    fetchGenres();

  },[])

  // const getAllAlbums = () =>{
  //   let allAlbumsVar = [];
  //   for(let i=0;i<topAlbums.length;i++){
  //     allAlbumsVar.push(topAlbums[i]);
  //     allAlbumsVar.push(newAlbums[i]);
  //      }
  //      setAllAlbums(allAlbumsVar);
  //     //  console.log(allAlbums);
  //      return allAlbums
  // }

 
// console.log(allAlbums);

  return (<>
  <ThemeProvider theme={theme}>
  <UserContext.Provider value={{newAlbums,topAlbums}}>
  <Navbar/>
  </UserContext.Provider>
  <HeroSection/>
  
  <Section albumData={topAlbums} sectionName="Top Albums"  isSongs={false}/>
  <Section albumData={newAlbums} sectionName="New Albums" isSongs={false}/>
  <Section albumData={songs} sectionName="Songs" isSongs={true} genres={genres}/>
  <AccordianSection/>
  </ThemeProvider>
  </>)
}

export default App;
