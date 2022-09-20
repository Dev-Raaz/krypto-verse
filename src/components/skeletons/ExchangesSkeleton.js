import React from 'react'

// @User defined imports
import Skeleton from './Skeleton'
import Shimmer from './Shimmer'

// Crypto Cards Skeleton
export const ExchangeCardSkeleton = () => {

    return (
      <div className='crypto-card-skeleton currency-card'>
          <div className='skel-flex-wrapper'>
            <Skeleton type='title'/>
            <Skeleton type='thumbnail'/>
          </div>
          <Skeleton type='text'/>
          <Skeleton type='text'/>
          <Shimmer/>
      </div>
    )
}

const ExchangesSkeleton = () => {
  return (
    <div className='currencies-skeleton'>
        <h1>Exchanges</h1>
        <p>Loading Exchanges . . .</p>
        <div className='currencies-grid'>
          <ExchangeCardSkeleton/>
          <ExchangeCardSkeleton/>
          <ExchangeCardSkeleton/>
          <ExchangeCardSkeleton/>
          <ExchangeCardSkeleton/>
          <ExchangeCardSkeleton/>
        </div>
        <Shimmer/>
    </div>
  )
}

export default ExchangesSkeleton