import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,url}= this.props
    return (
      
      <div>
      <div className="card" style={{width: '18rem'}}>
      <img src={imgUrl?imgUrl:"https://th.bing.com/th?id=OIP.-mlwDVsSwfABKmZBtIBbtQHaFY&w=293&h=213&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"} className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} target='_blank' className="btn btn-sm btn-primary">Read more</a>
       </div>
      </div>
      </div>
    )
  }
}

export default NewsItem