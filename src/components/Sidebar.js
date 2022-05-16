import React from 'react';


const Sidebar = ({ handleClick, playlist }) => {
  const bandas = playlist.map((playlists) => (
    <li onClick={() => handleClick(playlists)} key={playlists.id}>
      <a>{playlists.name}</a>
    </li>
  ));

  return (
    <aside className="menu column is-one-quarter">
      <p className="menu-label">Playlists</p>
      <ul className="menu-list">{bandas}</ul>
    </aside>
  );
};

export default Sidebar;
