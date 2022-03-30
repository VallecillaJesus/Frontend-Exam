import React, { Component } from 'react'

export default class Historical extends Component {

  render() {
    return (
      <div>
        <h4>Historial de opciones elegidas: </h4>
        <ul>
          {
            this.props.historical && this.props.historical.map((item, index) => <li key={index}>{item}</li>)
          }
        </ul>
      </div>
    )
  }

}
