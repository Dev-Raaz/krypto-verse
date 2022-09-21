import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// @User defined imports
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import NewsSkeleton from '../components/skeletons/NewsSkeleton'

const News = ({simplified}) => {

  const { data: newsData, isFetching } = useGetCryptoNewsQuery( 'Cryptocurrency' )
  
  // States
  const [ news, setNews ] = useState(undefined)
  const [view, setView] = useState(6)

  useEffect(() => {
    if(!isFetching)
     setNews(newsData)

    if(simplified)
      setView(6)
    else
      setView(24)

  }, [isFetching, newsData, simplified])

  // Testing
  if (isFetching || news === undefined)
    return (
      <>
        <Helmet>
        <title>News</title>
        <meta name='description' 
          content='Here are the latest news articles'/>
        </Helmet>
        <NewsSkeleton/>
      </>
  )

  return (
    <>
        {/* Meta Data */}
        <Helmet>
          <title>News</title>
          <meta name='description' 
            content='Here are the latest news articles'/>
        </Helmet>

        <div className='currencies-header'>
          <h1>News</h1>
          {
            simplified && <Link to='/news'>Show More</Link>
          }
        </div>
        <p>Here are the latest Crypto News</p>
        <div className='news-grid'
         >
          {
            news.articles.slice(0,view).map(article => (
              <a key={article._id}  target='_blank' rel='noreferrer' 
               className='news-card' href={article.link}>
                <img src={article.media} alt={`${article.title}`}/>
                <div className='details'>
                  <h3>
                    {article.title.slice(0, 50)}{article.title.length > 50 ? ' . . .' : ''}
                  </h3>
                  {
                    article.twitter_account !== null
                    ? 
                    <a className='twitter' 
                      href={`https://twitter.com/${article.twitter_account}`}>
                      <img src='/res/socials/twitter.svg' alt='Twitter Logo'/>
                      <span>{article.twitter_account}</span>
                    </a>
                    : null
                  }
                </div>
              </a>
            ))
          }
        </div>
    </>
  )
}

export default News