import React, { Component } from 'react'

export default class PlayerSection extends Component {
    active = () => {
        if (this.props.activePlayer) {
         return "active" 
      } else {return "inactive"}
    }
    
    render() {
    return (
        <div className="player-section column-c-se" data-active={this.props.activePlayer}>
            <div className="player-container">
                <div className={`player column-c-c ${this.active()}`}>
                    {this.props.player}
                </div>
                <div className="player-turn">
                    {this.active() === 'active' ? 'Your Turn!' : ``}
                </div>
            </div>
            <div className="player-total column-c-c">
                Total Score:
                <div className="txt-40 bold">
                {this.props.playerTotal}
            </div>
            </div>
            <div className="player-current">
                current Score:
                <br />
                {this.props.playerCurrent}
            </div>
      </div>
    )
  }
}
