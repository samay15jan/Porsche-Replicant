import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import ReactHlsPlayer from 'react-hls-player';
import { FaPause, FaPlay } from 'react-icons/fa'
import data from '../../../pages/homepage/data.json'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { Configuration } from '../../../features/homepage/homeSlice'


const Container = styled.div`
  ${tw`w-screen h-screen overflow-hidden relative bg-black`}
`
const Player = styled(ReactHlsPlayer)`
  ${tw`w-screen h-screen`}
  object-fit:cover;
`
const Text = styled.div`
  ${tw`absolute text-4xl text-white ml-14 mb-56 bottom-0 z-10`}
  ${tw`lg:text-8xl lg:ml-32 lg:w-1/2 lg:left-0 lg:mb-48`}
`
const ButtonToggle1 = styled.button`
  ${tw`ml-14 mb-[150px] absolute left-0 bottom-0 text-white z-20 p-4 hover:bg-zinc-800 hover:border-zinc-500 rounded border-2`}
  ${tw`lg:ml-32 lg:mb-20 `}
`
const ButtonToggle2 = styled.button`
  ${tw`mr-5 mb-12 p-2 absolute right-0 bottom-0 text-white hover:bg-zinc-800 hover:border-zinc-500 z-20 p-4 rounded border-2`}
  ${tw`lg:mr-16 lg:mb-8 p-4`}
`
const Background_ImageContainer = styled.div`
  ${tw`w-screen h-screen overflow-y-hidden relative`}
  transition: opacity 0.5s ease-in-out;
`
const BackgroundImage = styled.img`
  ${tw`w-screen bg-black`}
`
const FooterArrow = styled.div`
  ${tw`animate-bounce flex justify-center w-screen absolute bottom-0 mb-10 text-white`}
`
const FooterBorder = styled.div`
  ${tw`absolute bottom-0 w-full text-white bg-gradient-to-t from-zinc-900 to-transparent`}
  height: 140px;
  padding: 0 20px;
  z-index: 10;
`

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const isBigScreen = window.innerWidth > 800;

  return (
    <div>
      {showVideo ? (
        <Container>
          <Player
            playerRef={playerRef}
            src={sectionData.streamUrl}
            loop={true}
            autoPlay={true}
            muted={true}
            preload='auto'
          />
          <Text>
            {sectionData.Text}
          </Text>
          <ButtonToggle1 onClick={handleButtonClick}>
            {sectionData.Button}
          </ButtonToggle1>
          <ButtonToggle2 onClick={toggleVideo}>
            {playing ? <FaPlay /> : <FaPause />}
          </ButtonToggle2>
          <FooterArrow>
            <ArrowDownwardOutlinedIcon />
          </FooterArrow>
          <FooterBorder />
        </Container>
      ) :
        (<Container>
          <Background_ImageContainer>
            {isBigScreen ? (
              <BackgroundImage src={sectionData.Background_image} alt="Porsche" />
            ) : (
              <Player
                playerRef={playerRef}
                src={sectionData.streamUrl}
                autoPlay={true}
                muted={true}
                preload='auto'
              />
            )}
          </Background_ImageContainer>
          <Text>
            {sectionData.Text}
          </Text>
          <ButtonToggle1 onClick={handleButtonClick}>
            {sectionData.Button}
          </ButtonToggle1>
          <FooterArrow>
            <ArrowDownwardOutlinedIcon />
          </FooterArrow>
          <FooterBorder />
        </Container>
        )}
    </div>
  )
}

export default Background
