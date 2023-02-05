import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Render from "./Render";


function Api(props) {
const [searchKey, setSearchKey] = useState("")
const [artists, setArtists] = useState([])


const searchArtists = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${props.setToken}`
        },
        params: {
            q: searchKey,
            type: "artist"
        }
    })
    setArtists(data.artists.items)
    console.log(data.artists.items)
}



    // const _getToken = async ()=> {
    //     const outcome = await axios.post('https://accounts.spotify.com/api/token', {
    //         'Content-Type' : 'application/x-www-form-urlencoded', 
    //         'Authorization' : 'Basic ' + btoa( clientID + ':' + clientSecret)
    //     },
    //     body
    //     )
    //     const data = await outcome.json();
    //     return data.access_token;
    // };

    // const _getGenres = async (token) => {
    //     const result = await axios.get(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
    //         headers: { 'Authorization' : 'Bearer ' + token}
    //     });
    //     const data = await result.json();
    //     return data.categories.items;
    // };

    // const _getPlaylistByGenre = async (token, genreId) => {
    //     const limit = 10;

    //     const result = await axios.get(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
    //         headers: { 'Authorization' : 'Bearer ' + token}
    //     });

    //     const data = await result.json();
    //     return data.playlists.items
    // }
    


//   const requestAPI = async () => {
//     try {
//       let getResults = axios.get(
//         'https://spotify23.p.rapidapi.com/artists/',
//         {
//           headers: {    'X-RapidAPI-Key': '7ca646c9ccmsh7354a5810b83bd9p12700djsn7398949f2abf',
//           'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'},
//           params: {"id": "6xYGLouunUz3QAYt2aJF2E"}
//         }
//       );
//       console.log(getResults.data.results);
//       setResults(getResults.data)

//     } catch (err) {
//       console.log(err);
//     };
//     console.log(requestAPI)
//   };

// const renderArtists = () => {
//     return artists.map(artist => (
//         <div key={artist.id}>
//             {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
//             {artist.name}
//         </div>
//     ))
// }

  return (
    // <button onClick={() => _getToken()} >click for token</button>
        
        <Form>
          <Form.Group onSubmit={searchArtists} className="mb-3">
            <Form.Label>Artist Name</Form.Label>
            <Form.Control type="text" onChange={e => setSearchKey(e.target.value)} />
            <Form.Text className="text-muted">
              Search for your favourite artist!
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>

                

        </Form>
      
  )



}

export default Api;
