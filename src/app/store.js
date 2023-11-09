import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../features/homepage/homeSlice'
import compareReducer from '../features/compare/compareSlice'
import configReducer from '../features/configuration/configSlice'

export default configureStore({
    reducer: {
        home: homeReducer,
        compare: compareReducer,
        config: configReducer,
    }
})
