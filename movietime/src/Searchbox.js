import React, { useState } from 'react';
import {ResultCard} from './ResultCard'
 const SearchBox = () => {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])
     const onChange = (event) => {
      event.preventDefault()
      setQuery(event.target.value)
      fetch (
        `https://api.themoviedb.org/3/search/movie/?api_key=697bccbdd485f20ab91cbd1ed65ce799&language=en-US&page=1&include_adult=false&query=${event.target.value}`)
        .then((response) => response.json())
        .then((data) => {
          if(!data.errors){
            setResults(data.results)
          }else{
            setResults([])
          }
        })
    }
           return (
             <div className="add-page">
             <div className="container">
               <div className="add-content">
             <div className="input-wrapper">
              <input
                        type="text"
                        placeholder="Search "
                        value={query}
                        onChange={onChange}
                      />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map ((movie,id) => (
                <li key={movie.id}>
                  <ResultCard movie={movie}/>
                   </li>
              ))}
            </ul>
          )}
          </div>
          </div>
          </div>
    )
}
export default SearchBox;