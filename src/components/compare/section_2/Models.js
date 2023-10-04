import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { compare1, compare2, count } from '../../../features/compare/compareSlice'
import tw from 'twin.macro'
import styled from 'styled-components/macro'

const Container = styled.div`
    ${tw`bg-slate-100 w-44 mb-2 hover:bg-gray-300`}
`
const SubContainer = styled.div`
    ${tw`relative justify-center overflow-hidden border-4 border-slate-100 rounded-3xl bg-gray-200`}
    ${props => props.selected ? tw`border border-black` : ''}
`
const Model = styled.img`
    ${tw`w-auto rounded-2xl`}
`
const TextContainer = styled.div`
    ${tw`p-2`}
`
const Name = styled.div`
    ${tw`text-black text-sm`}
`

const Models = ({ src_model, src_name, id }) => {
    const [selected, setSelected] = useState(false)
    const dispatch = useDispatch()
    const isCounting = useSelector((state) => state.compare.isCounting);
    const handleClick = (id) => {
        isCounting
            ? dispatch(compare2(id))
            : dispatch(compare1(id))
        dispatch(count(!isCounting))
        setSelected(!selected)
    }

    const [imgHovered, setImgHovered] = useState(false)
    const handleMouseEnter = () => {
        setImgHovered(true)
    }
    const handleMouseLeave = () => {
        setImgHovered(false)
    }

    return (
        <Container
            id={id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(id)}
        >
            <SubContainer selected={selected}>
                <Model className={`transition-bg-slate-100 w-44 mb-2 hover:bg-gray-300 transform ${imgHovered ? 'transform scale-110' : ''}`} src={src_model} />
                <TextContainer>
                    <Name>{src_name}</Name>
                </TextContainer>
            </SubContainer>
        </Container>
    )
}

export default Models