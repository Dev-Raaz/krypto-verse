import React from 'react'

// @User defined imports
import Skeleton from './Skeleton'
import Shimmer from './Shimmer'

// Basic Stat Skeleton
const BasicStatSkeleton = () => {

  return (
    <div className='basic-stat-skeleton stats-card'>
      <div className='skel-flex-wrapper'>
        <div className='skel-grp'>
          <Skeleton type='title'/>
          <Skeleton type='text'/>
        </div>
        <Skeleton type='thumbnail'/>
      </div>
      <Shimmer/>
    </div>
  )
}

// Crypto Cards Skeleton
export const CryptoCardSkeleton = () => {

  return (
    <div className='crypto-card-skeleton currency-card'>
        <div className='skel-flex-wrapper'>
          <Skeleton type='title'/>
          <Skeleton type='thumbnail'/>
        </div>
        <Skeleton type='text'/>
        <Skeleton type='text'/>
        <Skeleton type='text'/>
        <Shimmer/>
    </div>
  )
}

const HomePageSkeleton = () => {
  return (
    <>
        
        <h1>Global Crypto Stats</h1>
        <p>Loading Market stats . . .</p>
        <div className='stats-grid'>
          <BasicStatSkeleton/>
          <BasicStatSkeleton/>
          <BasicStatSkeleton/>
          <BasicStatSkeleton/>
          <BasicStatSkeleton/>
        </div>

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
    </>
  )
}

export default HomePageSkeleton