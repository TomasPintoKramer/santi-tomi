import React, { useState,useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import axios from "axios";



const App = () => {

  
  const [playlist, setPlaylists] = useState([]) 
  const [selectedPlaylist, setSelectedPlaylist] = useState({})
  

  const handleClick = function (pl) {
      setSelectedPlaylist(pl);
  };

  useEffect(() => {
    axios
      .get("/api/playlists")
      .then((res) => res.data)
      .then((list) => setPlaylists(list.items));
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar handleClick={handleClick} playlist={playlist}/>
      <Content playlist={selectedPlaylist}/>
    </div>
  );
};

export default App;