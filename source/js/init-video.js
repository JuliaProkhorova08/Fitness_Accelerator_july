function initVideo() {
  const videoBox = document.querySelector('.video-content');
  const playButton = document.querySelector('.video-content__button');
  const placeholder = document.querySelector('.video-content__cover');

  const playButtonClickHandler = () => {
    const iframe = createIframe();
    videoBox.appendChild(iframe);
    playButton.remove();
    placeholder.remove();
  };

  if (playButton !== null && videoBox !== null && placeholder !== null) {
    playButton.addEventListener('click', playButtonClickHandler);
  }
}

function createIframe() {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allow', 'autoplay; encrypted-media; allowfullscreen');
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('height', '100%');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw/?rel=0&showinfo=0&autoplay=1&amp;controls=0');

  return iframe;
}

export { initVideo };
