import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Headers
const exchangeHeaders = {
    'X-RapidAPI-Key': '38ee768dfbmshe71589333ff4de4p1fb288jsncca375c40d2a',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
}

const baseUrl = 'https://coingecko.p.rapidapi.com' 

// Custom function that combines the url and headers
const createRequest = (url) => ({url, headers: exchangeHeaders})

// Exporting our API
export const exchangeApi = createApi({
    reducerPath: 'exchangeApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: ( builder) => ({
        // We can add endpoints to request from different endpoints
        getExchanges: builder.query({
            query: () => createRequest(`/exchanges`)
        })
    })
})

// Redux returns these hooks that we can use in our components
export const {
    useGetExchangesQuery
} = exchangeApi