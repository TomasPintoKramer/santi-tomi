import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
import Header from '../commons/Header';
// // import TrackItem from '../commons/TrackItem';
import TrackListItem from '../commons/TrackListItem';


const Content = ({playlist}) => {
    
    const [singlePlaylist, setSinglePlaylist] = useState({});
    console.log('esto es playlist', playlist, 'esto es single',singlePlaylist);
    
 useEffect(()=> {
     if(!playlist.id) return;
     axios.get(`/api/playlists/${playlist.id}`)
     .then((res) => res.data)
     .then((pl) => setSinglePlaylist(pl))
    }, [playlist])
    
if (!playlist.name) return <p>No hay datos</p>;

return (<section className="layout">
    <Header playlist={playlist}/>
    {/* <TrackItem/> */}
    <TrackListItem tracks={singlePlaylist.tracks || []}/>
  </section>
)}

export default Content;