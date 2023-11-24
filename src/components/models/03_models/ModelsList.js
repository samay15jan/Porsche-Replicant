import React, { useEffect, useState } from 'react'
import CarsCard from './CarsCard'
import data from '../../../pages/models/data.json'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectedOption, selectedType } from '../../../features/models/modelSlice'
import { Close } from '@mui/icons-material'

const Container = styled.div`
${tw`grid grid-cols-2 m-10`}
`
const FilterButton = styled.div`
${tw`text-sm font-medium ml-10 hover:cursor-pointer`}
`

const ModelsList = () => {
    const [show, setShow] = useState(true)
    const sectionData = data.models
    const reduxState = useSelector((state) => state.model);
    const reduxOption = reduxState.selectedOption?.[0]?.id || '';
    const reduxType = reduxState.selectedType?.[0]?.id || '';
    const defaultData = ['718', '911', 'Taycan', 'Panamera', 'Macan', 'Cayenne']
    useEffect(() => {
        setShow(true);
    }, []);

    useEffect(() => {
        if (reduxOption !== undefined && reduxOption !== '') {
            setShow(false);
        }
    }, [reduxOption]);

    const dispatch = useDispatch()
    const ClearRedux = () => {
        dispatch(selectedOption(""))
        dispatch(selectedType(""));
        setShow(true);
    };

    return (
        <div >
            {show
                ? defaultData.map((car, index) => (
                    <Container key={index}>
                        {sectionData
                            .filter(model => model.Model === car)
                            .map((model, index) => (
                                <CarsCard
                                    key={index}
                                    model={model.Model}
                                    id={model.id}
                                    src={model.image}
                                    text={model.name}
                                    price={model.starting_price}
                                    listing={model.new}
                                />
                            ))}
                    </Container>
                ))
                :
                <>
                    <FilterButton onClick={ClearRedux}>Filters | {reduxOption} - {reduxType} <Close /></FilterButton>
                    {sectionData
                        .filter(option => option[reduxOption] === reduxType && reduxOption !== '')
                        .map((model, index) => (
                            <Container key={index}>
                                <CarsCard
                                    key={index}
                                    model={model.Model}
                                    id={model.id}
                                    src={model.image}
                                    text={model.name}
                                    price={model.starting_price}
                                    listing={model.new}
                                />
                            </Container>
                        ))}
                </>
            }
        </div >
    )
}

export default ModelsList
