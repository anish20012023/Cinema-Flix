import React from 'react'
import { useParams } from 'react-router-dom'
import MovieDetail from '../Components/MovieDetail';

function DetailPage() {
  const {page, movieId}=useParams();
  console.log(movieId);
  return (
   <MovieDetail id={movieId}/>
  )
}

export default DetailPage