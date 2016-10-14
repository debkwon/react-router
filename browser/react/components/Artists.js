'use strict';

import React from 'react';
import { Link } from 'react-router';

export default ({ artists, go }) => (
  <div>
    <h3>Artists</h3>
      <div className="list-group">
      {
        artists.map(artist => {
          console.log("Artist:", artist);
          return (
          <div className="list-group-item" key={ artist.id }>
          <div><Link to={`/artists/${artist.id}`} onClick={() => go(artist)} >{ artist.name }</Link></div>
          </div>
        )}
          )
      }
    </div>
  </div>
);