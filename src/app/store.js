// A simplify API built around createStore to create a redux store.
import { configureStore } from '@reduxjs/toolkit'

// @User defined imports 
import { cryptoApi } from '../services/cryptoApi'

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer 
    }
})