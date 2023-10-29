import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import StockImage from '../../../../pages/configuration/stock.jpg'

const Container = styled.div`${tw`flex w-auto`}`
const SubContainer = styled.div`${tw``}`
const Image = styled.img`${tw`w-1/2 hover:border-2 hover:border-black`}`
const Text = styled.div`${tw`mx-2 text-lg font-medium`}`
const Price = styled.div`${tw`mx-2 text-lg font-medium text-slate-200`}`

const InteriorColor = () => {
    return (
        <Container>
          <SubContainer>
            <Image src={StockImage}/>
            <Text>20" Forged Aluminum Wheels</Text>
            <Text>20" Forged Aluminum Wheels</Text>
            <Price>Included</Price>
          </SubContainer>
          <SubContainer>
            <Image src={StockImage}/>
            <Text>20" 718 Cayman GT4 RS Forged Magnesium Wheels</Text>
            <Text>20" Forged Aluminum Wheels</Text>
            <Price>$15,640</Price>
          </SubContainer>
        </Container>
)}

export default InteriorColor
