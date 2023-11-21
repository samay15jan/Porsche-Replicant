import React from 'react'
import Cards from './Cards'
import data from '../../../pages/homepage/data.json'
import styled from 'styled-components'
import tw from 'twin.macro'

const Heading = styled.div`
  ${tw`flex text-3xl font-semibold justify-center mt-20`}
`
const Container = styled.div`
  ${tw`flex`}
`
const SubContainer = styled.div`
  ${tw`grid grid-flow-col mt-10 overflow-y-auto`}
`

const Section_5 = () => {
    const sectionData = data.homepage.section_5
    return (
        <>
            <Heading>Online Shop Highlights</Heading>
            <Container>
                <SubContainer>
                    {sectionData.map((product, index) => (
                        <Cards
                            key={index}
                            productImage={product.productImage}
                            productName={product.productName}
                            productDescription={product.productDescription}
                            productCategory={product.productCategory}
                        />
                    ))}
                </SubContainer>
            </Container>
        </>
    )
}

export default Section_5