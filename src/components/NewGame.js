import React, { Component } from 'react'

export default class NewGame extends Component {
  render() {
      return (
        <>
       <button className='btn'  onClick={this.props.newGame}>New Game</button>
        </>
    )
  }
}
