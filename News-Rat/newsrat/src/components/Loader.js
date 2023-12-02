import React, { Component } from 'react'
import loader from './loader.gif'
import './Cards.css'

export default class Loader extends Component {
  render() {
    return (
      <div className='loader'>
        <img src={loader} alt='Loader'/>
      </div>
    )
  }
}
