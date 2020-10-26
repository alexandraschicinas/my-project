import React from 'react';
import { Link } from 'react-router-dom';
import { getWishlist } from './util/wishlist';

const MyList = ()=>{

    const movies = getWishlist();
    return (

        <div className="Movies"> {movies.map((movie,index )=>
            <Link to={ `/movie/${movie.id}`} key={`index${movie.title}${movie.id}`}>
              <div className="movie"
              style={{ 
              backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
              backgroundSize: 'contain',
              backgroundRepeat:'no-repeat',
              width: '200px',
              height: '400px',
              
            }}
            > 
           {/* <img 
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
            alt={`${movie.title} Poster`}/>  */}
             <div id= "para"> {movie.title}</div>
          <div> {movie.genres.map((genre) => <span key={genre.id}> {genre.name} </span>)}</div>
            </div>
            </Link>
           
            )
            }
            </div>
    
    )
    

    
}
export default MyList;