import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { SelectedOptions } from '../../../../features/configuration/configSlice'

const Container = styled.div`${tw`flex my-1`}`
const SubContainer = styled.div`${tw`grid grid-rows-2`}`
const Text = styled.div`${tw`text-sm font-medium`}`
const Prices = styled.div`${tw`text-sm font-medium text-slate-500`}`

const SubOptions = ({ Option, Price }) => {
    const [checked, setChecked] = useState(false);
    const [price, setPrice] = useState("0");
    const dispatch = useDispatch()
    const handleClick = () => {
       setChecked(!checked)
    }
    return (
          <Container>
              <Checkbox
                checked={checked}
                onClick={handleClick}
                inputProps={{ 'aria-label': 'controlled' }}
                color="default"
              />
            <SubContainer>
              <Text>{Option}</Text>
              <Prices>${Price.toLocaleString()}</Prices>
            </SubContainer>
          </Container>
)}


export default SubOptions
