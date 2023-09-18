import React, { useState, useEffect }  from 'react'
import ReactHlsPlayer from 'react-hls-player';
import { FaPause, FaPlay} from 'react-icons/fa'
import Background_image from '../../../resources/homepage/01_section/background_image.jpg'
import '../../../pages/homepage/Homepage.css'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

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
    }, 4000);
    return () => clearTimeout(timer);
  },[])
  
  return (
    <div>
      {showVideo ? (
        <div className='Background_VideoContainer'>
          <ReactHlsPlayer
            className='backgroundHlsPlayer'
            playerRef={playerRef}
            src={streamUrl}
            loop={true}
            autoPlay={true}
            muted={true}
            preload='auto'
          />
          <div className='backgroundtext'>Fully-jaw-dropping-electric</div>
          <button className="backgroundToggle2">The Taycan. Starting at $90,900</button>
          <button className='backgroundToggle1' onClick={toggleVideo}>
          {playing ? <FaPlay/> : <FaPause/>}
          </button>
          <div className='footerArrow'><ArrowDownwardOutlinedIcon/></div>
          <div className='footerBorder'></div>
        </div>
      ) : 
        (<div className='Background_ImageContainer'><img src={Background_image} className='backgroundImage' alt="Porsche" />
          <div className='backgroundtext'>Fully-jaw-dropping-electric.</div>
          <button className='backgroundToggle2'>The Taycan. Starting at $90,900</button>
          <div className='footerArrow'><ArrowDownwardOutlinedIcon/></div>
          <div className='footerBorder'></div> 
       </div>
      )}
    </div>
  )
}

export default Background