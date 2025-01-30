import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const image_base_url = "https://image.tmdb.org/t/p/original";

function Slider() {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();
    const screenWidth = window.innerWidth;

    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(response =>{
            setMovieList(response.data.results)
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth-110
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth-110
    }

  return (
    <div>
        <HiChevronLeft onClick={()=>sliderLeft(elementRef.current)} className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer'/>
        <HiChevronRight onClick={()=>sliderRight(elementRef.current)} className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0'/>
        <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
            {movieList.map((item,index)=>(
                <img src={image_base_url+item.backdrop_path} className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md'/>
            ))}
        </div>
    </div>
  )
}

export default Slider