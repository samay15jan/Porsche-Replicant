import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedOption: '',
    selectedType: '',
}

export const modelSlice = createSlice({
    name: 'model',
    initialState,
    reducers: {
        selectedOption: (state, action) => {
            const newId = action.payload
            return {
                ...state,
                selectedOption: [{ id: newId }, ...state.selectedOption]
            }
        },
        selectedType: (state, action) => {
            const newId = action.payload
            return {
                ...state,
                selectedType: [{ id: newId }, ...state.selectedType]
            }
        },

    }
})

export const { selectedOption, selectedType } = modelSlice.actions

export default modelSlice.reducer
