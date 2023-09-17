import React, { useState, useEffect }  from 'react'
import ReactHlsPlayer from 'react-hls-player';
import { Button } from '@mui/material';
import { FaPause, FaPlay} from 'react-icons/fa'
import Background_image from '../../../resources/homepage/01_section/background_image.jpg'

const Background = () => {
  const [showVideo, setShowVideo] = useState(false)
  const [playing, setPlaying] = useState(false)
  const streamUrl = "https://videos.porsche.com/id/tv3sehnv/hls.m3u8"
  const playerRef = React.useRef();

  const toggleVideo = () => {
    if (playing) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
    setPlaying(!playing);
  }

  useEffect(() => {
    const timer = setTimeout(() =>{
      setShowVideo(true)
    }, 5000);
    return () => clearTimeout(timer);
  },[])
  
  return (
    <div>
      {showVideo ? (
        <div>
          <ReactHlsPlayer
            playerRef={playerRef}
            src={streamUrl}
            loop={true}
            autoPlay={true}
            muted={true}
            width="100%"
            height="100%"
          />
          <Button variant="outlined" onClick={toggleVideo}>
          {playing ? <FaPlay/> : <FaPause/>}
          </Button>
        </div>
      ) : (<img src={Background_image} alt="Porsche" />)}
    </div>
  )
}

export default Background