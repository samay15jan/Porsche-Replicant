import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ModelID: [],
    SelectedColor: [],
    BigContainerImage: [],
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        ModelID: (state, action) => {
            const newId = action.payload
            return {
                ...state,
                SelectedColor: [{ id: newId }, ...state.SelectedColor]
            }
        },
        SelectedColor: (state, action) => {
            const color = action.payload
            return {
                ...state,
                SelectedColor: [{ color: color }, ...state.SelectedColor]
            }
        },
        BigContainerImage: (state, action) => {
            const image = action.payload
            return {
                ...state,
                BigContainerImage: [{ image: image }, ...state.BigContainerImage]
            }
        },

    }
})

export const { ModelID, SelectedColor, BigContainerImage } = configSlice.actions

export default configSlice.reducer