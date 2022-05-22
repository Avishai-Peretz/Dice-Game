import React, { Component } from 'react'

export const rollDie = () => {
    const die = Math.ceil(Math.random() * 6)
    return die
}

export class Die extends Component {
    state = {}
    render() {
    return (
        <div>
           {this.props.rollResult} 
      </div>
    )
  }
}
