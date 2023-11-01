import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux';
import { SelectedWheel } from '../../../../features/configuration/configSlice'
import StockImage from '../../../../pages/configuration/stock.jpg'
import Checkbox from '@mui/material/Checkbox';
import SubOptions from './SubOptions'

const Container = styled.div`${tw`w-auto`}`

const Options = () => {

    const AvailableOptions = {
      "Porsche Active Suspension" : '1790',
      "Extended Range Fuel Tank" : '140',
      "Power Steering Plus" : '280',
      "Lane Change Assist" : '700',
      "Adaptive Cruise Control" : '1670',
      "Porsche Entry & Drive" : '800',
      " Porsche Connect" : '2320',
      "Voice Control" : '100',
      "Burmester® Sound System" : '4690'
    }

    return (
        <Container>
          {Object.keys(AvailableOptions).map((optionName, index)=>{
            return (
              <SubOptions key={index} Option={optionName} Price={AvailableOptions[optionName]}/>
            )})}
        </Container>
)}

export default Options
