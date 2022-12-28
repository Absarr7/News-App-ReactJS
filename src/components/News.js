import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class news extends Component {

  
    
  constructor(){
    super();
    this.state = {articles: []}
}

async componentDidMount(){
  let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=245f49689f7e4dd2bc78159bed8e1091";
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);
  this.setState({articles: parsedData.articles})
}
  render() {
    return (
      <div>
        <div className="container my-5">
        <h3>Top headlines - see what's really happening in the world.</h3>
          <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <Newsitem title={element.title?element.title.slice(0, 65):"..."} description={element.description?element.description.slice(0, 80):"..."} ImageURL={element.urlToImage?element.urlToImage:"https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} newsurl={element.url}/>
            </div>
        })}
            
          </div>
        </div>
      </div>
    )
  }
}

export default news