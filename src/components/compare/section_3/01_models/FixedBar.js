import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components/macro'
import ButtonFixedBar from './ButtonFixedBar'

const Flex = styled.div`${tw`grid grid-cols-2 justify-between w-screen h-auto bg-gray-200`}`
const SubContainer = styled.div`${tw`px-64`}`
const Image = styled.img`${tw`w-44`}`
const Text = styled.div`${tw`text-sm ml-4`}`
const Divider = styled.hr`${tw`w-screen border border-slate-200`}`

const FixedBar = ({ img1, img2, text1, text2 }) => {
    return (
        <div>
            <Flex>
                <SubContainer>
                    <Image src={img1} alt={text1} />
                    <Text>{text1}</Text>
                </SubContainer>
                <SubContainer>
                    <Image src={img2} alt={text2} />
                    <Text>{text2}</Text>
                </SubContainer>
            </Flex>
            <ButtonFixedBar />
            <Divider />
        </div>
    )
}

export default FixedBar