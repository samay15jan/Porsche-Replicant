import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ModelID: [],
    SelectedColor: [],
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
    }
})

export const { ModelID, SelectedColor } = configSlice.actions

export default configSlice.reducer