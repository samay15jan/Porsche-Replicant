import React from 'react'
import { useDispatch } from 'react-redux'
import { SelectedColor, BigContainerImage } from '../../../../features/configuration/configSlice'
import ColorsContainer from './ColorsContainer'

const Container = () => {

    const dispatch = useDispatch()
    const handleClick = (ColorName) => {
        dispatch(BigContainerImage(ColorName))
        dispatch(SelectedColor(ColorName))
    }

    return (
        <div>
            <ColorsContainer onClick={handleClick} />
        </div>
    )
}

export default Container
