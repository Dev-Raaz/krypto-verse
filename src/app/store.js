// A simplify API built around createStore to create a redux store.
import { configureStore } from '@reduxjs/toolkit'

// @User defined imports 
import { cryptoApi } from '../services/cryptoApi'
import { exchangeApi } from '../services/exchangeApi'
import { cryptoNewsApi } from '../services/cryptoNewsApi'

// Configuring Store
export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [exchangeApi.reducerPath]: exchangeApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer 
    }
})