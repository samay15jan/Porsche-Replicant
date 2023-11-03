import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux';
import Technology from './Technology'
import { Button } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div`${tw`mt-4 mr-10 w-[294px] bg-white rounded-xl p-2`}`
const Text1 = styled.div`${tw`text-xl font-bold my-2 `}`
const Text2 = styled.div`${tw`mx-2 text-sm font-medium`}`
const Flex = styled.div`${tw`flex justify-between mb-2`}`

const TechnologyContainer = ({ ID, onClick }) => {
    const [expand, setExpand] = useState(false)
    const reduxData = useSelector((state)=>state.config.SelectedTechnology)
    return (
        <Container>
            <Flex onClick={()=> {setExpand(!expand)}}>
              <Text1>Technology Options</Text1>
              <>
                <Text1>{expand ? <Add/> : <Remove/>}</Text1>
              </>
            </Flex>
            {expand ? (
              reduxData[0] && reduxData[0].length > 0 ? (
                <div>
                  {reduxData[0].map((data, index) => (
                    <div key={index}>
                      <Flex>
                        <Text2>{data.name}</Text2>
                        <Text2>${parseFloat(data.cost).toLocaleString()}</Text2>
                      </Flex>
                    </div>
                  ))}
                </div>
              ) :
              <Text2>No Options Selected</Text2>
             ) : (
             <Technology onClick={onClick} />
            )}
        </Container>
      )}

export default TechnologyContainer
