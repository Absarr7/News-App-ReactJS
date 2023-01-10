import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {
  dot = "..."
    
  render() {
    let {title, description, ImageURL, newsurl} = this.props;
    return (
        <div className='my-4'>
            <div className="card" style={{"width": "18rem", "height": "450px"}}>
                <img src={ImageURL} style={{"height": "170px"}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary" style={{"position":"absolute", "top": "89%"} }>Read More</a>
                    </div>
            </div>
        </div>
    )
  }
}

export default NewsItem