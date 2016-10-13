'use strict';

import { RECEIVE_ALBUM } from '../constants';
import { convertAlbum } from '../converters';

const initialAlbum = {songs:[]}; //super duper important! allows Album component to render the first time and have songs something to map over

export default function album (state = initialAlbum, action) {
  switch (action.type) {
    case RECEIVE_ALBUM: return convertAlbum(action.album);
    default: return state;
  }
}