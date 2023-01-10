import React, { Component } from 'react'
import loading from './assets/loading.gif'

export default class  extends Component {
  render() {
    return (
      <div className='text-center'>
      <img src={`${loading}`} alt="loading"/>
      </div>
    )
  }
}
