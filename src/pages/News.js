import React from 'react'
import { Helmet } from 'react-helmet'
import NewsSkeleton from '../components/skeletons/NewsSkeleton'

// @User defined imports
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const News = () => {

  const { data: news, isFetching } = useGetCryptoNewsQuery( 'Cryptocurrency' )

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

  console.log(news.articles)

  return (
    <>
        {/* Meta Data */}
        <Helmet>
          <title>News</title>
          <meta name='description' 
            content='Here are the latest news articles'/>
        </Helmet>

        <h1>News</h1>
        <p>Here are the latest Crypto News</p>
        <div className='news-grid'
         >
          {
            news.articles.map(article => (
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