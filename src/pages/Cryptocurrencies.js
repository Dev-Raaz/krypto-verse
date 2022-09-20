import React from 'react'
import millify from 'millify'

// @User defined imports
// API hooks
import { useGetCryptosQuery } from '../services/cryptoApi' 
import { Link } from '@mui/material'
import { Helmet } from 'react-helmet'
import CurrenciesSkeleton from '../components/skeletons/CurrenciesSkeleton'

const Cryptocurrencies = ({simplified}) => {
  
  // Condition for top 10
  const count = simplified ? 10 : 100
  const { data : currencies, isFetching } = useGetCryptosQuery(count)

  // Loading . . .
  if(isFetching || currencies === undefined)
    return (
      <>
        <Helmet>
          <title>Currencies</title>
          <meta name='description' content='Here are the top 100 crypto currencies in the world'/>
        </Helmet>
        <CurrenciesSkeleton/>
      </>
    )


  return (
    <>
        <div className='currencies-header'>
          <h1>Currencies</h1>
          {simplified && <Link href='/currencies'>Show More</Link>}
        </div>
        <p>Here are the top {currencies.data.coins.length} crypto currencies.</p>
        <div className='currencies-grid'>
          {
            currencies.data.coins.map(coin => (
              <a href={`/currencies/${coin.uuid}`} 
                key={coin.uuid} className='currency-card'>
                <div className='card-header'>
                  <p>{coin.rank}. {coin.name}</p>
                  <img src={coin.iconUrl} alt={`${coin.name} Logo`}/>
                </div>
                <p>Price:  <span className='money'>${millify(coin.price)}</span></p>
                <p>Market Cap:  <span className='money'>${millify(coin.marketCap)}</span></p>
                <p>Change:  <span className={coin.change > 0 ? 'changePlus' : 'changeMinus'}>
                {coin.change}%</span>
                </p>
              </a>
            ))
          }
        </div>
    </>
  )
}

export default Cryptocurrencies