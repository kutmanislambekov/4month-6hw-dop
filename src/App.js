import React, { Component } from 'react'
import './style.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      result: undefined,
      input1: undefined,
      input2: undefined
    }

  }

  render() {
    const plus1 = () => {
      console.log(this.state.input1);
      this.setState({ result: this.state.input1 +this.state.input2 }) 
    }
    const minus = () => {
      console.log(this.state.input1);
      this.setState({ result: this.state.input1 - this.state.input2 }) 
    }
    const umnosh = () => {
      console.log(this.state.input1);
      this.setState({ result: this.state.input1 * this.state.input2 }) 
    }
    const delen = () => {
      console.log(this.state.input1);
      this.setState({ result: this.state.input1 / this.state.input2 }) 
    }
    const stepen = () => {
      console.log(this.state.input1);
      this.setState({ result: this.state.input1 ** this.state.input2 }) 
    }
    const koren = () => {
      console.log(this.state.input1);
      this.setState({ result: Math.pow(this.state.input1,1/this.state.input2) }) 
    }
    


    console.log(this.state);
    return (
      <div>
        <input onChange={(event) => { this.setState({ input1: +event.target.value }) }} />
        <input onChange={(event) => { this.setState({ input2: +event.target.value }) }} />
       <div><button onClick={plus1}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={umnosh}>*</button>
        <button onClick={delen}>/</button>
        <button onClick={stepen}>² </button>
        <button onClick={koren}>√</button></div> 
       


        



        <h1>{this.state.result}</h1>
      </div>
    )
  }
}

export default App