import React, {useState, useEffect} from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux';
import { SelectedOptions } from '../../../../features/configuration/configSlice'
import SubOptions from './SubOptions'

const Container = styled.div`${tw`w-auto`}`

const Options = () => {

    const AvailableOptions = {
      "Porsche Active Suspension" : '1790',
      "Extended Range Fuel Tank" : '140',
      "Power Steering Plus" : '280',
      "Porsche Torque Vectoring" : '1320',
      "Sport Chrono Package" : '2090'
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
      dispatch(SelectedOptions({ options: options })
    )},[options])

    return (
        <Container>
          {Object.keys(AvailableOptions).map((optionName, index)=>{
            return (
              <SubOptions key={index} Option={optionName} Price={AvailableOptions[optionName]} Add={AddSelectedOption} Remove={RemoveSelectedOption}/>
            )})}
        </Container>
)}

export default Options
