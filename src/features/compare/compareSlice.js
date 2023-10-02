import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    compare: []
}
export const compareSlice = createSlice({
    name: 'compare',
    initialState,
    reducers: {
        compare1: (state, action) => {
            const compare1 = {
                id: action.payload,
            }
            state.compare.push(compare1)
        }
    }
})

export const { compare1 } = compareSlice.actions

export default compareSlice.reducer