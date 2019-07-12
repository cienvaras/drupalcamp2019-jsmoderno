//
// Utilitary functions.
//

function getVideoId(videoUrl) {
  // Source: https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = videoUrl.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  }
  return null;
}

export { getVideoId }; // eslint-disable-line
