import React, { Component } from 'react'

export default class Scene extends Component {


  render() {
    return (
        <h1 className='historia'>
          {this.props.scenary || 'FIN'}
        </h1>
    )
  }
}
