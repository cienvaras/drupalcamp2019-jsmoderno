import React from 'react';
import PropTypes from 'prop-types';
import VideoListItem from './VideoListItem';

function VideoList(props) {
  const { videos, selectVideoHandler } = props;
  const videoList = videos.map(item => (
    <li key={item.key}>
      <VideoListItem video={item} selectVideoHandler={selectVideoHandler} />
    </li>
  ));
  // Style.
  const videoListStyle = {
    listStyleType: 'none',
    padding: 0,
    marginLeft: '1rem',
    maxHeight: '315px',
    overflowY: 'scroll',
  };
  return (
    <ul style={videoListStyle}>
      {videoList}
    </ul>
  );
}

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectVideoHandler: PropTypes.func.isRequired,
};

export default VideoList;
