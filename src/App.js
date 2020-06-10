import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import String from "./components/String";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  selectA = (blah, inScale) => {
    if(blah == 0) {
        return !inScale;
        // this.setState({inScale: !this.state.inScale});
    }
  }

  getData = (inScale, symbol, value, abs) => {
    let myArr = [];
    myArr.push({"inScale": inScale, "symbol": symbol, "value": value, "abs": abs})
    this.setState({content: myArr})
  }

  render(){
  return ( 
    <div className="App">
      <button type="button" onClick={this.selectA}></button>
      <String openNote={115} getData={this.getData} inScale={/>
      <String openNote={120} getData={this.getData}/>
      <String openNote={125} getData={this.getData}/>
      <String openNote={130} getData={this.getData}/>
      <String openNote={134} getData={this.getData}/>
      <String openNote={139} getData={this.getData}/>
    </div>
    )
  }
}


export default App;
