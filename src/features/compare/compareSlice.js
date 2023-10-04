import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    compare: [],
    isCounting: false,
}

export const compareSlice = createSlice({
    name: 'compare',
    initialState,
    reducers: {
        compare1: (state, action) => {
            const compare1 = {
                id: action.payload,
            }
            state.compare.unshift(compare1)
        },
        compare2: (state, action) => {
            const compare2 = {
                id: action.payload,
            }
            state.compare.unshift(compare2)
        },
        count: (state, action) => {
            state.isCounting = action.payload;
        }
    }
})

export const { compare1, compare2, count } = compareSlice.actions

export default compareSlice.reducer