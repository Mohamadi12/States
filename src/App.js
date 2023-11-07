import React, { Component } from 'react'
import CounterHooks from './CounterHooks'
import Livecercle from './Livecercle'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      show:true
    }
  }

  Shoow=()=>{
    this.setState({
     show:this.state.show
    })
     }

  render() {
    return (
      <div>
        <button onClick={()=>this.Shoow()}>HIDE</button>
        {this.state.show && <Livecercle />} 
        <hr/>
        <CounterHooks />
      </div>
    )
  }
}

