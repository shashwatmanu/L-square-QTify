
import Navbar from "./Components/Navbar/Navbar"
import { useEffect, useState } from 'react';
import axios from "axios"; 
import Card from "./Components/Card/CardComponent"
import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import  Section  from "./Components/Section/Section";

function App() {
const [topAlbums, setTopAlbums] = useState([])
const [newAlbums, setNewAlbums] = useState([])
  
  const fetchTopAlbums = async() =>{
    let res = await axios.get('https://qtify-backend-labs.crio.do/albums/top')
    setTopAlbums(res.data);
  }

  const fetchNewAlbums = async() =>{
    let res = await axios.get('https://qtify-backend-labs.crio.do/albums/new')
    setNewAlbums(res.data);
  }

  const fetchSongs = async() =>{
    let res = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
  }
  useEffect(()=>{
    fetchTopAlbums();
    fetchNewAlbums();
  },[])


  return (<>
  <Navbar/>
  <HeroSection/>
  
  <Section albumData={topAlbums} sectionName="Top Albums"/>
  <Section albumData={newAlbums} sectionName="New Albums"/>
  </>)
}

export default App;
