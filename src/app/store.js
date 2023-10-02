import { configureStore } from '@reduxjs/toolkit'
import compareReducer from '../features/compare/compareSlice'

export default configureStore({
    reducer: {
        compare: compareReducer,
    }
})