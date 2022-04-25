import './News.css'

import React,{useEffect, useState} from 'react';

const News = () => {
  const [articles, setArticles]= useState(null)
  
  useEffect(() =>{
    fetch('http://localhost:8080/news',{
      method:'POST',
      headers: {
          'content-Type': 'application/json',
          'Accept':'application/json'
      },
      })
      .then(response=>response.json())
      .then(data => {
        setArticles(data)
      })
      .catch((error)=>{
        console.log('Error : ',error)
      });
  },[])
   

  const feed = articles?.slice(0,10)
  return (
    <section className="news__container">
      <h2>Trading news</h2>
      {
        feed?.map((news,_index)=>{
          return(
            <div className="news__container__content" key={_index}>
              <a href={news.url}><p>{news.title}</p></a>
              <p>Source : {news.source}</p>
            </div>
          )
        })
      }
    </section>
  )
}

export default News
