import React from 'react'

functionNewsItem({articles}) {
  return (
    <div
    style={{
        border:"1px solid #ddd",
        borderRadius:"10px",
        padding:"15px",
        margin:"10px",
        maxWidth:"600px",
        marginLeft:"auto",
        marginRight:"auto",
    }}>
        <a href={article.url} target="_blank"rel="noreferrer"></a>
      <h3>{articles.title}</h3>
      <p><strong>Source:</strong>{articles.source.nameco}</p>
      <img src={article.urlToImage} alt={article.title} style={{width:"100",borderRadius:"10px"}}/>
    </div>
  )
}

export default NewsItem
