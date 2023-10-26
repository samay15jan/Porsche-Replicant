import React from 'react'
import { useDispatch } from 'react-redux'
import { SelectedColor } from '../../../../features/configuration/configSlice'
import ColorsContainer from './ColorsContainer'

const Container = ({ ID }) => {

    const dispatch = useDispatch()
    const handleClick = (ColorName) => {
        dispatch(SelectedColor(ColorName))
    }

    return (
        <div>
            <ColorsContainer onClick={handleClick} ID={ID} />
        </div>
    )
}

export default Container
