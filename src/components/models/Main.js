import React from 'react'
import tw from 'twin.macro';
import styled from 'styled-components/macro';
import ModelsList from './ModelsList';
import FilterList from './FilterList';

const Container = styled.div`
${tw`flex`}
`

const Text = styled.div`
${tw`text-4xl font-bold my-10 ml-32`}
`

const Line = styled.div`
${tw`border border-gray-100 mx-5`}
`

const Main = () => {
    return (
        <>
            <hr />
            <Text>Model overview</Text>
            <Container>
                <FilterList />
                <Line />
                <ModelsList />
            </Container>
        </>
    )
}

export default Main