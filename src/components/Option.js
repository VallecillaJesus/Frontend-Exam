import React, { Component } from 'react'

export default class Option extends Component {
  
  executePropsFunctions = ({target}) => {
    this.props.handlePrevSelection({target})
    this.props.handleOptionClick({target})
  }

  render() {


    return (

      <div className='opcion'>
        <button onClick={this.executePropsFunctions} className='botones'>{this.props.optionLetter.toUpperCase()}</button>
        <h2>{this.props.optionValue}</h2>
      </div>

    )
  }
}
