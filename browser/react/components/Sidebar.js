'use strict';

import React from 'react';
import { Link } from 'react-router';
export default ({ go, location }) => (
  <sidebar>
    <img src="juke.svg" className="logo" />
    <section>
      <h4 className={location.match('album') ? 'menu-item active' : 'menu-item'}>
        <div><Link to="/albums">ALBUMS</Link></div>
      </h4>
    </section>
    <section>
      <h4 className={location.match('artist') ? 'menu-item active' : 'menu-item'}>
        <a href="#" onClick={() => go('artists')}>ARTISTS</a>
      </h4>
    </section>
  </sidebar>
);