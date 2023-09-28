import React, { useState } from 'react'
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
    const modelsObjects = {
        718: "718 Models",
        911: "911 Models",
        Taycan: "Taycan Models",
        Panamera: "Panamera Models",
        Macan: "Macan Models",
        Cayenne: "Cayenne Models",
    };

    const [models, setModels] = useState(modelsObjects)
    const [filterModel, setFilterModel] = useState(false)
    const [elementToKeep, setElementToKeep] = useState(null);

    const filteredModels = (text) => {
        setElementToKeep(text);
        setFilterModel(true);
    };

    const undoFilteredModels = () => {
        setElementToKeep(null);
        setFilterModel(false);
    };
    return (
        <>
            <hr />
            <Text>Model overview</Text>
            <Container>
                <FilterList onClick={filterModel ? undoFilteredModels : filteredModels} />
                <Line />
                <ModelsList models={elementToKeep ? { [elementToKeep]: modelsObjects[elementToKeep] } : models} />
            </Container>
        </>
    )
}

export default Main