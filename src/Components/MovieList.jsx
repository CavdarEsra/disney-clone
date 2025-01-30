import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import HrMovieCard from './HrMovieCard';

function MovieList({genreId,index_}) {

    const [movieList,setMovieList]=useState([])

    useEffect(()=>{
        getMovieByGenreId();
    })

    const getMovieByGenreId = () =>{
        GlobalApi.getMovieByGenreId(genreId).then(response=>{
            setMovieList(response.data.results);
        })  
    }

  return (
    <div className='flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-5'>
        {movieList.map((item,index)=>(
            <>
                {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}            
            </>
        ))}
    </div>
  )
}

export default MovieList