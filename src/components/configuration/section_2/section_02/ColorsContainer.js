import React, {useState, useEffect} from 'react'
import Colors from './Color'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import Color from '../../../../pages/compare/colors.json'
import { Button } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import { useSelector } from 'react-redux';

const Container = styled.div`${tw`mt-4 mr-10 w-[294px] bg-white rounded-xl p-2`}`
const Text1 = styled.div`${tw`text-xl font-bold my-2 `}`
const Text2 = styled.div`${tw`mx-2 text-sm font-medium`}`
const Flex = styled.div`${tw`flex justify-between mb-2`}`
const Icon = styled.div`${tw`w-14 h-5 ml-2 rounded-sm border border-black`}`

const iconColor = {
    Grey: "bg-[#6a6c70]",
    Black: "bg-[#000000]",
    Blue1: "bg-[#00194b]",
    Blue2: "bg-[#9edef7]",
    Blue3: "bg-[#1d2738]",
    Blue4: "bg-[#2f3743]",
    Yellow: "bg-[#ffcc00]",
    Green: "bg-[#3c3c32]",
    Red: "bg-[#990033]",
    White: "bg-[#eff5f9]",
    Berry: "bg-[#c7c7bf]",
    Silver: "bg-[#c3cdd3]",
    Orange: "bg-[#d34624]",
}

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

    // Getting selected color from redux
    const reduxColor = useSelector((state) => state.config.SelectedColor)
    const customColor = reduxColor[0]?.color
    const [customImage, setCustomImage] = useState(null);
    // Getting Selected color name
    const defaultColorName = carsColors[ID][0]
    const [selectedColorName, setSelectedColorName] = useState(()=>(color[defaultColorName]?.Name));
    useEffect(() => {
      if (customColor) {
        setCustomImage(color[customColor]?.Images.image1);
        setSelectedColorName(color[customColor]?.Name);
      } else {
        setCustomImage(null);
        setSelectedColorName(color[defaultColorName]?.Name);
      }
    }, [reduxColor, customColor]);
    return (
        <Container>
            <Flex onClick={()=> {setExpand(!expand)}}>
              <Text1>Exterior Colors</Text1>
              <>
                <Text1>{expand ? <Add/> : <Remove/>}</Text1>
              </>
            </Flex>
            {expand ? (
              <>
                <Flex>
                  <Flex>
                      <Text2>{selectedColorName}</Text2>
                      <Icon className={customImage == null ? iconColor[defaultColorName] :iconColor[customColor]}/>
                  </Flex>
                  <Text2>$0</Text2>
                </Flex>
               </>
             ) : (
               <>
                <Flex>
                  <Text2>Metallic Color</Text2>
                  <Text2>$0</Text2>
                </Flex>
                {selectedColors &&
                  selectedColors.map((color, index) => (
                    <Colors key={index} color={color} onClick={onClick} />
                  ))}
              </>
            )}
        </Container>
      )}

export default ColorsContainer
