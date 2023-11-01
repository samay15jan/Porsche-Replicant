import React, {useState} from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux';
import Options from './Options'
import StockImage from '../../../../pages/configuration/stock.jpg'
import { Button } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div`${tw`mt-4 mr-10 w-[294px] bg-white rounded-xl p-2`}`
const Text1 = styled.div`${tw`text-xl font-bold my-2 `}`
const Text2 = styled.div`${tw`mx-2 text-lg font-medium`}`
const Flex = styled.div`${tw`flex justify-between mb-2`}`

const OptionsContainer = ({ ID, onClick }) => {
    const [expand, setExpand] = useState(false)
    const reduxData = useSelector((state)=>state.config.SelectedWheel)
    return (
        <Container>
            <Flex onClick={()=> {setExpand(!expand)}}>
              <Text1>Performace and Technology</Text1>
              <>
                <Text1>{expand ? <Add/> : <Remove/>}</Text1>
              </>
            </Flex>
            {expand ? (
              <>
                <Flex>
                  <Flex>
                      <Text2>{reduxData[0]?.wheel.wheel}</Text2>
                  </Flex>
                  <Text2>${reduxData[0]?.price.price.toLocaleString()}</Text2>
                </Flex>
               </>
             ) : (
                 <Options onClick={onClick} />
            )}
        </Container>
      )}

export default OptionsContainer
