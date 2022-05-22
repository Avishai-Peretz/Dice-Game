import React, { Component } from 'react'
import { Die, rollDie } from './Die.js'

export default class RollDice extends Component {
  state = {}
  

  rollAllDice = (props) => {
    const die1 = rollDie()
    const die2 = rollDie()
    const rollResult = die1 + die2  
    this.props.getRolledDice(rollResult, die1, die2)
  }
            
  render() {
    return (
        <div className="roll-dice column-c-se">
          <Die rollResult={this.props.rollResult.first} rollDie={this.rollDie1} />
          <Die rollResult={this.props.rollResult.second} rollDie={this.rollDie2} />
        <button
          className='btn'
          onClick={() => {
          this.rollAllDice()
        }        
                }
        >Click To Roll</button>
      </div>
    )
  }
}
