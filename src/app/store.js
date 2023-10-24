import { configureStore } from '@reduxjs/toolkit'
import compareReducer from '../features/compare/compareSlice'
import configReducer from '../features/configuration/configSlice'

export default configureStore({
    reducer: {
        compare: compareReducer,
        config: configReducer,
    }
})