import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Configuration: [],
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        Configuration: (state, action) => {
            const newId = action.payload
            return {
                ...state,
                Configuration: [{ id: newId }, ...state.Configuration]
            }
        },
      }
})

export const { Configuration } = homeSlice.actions

export default homeSlice.reducer
