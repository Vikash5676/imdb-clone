import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./Card"
import Card from './Card';
import "./Movielist.css";


const Movielist = () => {

    const [movieList,setMovieList]=useState([])
    const {type}=useParams()

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        getData()
    },[type])

    const getData=()=>{
        axios
      .get(
        `https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      )
      .then((res) => res.data)
      .then((result) => setMovieList(result.results));
    }
  return (
    <div className="movie__list">
        <h2 className="list__title">
            {(type?type:"POPULAR").toUpperCase()}
        </h2>
        <div className="list__cards">
            {
                movieList.map(movies=>{
                    return(
                    <Card movie={movies}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Movielist