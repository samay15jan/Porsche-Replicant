import React from 'react'
import Color from './Color'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`${tw`grid grid-cols-2 lg:flex space-x-0 lg:space-x-2 mt-4 overflow-x-hidden mx-0 lg:mx-1 lg:mx-11`}`
const SubContainer = styled.div`${tw`flex-none`}`

const ColorsContainer = ({ color, onClick }) => {
    const carsColors = {
        "001": ["Grey", "Black", "Yellow", "Blue1"],
        "002": ["Yellow", "Green", "Red", "White"],
        "003": ["White", "Berry", "Blue2", "Black"],
        "004": ["Red", "Blue3", "White", "Black"],
        "005": ["Silver", "Blue1", "Black", "Orange"],
        "006": ["Grey", "Blue4", "White", "Black"],
    }
    const selectedColors = carsColors[color.ID];
    return (
        <Container>
            {selectedColors && selectedColors.map((color, index) => (
                <SubContainer key={index}>
                    <Color color={color} onClick={onClick} />
                </SubContainer>
            ))}
        </Container>
    )
}

export default ColorsContainer
