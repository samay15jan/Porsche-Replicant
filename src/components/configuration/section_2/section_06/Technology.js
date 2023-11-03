import React, {useState, useEffect} from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux';
import { SelectedTechnology } from '../../../../features/configuration/configSlice'
import SubOptions from './SubOptions'

const Container = styled.div`${tw`w-auto`}`

const Technology = () => {

    const AvailableOptions = {
      "Lane Change Assist" : '700',
      "Adaptive Cruise Control" : '1670',
      "Porsche Entry & Drive" : '800',
      "Porsche Connect" : '2320',
      "Voice Control" : '100',
      "Burmester® Sound System" : '4690'
    }

    const [options, setOptions] = useState([]);
    const AddSelectedOption = (name, cost) => {
        setOptions([...options, { name, cost }]);
    }
    const RemoveSelectedOption = (name, cost) => {
      const isAvailable = options.some((option) => option.name === name);
      if (isAvailable) {
        setOptions(options.filter((option) => option.name !== name));
      } else {
        setOptions([...selectedOptions, { name, cost }]);
      }
    }

    // Adding Data to redux database
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(SelectedTechnology({ options: options })
    )},[options])

    return (
        <Container>
          {Object.keys(AvailableOptions).map((optionName, index)=>{
            return (
              <SubOptions key={index} Option={optionName} Price={AvailableOptions[optionName]} Add={AddSelectedOption} Remove={RemoveSelectedOption}/>
            )})}
        </Container>
)}

export default Technology
