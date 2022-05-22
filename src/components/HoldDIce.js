import React, { Component } from 'react'

export default class HoldDIce extends Component {
    
    render() {
    return (
        <div>
            <button className='btn' onClick={this.props.holdDice}>Hold</button>
      </div>
    )
  }
}
