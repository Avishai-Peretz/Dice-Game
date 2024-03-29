import React, { Component } from 'react'
import RollDice from './RollDice.js'
import HoldDIce from './HoldDIce'
import DesirableScore from './DesirableScore.js'
import NewGame from './NewGame.js'

export default class ScoreBoard extends Component {
    state = {}
    inputWiningScore = () => {
        if (this.props.inputWiningScore < 12) {
            return 'enter-wining-score'
        }else return 'none'
    }
    showGame = () => {
        if (this.props.inputWiningScore < 12) {
            return 'none'
        }else return 'shown'
    }
    render() {
        return (
            <>
        <div className='score-board column-c-se'>
            <div className={this.inputWiningScore()}>
                <h1 className='set-score'>Please submit Wining Score greater or equal to 12</h1>
            </div>
                    <div className={this.showGame()}> 
            <div className="column-c-se">            
                <NewGame  newGame={this.props.newGame} />
                <RollDice rollResult={this.props.rollResult} getRolledDice={this.props.getRolledDice}/>
                <HoldDIce holdDice={this.props.holdDice} />
            </div>        
            </div>        
            <DesirableScore winingScoreInput={this.props.winingScoreInput} gameActive={this.props.gameActive} />
      </div>
      
            </>
    )
  }
}
