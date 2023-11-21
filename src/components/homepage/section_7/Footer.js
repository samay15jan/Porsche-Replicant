import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`p-10 mb-10`}
`

const Footer = () => {
    return (
        <Container>
            © 2023 Porsche Cars North America, Inc. Legal notice. Privacy notice. California Privacy. Accessibility Statement. Open Source Software Notice. Whistleblower System. Emergency Responder Guides. Recall Information. 3G Wireless Turndown FAQs. Do Not Sell or Share My Personal Information.
        </Container>
    )
}

export default Footer