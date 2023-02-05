import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useEffect, useState} from "react";
import Render from './components/Render';

function App() {
  const CLIENT_ID = "777893299a6a41b8b1b12a4bdc09f193"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

const [token, setToken] = useState("")

useEffect(() => {
  const hash = window.location.hash
  let token = window.localStorage.getItem("token")

  if(!token && hash) {
    token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

    window.location.hash = ""
    window.localStorage.setItem("token", token)
  }

  setToken(token)
}, [])

const logout = () => {
  setToken("")
  window.localStorage.removeItem("token")
}






  return (

    <div className="App">
          <Header>
            <h1>Spotify React</h1>
            {!token ?
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        : <button onClick={logout} >logout</button>}

          </Header>
          <Render />
    </div>
  );
}

export default App;
