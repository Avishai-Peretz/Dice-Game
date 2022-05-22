import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Assets/Die.css'

export const rollDie = (num) => {
    const die = Math.floor(Math.random() * num)
    return die
}

export class Die extends Component {
    state = {}

    render() {
    const {face, rolling} = this.props
    return (
        <div>
          <FontAwesomeIcon icon={['fas', `fa-dice-${face}`]} className={`Die 
                ${rolling && 'Die-shaking'}`} />
      </div>
    )
  }
}