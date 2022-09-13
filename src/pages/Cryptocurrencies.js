import React from 'react'
import millify from 'millify'

// @User defined imports
// API hooks
import { useGetCryptosQuery } from '../services/cryptoApi' 

const Cryptocurrencies = () => {

  const { data : currencies, isFetching } = useGetCryptosQuery()

  if(isFetching)
    return <main><h1>Loading . . .</h1></main>
  console.log(currencies.data.coins)


  return (
    <main>
        <h1>Cryptocurrencies</h1>
        <div className='currencies-grid'>
          {
            currencies.data.coins.map(coin => (
              <div key={coin.uuid} className='currency-card'>
                <div className='card-header'>
                  <p>{coin.rank}. {coin.name}</p>
                  <img src={coin.iconUrl} alt={`${coin.name} Logo`}/>
                </div>
                <p>Price:  <span className='money'>${millify(coin.price)}</span></p>
                <p>Market Cap:  <span className='money'>${millify(coin.marketCap)}</span></p>
                <p>Change:  <span className={coin.change > 0 ? 'changePlus' : 'changeMinus'}>
                {coin.change}%</span>
                </p>
              </div>
            ))
          }
        </div>
    </main>
  )
}

export default Cryptocurrencies