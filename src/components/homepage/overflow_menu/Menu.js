import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import tw from 'twin.macro'
import styled from 'styled-components'
import Models from './Models'

const Overlay = styled.div`
    ${tw`h-screen w-2/3 lg:w-1/4 fixed top-0 left-0 bg-white overflow-x-hidden z-50`}
`;

const OverlayContent = styled.div`
    ${tw`absolute top-0 left-0 z-50 w-full h-full justify-center overflow-hidden p-4 mt-10`}
`;

const MenuItem = styled.button`
    ${tw`text-2xl text-black justify-center p-6`}
  display: block;
  transition: 0.3s;
  &:hover,
  &:focus {
    color: #818181;
  }
`;

const Menu = ({ onClick }) => {
    const [showModel, setShowModel] = useState(false)
    // Navigation
    const navigate = useNavigate();

    const navigateRoute1 = () => {
        navigate("/models");
    };
    const navigateRoute2 = () => {
        navigate("/compare");
    };

    return (
        <Overlay>
            {showModel ? (
                <Models back={() => setShowModel()} />
            ) : (
                <>
                    <OverlayContent>
                        <MenuItem onClick={navigateRoute1}>Models</MenuItem>
                        <MenuItem onClick={navigateRoute2}>Compare</MenuItem>
                        <MenuItem onClick={() => setShowModel(!showModel)}>Configuration</MenuItem>
                        <MenuItem onClick={onClick}>Close</MenuItem>
                    </OverlayContent>
                </>
            )}
        </Overlay>
    )
}

export default Menu