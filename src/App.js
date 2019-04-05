import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null,
      selectedColor: null
    }
    this.one = React.createRef()
    this.two = React.createRef()
    this.three = React.createRef()
    this.four = React.createRef()
    this.five = React.createRef()
    this.six = React.createRef()
    this.seven = React.createRef()
    this.eight = React.createRef()
  }

  handleClick(val) {
    this.setState({ 
      selected: this[val].current.textContent, // [val] = 'ref' = 'one', 'two', etc. 
      selectedColor: this[val].current.className })
    console.log(this[val].current.className)
  }
  
  handleReset() {
    this.setState({
      selected: null,
      selectedColor: null
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <div className="top">
          <div className="box one" ref={this.one} onClick={() => this.handleClick('one')}>1</div>
          <div className="box two" ref={this.two} onClick={() => this.handleClick('two')}>2</div>
          <div className="box three" ref={this.three} onClick={() => this.handleClick('three')}>3</div>
        </div>
        <div className="top">
          <div className="circle four" ref={this.four} onClick={() => this.handleClick('four')}>Hey!</div>
          
          <div className={`main ${this.state.selectedColor}`}>{this.state.selected ? this.state.selected : 'Click a shape'}</div>
          
          <div className="circle five" ref={this.five} onClick={() => this.handleClick('five')}>Hola!</div>
        </div>
        <div className="top">
          <div className="para six" ref={this.six} onClick={() => this.handleClick('six')}>╭∩╮(Ο_Ο)╭∩╮</div>
          <div className="para seven" ref={this.seven} onClick={() => this.handleClick('seven')}>((̲̅ ̲̅(̲̅C̲̅r̲̅a̲̅y̲̅o̲̅l̲̲̅̅a̲̅( ̲̅((></div>
          <div className="para eight" ref={this.eight} onClick={() => this.handleClick('eight')}>¯\_(ツ)_/¯ </div>
        </div>
        <div className="resetWrap">
          <div className="reset" onClick={() => this.handleReset()}>Reset</div>
        </div>  
      </div>
    );
  }
}

export default App;
