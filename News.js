import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": "Stephan Shemilt",
          "title": "'English cricket must do without Anderson' - Key",
          "description": "Rob Key says English cricket will \"have to do without Jimmy Anderson\" after the fast bowler calls time on his legendary career against West Indies at Lord's in July.",
          "url": "https://www.bbc.com/sport/cricket/articles/cv2xx78ln2no",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/7f68/live/de01a1c0-1166-11ef-9602-b7eb005626eb.jpg",
          "publishedAt": "2024-05-13T21:01:05Z",
          "content": "Key discussed the future of Ollie Robinson, who possesses a one-year central contract, but had a disappointing tour of India.\r\nRobinson struggled with a back injury in the only Test of the five he pl… [+1125 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": "BBC Sport",
          "title": "Plans approved for £61.8m redevelopment of Lord's",
          "description": "Plans for a £61.8m redevelopment of two stands at Lord's are approved by the Marylebone Cricket Club's members.",
          "url": "https://www.bbc.com/sport/cricket/articles/cgrw3jxy0jdo",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/e67a/live/cacfca30-0e07-11ef-9e85-378926d0f2ef.jpg",
          "publishedAt": "2024-05-09T13:43:44Z",
          "content": "Plans for a £61.8m redevelopment of two stands at Lord's have been approved.\r\nThe work, voted through by Marylebone Cricket Club (MCC) members last week, will increase the ground's capacity by 1,100 … [+622 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "ECB names counties to host women's teams from 2025",
          "description": "The England and Wales Cricket Board announces the eight counties that will host professional women's teams as part of a major restructure of the domestic game from 2025.",
          "url": "https://www.bbc.co.uk/sport/cricket/68841517",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/5F7F/production/_133174442_gettyimages-2148429704.jpg",
          "publishedAt": "2024-04-17T23:01:25Z",
          "content": "Lancashire will be one of eight counties to host a professional women's team from 2025\r\nThe England and Wales Cricket Board has announced the eight counties that will host professional women's teams … [+2172 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": null,
          "title": "England v Pakistan, first T20 - watch, listen & follow text",
          "description": "Watch live coverage and follow text and radio commentary from the opening T20 between England and Pakistan at Edgbaston.",
          "url": "https://www.bbc.co.uk/sport/live/cricket/68966636",
          "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
          "publishedAt": "2024-05-10T18:45:51Z",
          "content": "Take a look outside.\r\nThe UK is bathed in sunshine, the trees in leaf and the birds in song. After the long slog of winter and a wet spring, we can finally venture out into great outdoors.\r\nDone that… [+270 chars]"
}]
    constructor(){
        super();
        console.log("Hello this is a component from News Component ");
        this.state = {
           
            "articles":this.articles,
            loading:"False"
        }
    }
       async componentDidMount(){
            let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=0da7db0175344c39ac65cc94eb4b26a7";
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData)
            this.setState({articles:parsedData.articles})
        }
   
  render() {
    return (
      <div  className='container my-3'>
      <h2>India Tomorrow - Top Headlines</h2>
      <div className='row'>
      {this.state.articles.map((element) => {
            return <div className="col-md-4 my-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,85):""+"..."} imgUrl={element.urlToImage} url={element.url}></NewsItem>
            </div>
      })}
            </div>
 
    
      
      
     
      </div>
    )
  }
}

export default News