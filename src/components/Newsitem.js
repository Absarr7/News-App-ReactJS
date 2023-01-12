import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {
  dot = "..."
    
  render() {
    let {title, description, ImageURL, newsurl, date, author, source} = this.props;
    return (
        <div className='my-4'>
            <div className="card" style={{"width": "21rem", "height": "480px"}}>
                <img src={ImageURL} style={{"height": "180px"}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <span className="badge rounded-pill text-bg-warning fw-semi-bold my-1">{source}</span>
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text "><small className='text-muted'  style={{"position":"absolute", "top": "82%"} }>By {author} on {new Date(date).toDateString()}</small></p>
                        <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary" style={{"position":"absolute", "top": "89%"} }>Read More</a>
                    </div>
            </div>
        </div>
    )
  }
}

export default NewsItem