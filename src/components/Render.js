import React from 'react';
// import { useState } from "react";

function Render(props) {
  // const [results, setResults] = useState([])

    const renderArtists = () => {
        return props.artists && props.artists.map(artist => (
            <div key={artist.id}>
                    {/* {console.log("inside function", props)} */}
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
                {props.setArtists()}
            </div>
            
        ))
        
    }

  return (
    <>
    {console.log(props.artists)}
    {renderArtists()}
    </>
  )
}

export default Render;