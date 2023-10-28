import React, {useState} from 'react'
import Colors from './Color'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import Color from '../../../../pages/compare/colors.json'
import { Button } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div`${tw`mt-4 mr-10 w-[294px] bg-white rounded-xl p-2`}`
const Text1 = styled.div`${tw`text-xl font-bold my-2 `}`
const Expand = styled.div`${tw``}`
const Text2 = styled.div`${tw`text-sm font-medium`}`
const Flex = styled.div`${tw`flex justify-between mb-2`}`

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
    const [expand, setExpand] = useState(false)
    return (
        <Container>
            <Flex onClick={()=> {setExpand(!expand)}}>
              <Text1>Exterior Colors</Text1>
              <Expand>
                <Text1>{expand ? <Add/> : <Remove/>}</Text1>
              </Expand>
            </Flex>

            {expand ?
               ""
              : (<>
                <Flex>
                  <Text2>Metallic Color</Text2>
                  <Text2>Included</Text2>
                </Flex>
                {selectedColors &&
                  selectedColors.map((color, index) => (
                    <Colors key={index} color={color} onClick={onClick} />
                  ))}
              </>
            )}

        </Container>
    )
}

export default ColorsContainer
