import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    compare: [],
    isCounting: false
}

export const compareSlice = createSlice({
    name: 'compare',
    initialState,
    reducers: {
        compare1: (state, action) => {
            const newId = action.payload
            return {
                ...state,
                compare: [{ id: newId }, ...state.compare]
            }
        },
        compare2: (state, action) => {
            const newId = action.payload
            return {
                ...state,
                compare: [{ id: newId }, ...state.compare]
            }
        },
        count: (state, action) => {
            return {
                ...state,
                isCounting: action.payload,
            }
        },
    }
})

export const { compare1, compare2, count, removeData } = compareSlice.actions

export default compareSlice.reducer