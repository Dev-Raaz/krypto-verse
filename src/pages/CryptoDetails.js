import millify from 'millify'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import commaNumber from 'comma-number'

// User defined imports
import {useGetCryptoByIdQuery} from '../services/cryptoApi'

const CryptoDetails = () => {

  // Hook Calls
  const {id} = useParams()
  const { data : crypto, isFetching } = useGetCryptoByIdQuery(id)

  // State
  const [ coin, setCoin ] = useState(null)
  // const [ timePeriod, setTimePeriod ] = useState('7d')

  // Side Effects
  useEffect(() => {
    if(!isFetching && crypto !== undefined)
      setCoin(crypto.data.coin)
  }, [ crypto, isFetching ])

  // Checking if the data still loading
  if(isFetching || crypto === undefined || coin === null)
    return <h1>Loading . . .</h1>

  console.log(coin)

  // General Stats
  const {
    name, price, allTimeHigh, 
    change, "24hVolume" : volume24h, rank, 
    marketCap, fullyDilutedMarketCap, symbol, 
    tier, websiteUrl, supply
  } = coin
  // Get Tier
  const getTier = (tier) => {
    let cls = ''
    if ( tier === 1 ) {
      cls= 'tag success'
    }else if (tier === 2) {
      cls = 'tag warning'
    } else {
      cls = 'tag error'
    }

    return cls
  }
  
  return (
    <>  

        <Helmet>
          <title>{name}</title>
          <meta name='description' content={`Details about ${name}`}/>
        </Helmet>

        <div className='header'>
          <img src={coin.iconUrl} alt={coin.name + ' Logo'}/>
          <h1>{ coin.name }</h1>
        </div>
        
        <div className='rankings'>
          {/* Symbol */}
          <div className='tag'>{symbol}</div>

          {/* Symbol */}
          <div className='tag'>Rank #{rank}</div>

          {/* Symbol */}
          <div className={getTier(tier)}>
          Tier {coin.tier}</div>

          {/* Symbol */}
          <a target='_blank' rel='noreferrer' className='tag website' href={websiteUrl}>
            <img src='/res/pages/cryptoDetails/website.svg' alt={`${name} Website`}/>
          </a>
        </div>

        {/* Show Stats */}
        <div className='stats-grid'>
          <div className='card price'>
            <p>{name} Price ({symbol})</p>
            <div className='value'>
              <h2>${millify(price)}</h2>
              {
                change > 0 
                ? 
                <div className='tag success'>
                  <img src='/res/pages/cryptoDetails/up.svg' alt='Up Logo'/>
                  <p>{change}%</p>
                </div>
                : 
                <div className='tag error'>
                  <img src='/res/pages/cryptoDetails/down.svg' alt='Down Logo'/>
                  <p>{change}%</p>
                </div>
              }
            </div>

            <div className='time-price-range'>
              <p>Low <span>$0</span></p> 
              <div className='range'/>
              <p><span>${millify(allTimeHigh.price)}</span> High</p>
            </div>
          </div>
          

          <div className='card market-cap'>
              <div className='data'>
                <p>Market Cap</p>
                <h3>${commaNumber(marketCap)}</h3>
              </div>

              <div className='data'>
                <p>Fully Dialated Market Cap</p>
                <h3>${commaNumber(fullyDilutedMarketCap)}</h3>
              </div>
          </div>

          <div className='card volume'>
              <div className='data'>
                <p>Volume 24h</p>
                <h3>${commaNumber(volume24h)}</h3>
              </div>

              <div className='data'>
                <p>Cirulating Supply</p>
                <h3>${commaNumber(Number(supply.circulating).toFixed(2))}</h3>
              </div>
          </div>
        </div>

        <h2> Charts </h2>
        <p>Coming Soon . . .</p>
        {/* TODO: Show Chart */}
        

        {/*  */}
    </>
  )

}

export default CryptoDetails