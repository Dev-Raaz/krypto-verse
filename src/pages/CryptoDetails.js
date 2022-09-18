import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// User defined imports
import {useGetCryptoByIdQuery} from '../services/cryptoApi'

const CryptoDetails = () => {

  // Hook Calls
  const {id} = useParams()
  const { data : crypto, isFetching } = useGetCryptoByIdQuery(id)

  // State
  const [ coin, setCoin ] = useState(null)
  const [ timePeriod, setTimePeriod ] = useState('7d')

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
    name, btcPrice : price, allTimeHigh, 
    change, "24hVolume" : volume24h, rank, 
    marketCap, fullyDialutedMarketCap, symbol, tier
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
          <div className='tag website'>{}</div>
        </div>

        {/* TODO: Show Chart */}
        <h2> Time Period </h2>

        {/* TODO: Show Stats */}
        <h2> {coin.symbol} Stats</h2>

        {/*  */}
    </>
  )

}

export default CryptoDetails