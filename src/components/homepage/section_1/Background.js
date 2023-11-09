import React, { useState, useEffect } from 'react'
import ReactHlsPlayer from 'react-hls-player';
import { FaPause, FaPlay } from 'react-icons/fa'
import '../../../pages/homepage/Homepage.css'
import data from '../../../pages/homepage/data.json'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { Configuration } from '../../../features/homepage/homeSlice'

const Background = () => {
  const [showVideo, setShowVideo] = useState(false)
  const [playing, setPlaying] = useState(false)
  const sectionData = data.homepage.section_1[0]
  const playerRef = React.useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // Redirecting to configuration page page
  const handleButtonClick = () => {
    dispatch(Configuration("003"))
    navigate("/configuration");
  };

  const toggleVideo = () => {
    if (playing) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
    setPlaying(!playing);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true)
    }, 4000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <div>
      {showVideo ? (
        <div className='Background_VideoContainer'>
          <ReactHlsPlayer
            className='backgroundHlsPlayer'
            playerRef={playerRef}
            src={sectionData.streamUrl}
            loop={true}
            autoPlay={true}
            muted={true}
            preload='auto'
          />
          <div className='backgroundtext'>{sectionData.Text}</div>
          <button className="backgroundToggle2" onClick={handleButtonClick}>{sectionData.Button}</button>
          <button className='backgroundToggle1' onClick={toggleVideo}>
            {playing ? <FaPlay /> : <FaPause />}
          </button>
          <div className='footerArrow'><ArrowDownwardOutlinedIcon /></div>
          <div className='footerBorder'></div>
        </div>
      ) :
        (<div className='Background_ImageContainer'><img src={sectionData.Background_image} className='backgroundImage' alt="Porsche" />
          <div className='backgroundtext'>{sectionData.Text}</div>
          <button className='backgroundToggle2' onClick={handleButtonClick}>{sectionData.Button}</button>
          <div className='footerArrow'><ArrowDownwardOutlinedIcon /></div>
          <div className='footerBorder'></div>
        </div>
        )}
    </div>
  )
}

export default Background
