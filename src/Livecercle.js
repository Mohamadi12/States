import React, { Component } from 'react'

export class Livecercle extends Component {
    constructor(props){
        console.log("constructor")
        super(props)
        this.state={
           counter:10,
           color:"red",
           counter1:2,
           timer:0,
           intervall:null
        }
    }
    increment=()=>{
   this.setState({
    counter: this.state.counter +5
   })
    }

    componentDidMount(){
        console.log("bonjour  je viens app js de me lire")
        this.setState({
            intervall:setInterval(
                ()=>this.setState({
                    timer:this.state.timer +1}),1000
            )
        })
    }
    componentDidUpdate(){
        console.log("Il y a eu modification")
        console.log(this.state.counter,"subit une modification")
    }
    componentWillUnmount(){
        console.log("Je viens de mourir")
    }
  render() {
    console.log("render")
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={()=>this.increment()}>Plus</button>
        <h2>{this.state.counter}</h2>
        <h2>My Car is {this.state.color}</h2>
        <h3>{this.state.timer}</h3>
      </div>
    )
  }
}

export default Livecercle
