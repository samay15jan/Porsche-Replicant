import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ModelID: [],
    SelectedColor: [],
    SelectedWheel: [],
    SelectedInterior: [],
    SelectedOptions: [],
    SelectedTechnology: [],
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
        SelectedWheel: (state, action) => {
            const wheel = action.payload
            const price = action.payload
            return {
                ...state,
                SelectedWheel: [{ wheel: wheel, price: price }, ...state.SelectedWheel]
            }
        },
        SelectedInterior: (state, action) => {
            const interior = action.payload
            return {
                ...state,
                SelectedInterior: [{ interior: interior }, ...state.SelectedInterior]
            }
        },
        SelectedOptions: (state, action) => {
            const options = action.payload
            return {
                ...state,
                SelectedOptions: [{ options: options }, ...state.SelectedOptions]
            }
        },
        SelectedTechnology: (state, action) => {
            const technology = action.payload
            return {
                ...state,
                SelectedTechnology: [{ technology: technology }, ...state.SelectedTechnology]
            }
        },
    }
})

export const { ModelID, SelectedColor, SelectedWheel, SelectedInterior, SelectedOptions, SelectedTechnology } = configSlice.actions

export default configSlice.reducer
