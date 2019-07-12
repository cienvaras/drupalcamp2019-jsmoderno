import React from 'react';
import PropTypes from 'prop-types';

function MainVideo(props) {
  const { video } = props;
  const embedUrl = `https://www.youtube.com/embed/${video.videoId}`;
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Youtube video"
      />
    </div>
  );
}

MainVideo.propTypes = {
  video: PropTypes.object.isRequired, // eslint-disable-line
};

export default MainVideo;
