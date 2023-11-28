import React, { useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import Data from '../../pages/compare/modelsData.json'
import Design from './section_1/Design'
import FixedContainer from './section_2/FixedContainer'
import { useSelector } from 'react-redux'
import ImageContainer from './section_3/ImageContainer'
import Summary from './section_4/Summary'
import { useNavigate } from "react-router-dom";

const Text = styled.div`${tw`text-xl lg:text-2xl font-bold ml-10 my-12 mt-12`}`
const SubContainer = styled.div`${tw`grid`}
   @media (min-width: 1024px) { grid-template-columns: 75% 25%;}
`
const Container = styled.div`${tw`overflow-y-auto h-full lg:h-[100vh] overflow-x-hidden`}`

const Main = () => {
    const reduxState = useSelector((state) => state.home);
    const reduxData = reduxState.Configuration;
    const ID = reduxData?.[0]?.id
    const ModelData = Data.ModelsData.find(model => model.ID === ID)
    const navigate = useNavigate()

    return (
        <div>
            <Text>{ModelData.Name}</Text>
            <SubContainer>
                <Design ID={ID} />
                <Container>
                    <FixedContainer data={ModelData} ID={ID} />
                </Container>
            </SubContainer>
            <ImageContainer ID={ID} />
            <Summary data={ModelData}/>
        </div>
    )
}

export default Main
