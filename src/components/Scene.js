import React, { Component } from 'react'

export default class Scene extends Component {


  render() {
    return (
      <div className='historia'>
        <h2 style={{margin:"40px"}}>
          {this.props.scenary || 'FIN'}
        </h2>
      </div>
    )
  }
}
