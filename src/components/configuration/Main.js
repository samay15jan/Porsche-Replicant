import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import Data from '../../pages/compare/modelsData.json'
import Design from './section_1/Design'
import FixedContainer from './secton_2/FixedContainer'

const Text = styled.div`${tw`text-2xl font-bold ml-10 my-10`}`
const SubContainer = styled.div`${tw`grid grid-cols-2`}`

const Main = () => {
    const ID = "003"
    const ModelData = Data.ModelsData.find(model => model.ID === ID)

    return (
        <div>
            <Text>{ModelData.Name}</Text>
            <SubContainer>
                <Design ID={ID} />
                <FixedContainer data={ModelData} />
            </SubContainer>
        </div>
    )
}

export default Main
