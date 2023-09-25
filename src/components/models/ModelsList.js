import React from 'react'
import CarsCard from './CarsCard'
import data from '../../pages/models/data.json'
import tw from 'twin.macro'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Container = styled.div`
${tw`grid grid-cols-2 m-10`}
`
const Heading = styled.div`
${tw`font-bold text-3xl ml-10 mt-10`}
`

const ModelsList = () => {
    const sectionData = data.models;
    const modelsObjects = {
        718: "718 Models",
        911: "911 Models",
        Taycan: "Taycan Models",
        Panamera: "Panamera Models",
        Macan: "Macan Models",
        Cayenne: "Cayenne Models"
    }
    return (
        <div >
            {Object.keys(modelsObjects).map((car, index) => (
                <div key={index}>
                    <Heading><ArrowForwardIosIcon />{modelsObjects[car]}</Heading>
                    <Container>
                        {sectionData
                            .filter(model => model.model === modelsObjects[car])
                            .map((model, subIndex) => (
                                <CarsCard
                                    index={subIndex}
                                    src={model.image}
                                    text={model.name}
                                    price={model.starting_price}
                                    listing={model.new}
                                />
                            ))}
                    </Container>
                </div>
            ))
            }
        </div>
    )
}

export default ModelsList