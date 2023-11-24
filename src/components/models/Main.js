import React from 'react'
import tw from 'twin.macro';
import styled from 'styled-components/macro';
import ModelsList from './03_models/ModelsList';
import FilterList from './02_filters/FilterList';

const Container = styled.div`
${tw`grid grid-cols-1 lg:flex`}
`
const Text = styled.div`
${tw`text-4xl font-bold my-10 ml-20 lg:ml-32`}
`
const Divider = styled.div`
${tw`border border-gray-100 mx-5`}
`

const Main = () => {
    return (
        <>
            <hr />
            <Text>Model overview</Text>
            <Container>
                <FilterList />
                <Divider />
                <ModelsList />
            </Container>
        </>
    )
}

export default Main
