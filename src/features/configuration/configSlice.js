import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ModelID: [],
    SelectedColor: [],
    SelectedWheel: [],
    SelectedInterior: [],
    SelectedOptions: [],
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
            const price = action.payload
            return {
                ...state,
                SelectedInterior: [{ interior: interior, price: price }, ...state.SelectedInterior]
            }
        },
        SelectedOptions: (state, action) => {
            const option = action.payload
            const price = action.payload
            return {
                ...state,
                SelectedInterior: [{ option: option, price: price }, ...state.SelectedInterior]
              }
        }
      }
})

export const { ModelID, SelectedColor, SelectedWheel, SelectedInterior, SelectedOptions } = configSlice.actions

export default configSlice.reducer
