import React from 'react'
import Button from './Button'
import tw from 'twin.macro'
import styled from 'styled-components'

const Note = styled.div`
  ${tw`flex mx-5 lg:mx-0 text-[12px] text-slate-500 pt-4 justify-center`}
`
const Container = styled.div`
  ${tw`lg:flex mt-36  m-5 lg:m-32 h-full bg-[#0e0e12] text-white rounded-xl`}
`
const TextContainer = styled.div`
  ${tw`p-10 lg:p-16 w-auto lg:w-[500px]`}
`
const Text = styled.div`
  ${tw`text-2xl pb-2 font-extrabold`}
`
const Image = styled.img`
  ${tw`w-[620px] rounded-b-xl lg:rounded-r-xl`}
`
const Porsche_center = ({ img }) => {
  return (
    <>
      <Note>
        *Manufacturer’s Suggested Retail Price. Excludes options; taxes; title; registration; delivery, processing and handling fee; dealer charges. Dealer sets actual selling price.
      </Note>
      <Container>
        <TextContainer>
          <Text>Porsche Model Selection</Text>
          Experience the essence of Porsche design in model selection. Explore our refined selection for elevated projects with exquisite precision.
          <Button text={'Search Now'} />
        </TextContainer>
        <Image className='' src={img} alt="service" />
      </Container>
    </>
  )
}

export default Porsche_center
