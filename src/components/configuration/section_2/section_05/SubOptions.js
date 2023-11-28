import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import Checkbox from '@mui/material/Checkbox';

const Container = styled.div`${tw`flex my-1 mx-5 lg:mx-0`}`
const SubContainer = styled.div`${tw`mx-5 lg:mx-0 grid grid-rows-2`}`
const Text = styled.div`${tw`text-sm font-medium`}`
const Prices = styled.div`${tw`text-sm font-medium text-slate-500`}`

const SubOptions = ({ Option, Price, Add, Remove }) => {
    const [checked, setChecked] = useState(false);
    const handleClick = () => {
       setChecked(!checked)
       !checked ? Add(Option, Price) : null
       checked ? Remove(Option) : null
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
              <Prices>${parseFloat(Price).toLocaleString()}</Prices>
            </SubContainer>
          </Container>
)}


export default SubOptions
