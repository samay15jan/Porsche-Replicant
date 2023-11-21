import React from 'react'
import data from '../../../pages/homepage/data.json'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { Configuration } from '../../../features/homepage/homeSlice'
import tw from 'twin.macro'
import styled from 'styled-components'

const Container = styled.button`
    ${tw`grid grid-cols-1 pl-8 lg:pl-14 m-2 justify-center`}
`;
const Button = styled.button`
    ${tw`text-2xl mt-2 border border-black bg-slate-200 rounded-sm`}
`;

const Image = styled.img`
    ${tw`py-4`}
`;


const Section_1 = ({ back }) => {
    const sectionData = data.homepage.section_8

    // Navigation
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateRoute = (id) => {
        dispatch(Configuration(id))
        navigate("/configuration");
    };

    return (
        <Container>
            {sectionData.map((model, index) => (
                <Image key={index} onClick={() => navigateRoute(model.ID)} src={model.Image} />
            ))}
            <Button onClick={() => back(false)}>Back</Button>
        </Container>
    )
}

export default Section_1