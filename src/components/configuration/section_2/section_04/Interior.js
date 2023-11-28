import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux';
import { SelectedInterior } from '../../../../features/configuration/configSlice'

import StockImage from '../../../../pages/configuration/stock.jpg'
import Checkbox from '@mui/material/Checkbox';

const Container = styled.div`${tw`flex w-auto`}`
const SubContainer = styled.div`${tw`relative`}`
const Text = styled.div`${tw`mx-2 text-sm font-medium`}`
const Price = styled.div`${tw`mx-2 text-sm font-medium text-slate-500`}`
const Color1 = styled.div`
  ${tw`w-44 lg:w-28 h-12 ml-2`}
  background-color: rgb(0, 0, 0); color: white;
`
const Color2 = styled.div`
  ${tw`w-44 lg:w-28 h-12 ml-2 `}
  background-image: linear-gradient(rgb(0, 0, 0) 50%, rgb(120, 47, 47) 50%);
`

const Interior = () => {
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(false);
    const [price, setPrice] = useState("0");
    const handleClick = () => {
        setChecked1(!checked1)
        setChecked2(!checked2)
    }
    const dispatch = useDispatch()
    useEffect(() => {
      checked1 ? dispatch(SelectedInterior({interior:'Standard Interior (Black)', price: 0}))
              : dispatch(SelectedInterior({interior:'Natural Leather (Espresso/Cognac)', price: 2950}))
    },[checked1])

    return (
        <Container>
          <SubContainer>
            <>
              <Color1/>
            </>
            <Text>Standard Interior (Black)</Text>
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
              <Color2/>
            </>
            <Text>Natural Leather (Black/Red)</Text>
            <Price>$2,950</Price>
            <Checkbox
              checked={checked2}
              onClick={handleClick}
              inputProps={{ 'aria-label': 'controlled' }}
              color="default"
            />
          </SubContainer>

        </Container>
)}

export default Interior
