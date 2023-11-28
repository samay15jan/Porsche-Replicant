import React from 'react'
import styled from 'styled-components/macro'
import tw from 'twin.macro'
import ColorsData from '../../../pages/configuration/color.json'
import { useSelector } from 'react-redux';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined'

const Image = styled.img`${tw`w-full h-full mt-5 lg:mt-20 object-cover object-center`}`
const Container = styled.div`${tw`flex justify-center mt-2 mb-5`}`
const Button = styled.button`${tw`p-4 bg-black text-white rounded-md `}`

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

const ImageContainer = ({ ID }) => {
  const Data = ColorsData.Colors.find((model) => model.ID === ID)
  const reduxColor = useSelector((state) => state.config.SelectedColor)
  const customColor = reduxColor[0]?.color
  const defaultColor = Object.keys(Data.Images)[0];
  return (
    <div>
      <div class="overflow-hidden mx-[-65%] lg:mx-[-4%]">
        <Image src={customColor ? Data.Images[customColor] : Data.Images[defaultColor]} alt="Car Image" />
      </div>
      <Container>
        <Button><NearMeOutlinedIcon /> Contact dealer</Button>
      </Container>
    </div>
  )
}

export default ImageContainer
