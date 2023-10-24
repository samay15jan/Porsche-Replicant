import React from 'react'
import Color from './Color'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import Color from '../../../../pages/compare/colors.json'

const Container = styled.div`${tw`flex space-x-2 mt-4 overflow-x-hidden mx-11`}`
const SubContainer = styled.div`${tw`flex-none`}`
const Text = styled.div`${tw`text-sm ml-8 mt-4 mb-2`}`

const ColorsContainer = ({ onClick }) => {
    const color = Color.Colors.find((color) => color.ID === ID);

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