import React, { Component } from 'react'
import spinner from './assets/spinner.gif'

export default class  extends Component {
  render() {
    return (
      <div className='text-center'>
      <img src={`${spinner}`} alt="loading more articles..."/>
      </div>
    )
  }
}
