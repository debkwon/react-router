'use strict';

import { connect } from 'react-redux';
import Album from '../components/Album';
import { receiveAlbum,fetchAndGoToAlbum } from '../action-creators/albums';
//dispatch(receiveAlbum(album))
console.log("in album container");
const mapStateToProps = ({ selectedAlbum }) => ({
  selectedAlbum
});

const mapDispatchToProps = dispatch => ({
  go: album => dispatch(fetchAndGoToAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);