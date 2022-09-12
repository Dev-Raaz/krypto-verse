import React from 'react'

const HomePage = () => {
  return (
    <main>
        <h1>Global Crypto Stats</h1>

        {/* Stats Grid */}
        <div className='stats-grid'>

          <div className='stats-card'>
            <p>Total Cryptocurrencies</p>
            <h3>5</h3>
          </div>

          <div className='stats-card'>
            <p>Total Exchanges</p>
            <h3>5</h3>
          </div>

          <div className='stats-card'>
            <p>Total Markets</p>
            <h3>5</h3>
          </div>

          <div className='stats-card'>
            <p>Total 24hr Volume</p>
            <h3>5</h3>
          </div>

          <div className='stats-card'>
            <p>Total Markets</p>
            <h3>5</h3>
          </div>

        </div>
    </main>
  )
}

export default HomePage