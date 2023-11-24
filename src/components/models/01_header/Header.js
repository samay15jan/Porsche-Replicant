import React from 'react'
import styled from 'styled-components/macro';
import tw from 'twin.macro';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { Configuration } from '../../../features/homepage/homeSlice'
import data from '../../../pages/homepage/data.json'

const Container = styled.div`
    ${tw`flex justify-between items-center w-full text-black my-5`},
    height: 100px;
    padding: 0 20px;
    z-Index: 10;
`
const Logo = styled(Button)`
  ${tw`w-5 h-8 my-5`}
  margin: 0 auto;
`
const SVG = styled.svg`
  ${tw`w-48 h-10 my-5`}
  margin: 0 auto;
`
const SmallLogo = styled.img`${tw`w-5`}`
const Text = styled.div`${tw`text-black mt-1`}`

const Header = ({ onClick }) => {
    const sectionData = data.homepage.section_1[0]
    const navigate = useNavigate();
    const dispatch = useDispatch()

    // Redirecting to configuration page page
    const handleButtonClick = () => {
        dispatch(Configuration("003"))
        navigate("/models");
    };

    const isSmallScreen = window.innerWidth > 800;

    return (
        <Container>
            <Logo onClick={onClick} >
                <MenuIcon className='text-black' />
                {isSmallScreen ? (
                    <Text>Menu</Text>
                ) : null}
            </Logo>
            {isSmallScreen ? (
                <SVG
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 4500 300"
                    fill="currentColor"
                >
                    <title>Porsche</title>
                    <path d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z"></path>
                </SVG>
            ) : (
                <SmallLogo src={sectionData.logo_small} />
            )}
            <Logo onClick={handleButtonClick}>
                <SearchIcon className='text-black' />
            </Logo>
        </Container>
    )
}

export default Header