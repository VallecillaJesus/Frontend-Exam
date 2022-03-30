import React, { Component } from 'react'
import Historical from './Historical';
import Option from './Option'

export default class Options extends Component {

  constructor(props){
    super(props);

    this.state = {
      prevSelection: null
    }

    this.options = null;

  }

  handlePrevSelection = ({target}) => {
    this.setState({
      prevSelection: target.innerText
    })
  }

  render() {

    this.options = this.props.options && Object.entries(this.props.options)

    return (
      <>

        <div className='opciones'>
          {
            this.options && this.options
            .map(([key,value], index) => <Option handlePrevSelection={this.handlePrevSelection} handleOptionClick={this.props.handleOptionClick} key={index} optionLetter={key} optionValue={value}/>)
          }
        </div>
        <div className='recordatorio'>
          <h3>Seleccion anterior: {this.state.prevSelection || ''}</h3>
          <Historical historical={this.props.historical}/>
        </div>

      </>
    )
  }
}
