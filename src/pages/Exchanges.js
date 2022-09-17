import React from 'react'
import millify from 'millify'

// @User defined imports
import { useGetExchangesQuery } from '../services/cryptoApi'

const Exchanges = ({simplified}) => {
  
  // Condition for top 10
  const count = simplified ? 10 : 100
  const { data : exchanges, isFetching } = useGetExchangesQuery(count)

  if(isFetching || exchanges === undefined)
    return <h1>Loading . . .</h1>

  return (
    <>
        <h1>Exchanges</h1>
        <p>Here are the top {exchanges.length} exchanges.</p>
        <div className='currencies-grid'>
          {
            exchanges.data.coins.map(exchange => (
              <a href={`/currencies/${exchange.uuid}`} 
                key={exchange.uuid} className='currency-card'>
                <div className='card-header'>
                  <p>{exchange.rank}. {exchange.name}</p>
                  <img src={exchange.iconUrl} alt={`${exchange.name} Logo`}/>
                </div>
                <p>Price:  <span className='money'>${millify(exchange.price)}</span></p>
                <p>BTC Price:  <span className='money'>${millify(exchange.btcPrice)}</span></p>
                <p>No Of Markets:  <span className='money'>
                {exchange.noOfMarkets}%</span>
                </p>
              </a>
            ))
          }
        </div>
    </>
  )
}

export default Exchanges