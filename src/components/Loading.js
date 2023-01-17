import React from 'react'
import spinner from './assets/spinner.gif'

const Loading = ()=> {
    return (
      <div className='text-center'>
      <img src={`${spinner}`} alt="loading more articles..."/>
      </div>
    )
}

export default Loading;
