import React, {Component} from 'react';

import Scene from './components/Scene';
import OptionPanel from './components/OptionPanel';
import data from './components/data.json';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      sceneStatus: [1,''],
      historical: [],
      historyData: null
    }

  }

  requireData = () => data.find(item => item.id === this.state.sceneStatus.join(''))

  handleOptionClick = ({target}) => {

    this.setState({
    
      historical: [
        ...this.state.historical,
        target.innerText
      ],

      sceneStatus: [
        ++this.state.sceneStatus[0], 
        target.innerText.toLowerCase()
      ]

    })

  }
  
  componentDidMount(){
    this.setState({
      historyData: this.requireData()
    })
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.sceneStatus !== this.state.sceneStatus) {
      this.setState({
        historyData: this.requireData()
      })
    }
  }

  render(){ 

    return (

      <div className="layout">
        <Scene scenary={this.state.historyData && this.state.historyData.historia}/>
          <OptionPanel historical={this.state.historical} handleOptionClick={this.handleOptionClick} options={this.state.historyData && this.state.historyData.opciones} />
      </div>

    )
  };
}

export default App;
