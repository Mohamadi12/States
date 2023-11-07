import React, { Component } from 'react'

export class CounterClass extends Component {
    constructor(props){
        super(props)
        this.state={
           counter:10,
           color:"red",
           counter1:2
        }
    }
    increment=()=>{
   this.setState({
    counter: this.state.counter +5
   })
    }
    decrement=()=>{
        if(this.state.counter>1)
        this.setState({
            counter: this.state.counter -3
           })
    }
    reset=()=>{
        this.setState({
            counter: 0
           })
    }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={()=>this.increment()}>Plus</button>
        <button onClick={()=>this.decrement()}>Moins</button>
        <button onClick={()=>this.reset()}>Reset</button>
        <h2>{this.state.counter}</h2>
        <h2>My Car is {this.state.color}</h2>
      </div>
    )
  }
}

export default CounterClass
