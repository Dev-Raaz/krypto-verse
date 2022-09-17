import React from 'react'
import millify from 'millify'

// @User defined imports
import { useGetExchangesQuery } from '../services/exchangeApi'

const Exchanges = ({simplified}) => {
  
  // Condition for top 10
  const count = simplified ? 10 : 100
  const { data : exchanges, isFetching } = useGetExchangesQuery(count)

  if(isFetching || exchanges === undefined)
    return <h1>Loading . . .</h1>

  console.log(exchanges)

  return (
    <>
        <h1>Exchanges</h1>
        <p>Here are the top {exchanges.length} exchanges.</p>
        <div className='currencies-grid no-hover'>
          {
            exchanges.map(exchange => (
              <div 
                key={exchange.id} className='currency-card'>
                <div className='card-header'>
                  <p>{exchange.trust_score_rank}. {exchange.name}</p>
                  <img src={exchange.image} alt={`${exchange.name} Logo`}/>
                </div>
                <p>24h Volume:  <span className='money'>
                ${millify(exchange.trade_volume_24h_btc)}</span></p>
                <p>Year Established:  <span className='money'>
                {exchange.year_established}</span>
                </p>
              </div>
            ))
          }
        </div>
    </>
  )
}

export default Exchanges