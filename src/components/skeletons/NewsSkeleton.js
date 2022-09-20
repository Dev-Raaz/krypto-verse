import React from 'react'

// @User defined imports
import Skeleton from './Skeleton'
import Shimmer from './Shimmer'

const NewsCardSkeleton = () => {

    return (
        <div className='news-card news-card-skeleton'>
            <Skeleton type='thumbnail'/>
            <div className='details'>
                <Skeleton type='text'/>
                <Skeleton type='text'/>
                <Skeleton type='text'/>
            </div>  
            <Shimmer/>
        </div>
    )
}


const NewsSkeleton = () => {
  return (
    <div className='news-skeleton'>
        <h1>News</h1>
        <p>Loading News . . .</p>
        <div className='news-grid'>
            <NewsCardSkeleton/>
            <NewsCardSkeleton/>
            <NewsCardSkeleton/>
            <NewsCardSkeleton/>
            <NewsCardSkeleton/>
            <NewsCardSkeleton/>
        </div>
    </div>
  )
}

export default NewsSkeleton