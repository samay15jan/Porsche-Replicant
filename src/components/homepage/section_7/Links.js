import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Heading = styled.div`
  ${tw`ml-10 text-lg font-bold pt-10`}
`
const Container = styled.div`
  ${tw`m-10 grid grid-cols-3 my-2`}
`

const Links = () => {
    return (
        <>
            <Heading>Company</Heading>
            <Container>
                <div className='hover:text-red-500'>At a Glance</div>
                <div className='hover:text-red-500'>Sustainability</div>
                <div className='hover:text-red-500'>Careers</div>
                <div className='hover:text-red-500'>Forum</div>
                <div className='hover:text-red-500'>Affiliates</div>
                <div className='hover:text-red-500'>Press</div>
                <div className='hover:text-red-500'>Contact</div>
            </Container>
        </>
    )
}

export default Links