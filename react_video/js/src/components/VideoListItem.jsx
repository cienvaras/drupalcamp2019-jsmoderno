import React from 'react';
import PropTypes from 'prop-types';

function VideoListItem(props) {
  const { video, selectVideoHandler } = props;
  const thumb = `https://img.youtube.com/vi/${video.videoId}/default.jpg`;
  // Style.
  const videoListItemStyle = {
    width: '100%',
    display: 'flex',
    border: 'none',
    background: 'transparent',
    padding: '0 0 0.rem 0',
    marginBottom: '0.5rem',
    borderBottom: '1px dotted #ccc',
    textAlign: 'left',
  };
  const imgStyle = {
    marginRight: '0.5rem',
  };
  return (
    <button
      style={videoListItemStyle}
      type="button"
      onClick={() => { selectVideoHandler(video.key); }}
    >
      <img src={thumb} alt="" style={imgStyle} />
      {video.title}
    </button>
  );
}

VideoListItem.propTypes = {
  video: PropTypes.object.isRequired, // eslint-disable-line
  selectVideoHandler: PropTypes.func.isRequired,
};

export default VideoListItem;
