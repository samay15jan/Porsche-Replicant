import React, {useState} from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import Wheels from './Wheels'
import StockImage from '../../../../pages/configuration/stock.jpg'
import { Button } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div`${tw`mt-4 mr-10 w-[294px] bg-white rounded-xl p-2`}`
const Text1 = styled.div`${tw`text-xl font-bold my-2 `}`
const Text2 = styled.div`${tw`mx-2 text-lg font-medium`}`
const Flex = styled.div`${tw`flex justify-between mb-2`}`
const Icon = styled.img`${tw`w-5 border border-black`}`

const WheelsContainer = ({ ID, onClick }) => {
    const [expand, setExpand] = useState(false)

    return (
        <Container>
            <Flex onClick={()=> {setExpand(!expand)}}>
              <Text1>Wheels</Text1>
              <>
                <Text1>{expand ? <Add/> : <Remove/>}</Text1>
              </>
            </Flex>
            {expand ? (
              <>
                <Flex>
                  <Flex>
                      <Icon src={StockImage}/>
                      <Text2>20" Forged Aluminum Wheels</Text2>
                  </Flex>
                  <Text2>$0</Text2>
                </Flex>
               </>
             ) : (
                 <Wheels onClick={onClick} />
            )}
        </Container>
      )}

export default WheelsContainer
