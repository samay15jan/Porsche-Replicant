import React from 'react'
import tw from 'twin.macro';
import styled from 'styled-components/macro';
import ModelsList from './ModelsList';
import FilterList from './FilterList';

const Container = styled.div`
${tw`flex`}
`

const Text = styled.div`
${tw`text-4xl font-bold my-5 ml-20`}`

const Main = () => {
    return (
        <>
            <hr />
            <Text>Model overview</Text>
            <Container>
                <><FilterList /></>
                <ModelsList />
            </Container>
        </>
    )
}

export default Main