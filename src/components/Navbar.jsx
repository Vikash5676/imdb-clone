import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
        <div className="container">
          <div className="container_left">  
                <Link to="/" style={{textDecoration:"none"}}><img className='imdb' src={require("../assets/IMDb.png")} alt="" /></Link>
                <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
                <Link to="/movies/popular" style={{textDecoration:"none"}} className="user_link"><img src={require("../assets/user.png")} alt="" className='user'/></Link></div>
                
                
        </div>
    </div>
  )
}

export default Navbar