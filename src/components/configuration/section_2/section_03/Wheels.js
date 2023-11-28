import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux';
import { SelectedWheel } from '../../../../features/configuration/configSlice'

import StockImage from '../../../../pages/configuration/stock.jpg'
import Checkbox from '@mui/material/Checkbox';

const Container = styled.div`${tw`flex w-auto`}`
const SubContainer = styled.div`${tw`relative`}`
const Image = styled.img`${tw`w-full p-1 rounded-xl`}`
const Text = styled.div`${tw`mx-2 text-sm font-medium`}`
const Price = styled.div`${tw`mx-2 text-sm font-medium text-slate-500`}`
const FloatingText = styled.div`
  ${tw`text-sm font-medium absolute justify-center w-full text-slate-200 ml-10 mt-2 lg:mt-0 lg:ml-2`}
  top: 35%;
  transform: translateY(-50%);
`

const Wheels = () => {
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(false);
    const [price, setPrice] = useState("0");
    const handleClick = () => {
        setChecked1(!checked1)
        setChecked2(!checked2)
    }
    const dispatch = useDispatch()
    useEffect(() => {
      checked1 ? dispatch(SelectedWheel({wheel:'20" Satin Silver Wheels', price: 0}))
               : dispatch(SelectedWheel({wheel:'20" Satin Black Wheels', price: 15360}))
    },[checked1])

    return (
        <Container>
          <SubContainer>
            <>
              <Image src={StockImage}/>
              <FloatingText>Image Not Available</FloatingText>
            </>
            <Text>20" Satin Silver Wheels</Text>
            <Price>Included</Price>
            <Checkbox
              checked={checked1}
              onClick={handleClick}
              inputProps={{ 'aria-label': 'controlled' }}
              color="default"
            />
          </SubContainer>
          <SubContainer>
            <>
              <Image src={StockImage}/>
              <FloatingText>Image Not Available</FloatingText>
            </>
            <Text>20" Satin Black Wheels</Text>
            <Price>$15,640</Price>
            <Checkbox
              checked={checked2}
              onClick={handleClick}
              inputProps={{ 'aria-label': 'controlled' }}
              color="default"
            />
          </SubContainer>
        </Container>
)}

export default Wheels
