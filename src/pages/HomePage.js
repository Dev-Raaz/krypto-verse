import React from 'react'
import millify from 'millify'

// @User defined imports
// redux 
import { useGetCryptosQuery } from '../services/cryptoApi'

const HomePage = () => {
  
  const { data, isFetching } = useGetCryptosQuery()
  
  if(isFetching)
    return <main><h1>Loading . . .</h1></main>

  const 
    {
      total, totalMarkets, 
      totalExchanges, totalMarketCap, 
      total24hVolume
    } = data.data.stats

  return (
    <>
        <h1>Global Crypto Stats</h1>

        {/* Stats Grid */}
        <div className='stats-grid'>

          <div className='stats-card'>
            <p>Total Cryptocurrencies</p>
            <h3>{total}</h3>
          </div>

          <div className='stats-card'>
            <p>Total Exchanges</p>
            <h3>{millify(totalExchanges)}</h3>
          </div>
          
          <div className='stats-card'>
            <p>Total Marketcap</p>
            <h3>{millify(totalMarketCap)}</h3>
          </div>

          <div className='stats-card'>
            <p>Total 24hr Volume</p>
            <h3>{millify(total24hVolume)}</h3>
          </div>


          <div className='stats-card'>
            <p>Total Markets</p>
            <h3>{millify(totalMarkets)}</h3>
          </div>

        </div>
    </>
  )
}

export default HomePage