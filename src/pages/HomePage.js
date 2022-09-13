import React from 'react'
import millify from 'millify'

// @User defined imports
// redux 
import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies'

const HomePage = () => {
  
  const { data, isFetching } = useGetCryptosQuery()
  
  if(isFetching || data === undefined)
    return <h1>Loading . . .</h1>


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
            <div className='description'>
              <p>Total Cryptocurrencies</p>
              <h3>{total}</h3>
            </div>
            <img src='/res/pages/home/totalCurrencies.png' alt='Currencies'/>
          </div>

          <div className='stats-card'>
            <div className='description'>
              <p>Total Exchanges</p>
              <h3>{millify(totalExchanges)}</h3>
            </div>
            <img src='/res/pages/home/totalExchanges.png' alt='Exchanges'/>
          </div>
          
          <div className='stats-card'>
            <div className='description'>
              <p>Total Marketcap</p>
              <h3>{millify(totalMarketCap)}</h3>
            </div>
            <img src='/res/pages/home/marketCap.png' alt='Marketcap'/>
          </div>

          <div className='stats-card'>
            <div>
              <p>Total 24hr Volume</p>
              <h3>{millify(total24hVolume)}</h3>
            </div>
            <img src='/res/pages/home/marketVolume.png' alt='24hr Volume'/>
          </div>


          <div className='stats-card'>
            <div className='description'>
              <p>Total Markets</p>
              <h3>{millify(totalMarkets)}</h3>
            </div>
            <img src='/res/pages/home/markets.png' alt='Total Markets'/>
          </div>

        </div>

        <Cryptocurrencies showTop/>
    </>
  )
}

export default HomePage