import React from 'react'
import Colors from './Color'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import Color from '../../../../pages/compare/colors.json'

const Container = styled.div`${tw`mt-4 mx-11 bg-white rounded-xl p-2`}`
const Text1 = styled.div`${tw`text-2xl font-bold`}`
const Text2 = styled.div`${tw`text-xl font-bold`}`
const Flex = styled.div`${tw`flex justify-between`}`


const ColorsContainer = ({ ID, onClick }) => {
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
            <Text1>Exterior Colors</Text1>
            <Flex>
                <Text2>Metallic Color</Text2>
                <Text2>$650</Text2>
            </Flex>
            {selectedColors && selectedColors.map((color, index) => (
                <Colors key={index} color={color} onClick={onClick} />
            ))}
        </Container>
    )
}

export default ColorsContainer