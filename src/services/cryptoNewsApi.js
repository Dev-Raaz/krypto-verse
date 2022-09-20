import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Headers
const cryptoHeaders = {
    'X-RapidAPI-Key': '6f99e5898cmsh73b67bc5ded743cp15992fjsn2e5fc2f3ffab',
    'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
}

// Base URL
const baseUrl = 'https://free-news.p.rapidapi.com/v1' 

// Custom function that combines the url and headers
const createRequest = (url, params) => ({url, headers: cryptoHeaders, params})

// Exporting our API
export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: ( builder) => ({
        // We can add endpoints to request from different endpoints
        getCryptoNews: builder.query({
            query: ( topic ) => createRequest(`/search?q=${topic}`)
        }),
    })
})

// Redux returns these hooks that we can use in our components
export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi