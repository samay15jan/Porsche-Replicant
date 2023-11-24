import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../features/homepage/homeSlice'
import modelReducer from '../features/models/modelSlice'
import compareReducer from '../features/compare/compareSlice'
import configReducer from '../features/configuration/configSlice'

export default configureStore({
    reducer: {
        home: homeReducer,
        model: modelReducer,
        compare: compareReducer,
        config: configReducer,
    }
})
