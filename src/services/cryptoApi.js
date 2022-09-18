import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoHeaders = {
    'X-RapidAPI-Key': '6f99e5898cmsh73b67bc5ded743cp15992fjsn2e5fc2f3ffab',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com' 

// Custom function that combines the url and headers
const createRequest = (url) => ({url, headers: cryptoHeaders})

// Exporting our API
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: ( builder) => ({
        // We can add endpoints to request from different endpoints
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoById: builder.query({
            query: (id) => createRequest(`/coin/${id}`)
        })
    })
})

// Redux returns these hooks that we can use in our components
export const {
    useGetCryptosQuery,
    useGetCryptoByIdQuery
} = cryptoApi