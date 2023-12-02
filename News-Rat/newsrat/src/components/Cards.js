import React, { Component } from 'react'
import './Cards.css'

export default class Cards extends Component {
  render() {
    let {tilte,description,url,imageUrl} = this.props;
    return (

        <div className="card customCard mx-3 my-3" style={{width: '18rem'}}>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{tilte}</h5>
                <p className="card-text">{description}</p>
                <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read more</a>
            </div>
        </div>
       
    )
  }
}
