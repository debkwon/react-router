'use strict';

import React, {Component} from 'react';
import SongsContainer from '../containers/SongsContainer';
import { Link } from 'react-router';

console.log("i got to album");
export default class extends Component {
  componentDidMount(){
    console.log("i am gonna fetch");
    fetch(`/api/albums/${this.props.params.albumId}`)
    .then(response => response.json())
    .then(album => {
      console.log(album);
      this.props.go(album)
    })
    .catch(error => console.error(error.stack))
  }

  
  render(){
    console.log("i can render");
    const { selectedAlbum } = this.props; 
    return (
            <div className="album">
              <div>
                <h3>{ selectedAlbum.name }</h3> 
                <div><Link to="/albums">Go to Albums</Link></div>
                <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
              </div>
              <SongsContainer songs={selectedAlbum.songs} />
            </div>
            );
    
  }
  
}
