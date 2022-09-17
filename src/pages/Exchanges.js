import React from 'react'
import millify from 'millify'

// @User defined imports
import { useGetExchangesQuery } from '../services/exchangeApi'
import { Helmet } from 'react-helmet'

const Exchanges = ({simplified}) => {

  const { data : exchanges, isFetching } = useGetExchangesQuery()

  if(isFetching || exchanges === undefined)
    return (
    <>
      <Helmet>
        <title>Exchanges</title>
        <meta name='description' 
          content='Here are the top 100 crypto exchanges in the world'/>
      </Helmet>
      <h1>Loading . . .</h1>
    </>)

  return (
    <>
      <Helmet>
        <title>Crypto Exchanges</title>
        <meta name='description' 
          content='Here are the top 100 crypto exchanges in the world'/>
      </Helmet>
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