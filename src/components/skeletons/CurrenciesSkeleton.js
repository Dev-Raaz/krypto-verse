import React from 'react'

// @User defined imports
import { CryptoCardSkeleton } from './HomePageSkeleton'
import Shimmer from './Shimmer'

const CurrenciesSkeleton = () => {
  return (
    <div className='currencies-skeleton'>
        <h1>Currencies</h1>
        <p>Loading Currencies . . .</p>
        <div className='currencies-grid'>
          <CryptoCardSkeleton/>
          <CryptoCardSkeleton/>
          <CryptoCardSkeleton/>
          <CryptoCardSkeleton/>
          <CryptoCardSkeleton/>
          <CryptoCardSkeleton/>
        </div>
        <Shimmer/>
    </div>
  )
}

export default CurrenciesSkeleton