import React, { Component } from 'react';
import axios from 'axios';
import { getVideoId } from './util';
import MainVideo from './components/MainVideo';
import VideoList from './components/VideoList';

class App extends Component {
  constructor(props) {
    super(props);
    // Default state.
    this.state = {
      videos: [],
      selectedVideo: -1,
      error: false,
    };
    // Get data from Drupal
    axios.get('/jsonapi/node/video')
      .then((response) => {
        const videos = response.data.data.map((item, key) => ({
          key,
          title: item.attributes.title,
          videoId: getVideoId(item.attributes.field_video),
        }));
        this.setState({
          videos,
          selectedVideo: 0,
        });
      })
      .catch(() => {
        this.setState({
          error: true,
        });
      });
    this.setVideo = this.setVideo.bind(this);
  }

  setVideo(index) {
    this.setState({
      selectedVideo: index,
    });
  }

  render() {
    const { videos, selectedVideo, error } = this.state;
    if (error) {
      return <p>Error getting videos</p>;
    }
    // Style.
    const mainVideoStyle = {
      display: 'flex',
    };
    const mainVideo = videos.length ? <MainVideo video={videos[selectedVideo]} /> : '';
    return (
      <div style={mainVideoStyle}>
        {mainVideo}
        <VideoList videos={videos} selectVideoHandler={this.setVideo} />
      </div>
    );
  }
}

export default App;
