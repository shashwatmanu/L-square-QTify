import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import Card  from '../../Components/Card/CardComponent'
import 'swiper/css';
import Box from '@mui/material/Box';
import './Carousel.css'
import 'swiper/css/navigation';
import { useRef } from 'react';
import nextImage from "../../Assets/NextButton.png"
import prevImage from "../../Assets/BackButton.png"

const Carousel = ({data, isSongs, songs}) => {
    const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='carousel'>
         <Swiper
      spaceBetween={50}
      modules={[Navigation, Scrollbar]}
    //   navigation={{
    //     prevEl: prevRef.current,
    //     nextEl: nextRef.current,
    //   }}
    navigation
    //   navigation={{ nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }}
    
      scrollbar={{ draggable: true }}
      slidesPerView={'auto'}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        
        {data.map((album)=>{ return(
            <SwiperSlide className='swiper-slide'>
            <Card songs ={album.songs} img={album.image} follows={album.follows} albumName={album.title}  key={album.id} isSongs={isSongs} likes={album.likes}/>
            </SwiperSlide>)
        })}
        
        {/* <SwiperSlide><Card/></SwiperSlide> */}
        {/* <button ref={prevRef}><img src={prevImage}/></button>
      <button ref={nextRef}><img src={nextImage}/></button> */}

    </Swiper>

    </div>
  )
}
export default Carousel;
