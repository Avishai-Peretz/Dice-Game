import React, { Component } from 'react'
import ScoreBoard from "./ScoreBoard"
import PlayerSection from "./PlayerSection.js"
import '../Assets/display.css'
import '../Assets/fonts.css'
import '../Assets/style.css'

export default class Main extends Component {
    state = {
        rollResult: {
            first: null,
            second: null,
            total: null
        } ,      
        playerOneActive: false,
        playerTwoActive: false,
        playerOneTotal:null,
        playerOneCurrent:null,
        playerTwoTotal:null,
        playerTwoCurrent: null,
        totalScore: null,
        winingScore: null,
    }
    
    winingScoreInput = (num) => {
        this.setState({
            playerOneActive: true,
            winingScore: num
        })
    } 
    
    
    
    
    getRolledDice = (rollResult, die1, die2) => {
        this.setState({
            rollResult: {
                first: die1,
                second: die2,
                total: rollResult
            }
        })
        this.getCurrent(rollResult)
    }

    holdDice = () => {
        if (this.state.playerOneActive)  {
            const playerTotal = this.state.playerOneTotal + this.state.playerOneCurrent
            this.setState({
                playerOneTotal: playerTotal,
                playerOneCurrent: null,
                playerOneActive: false,
                playerTwoActive: true
            })            
        } else {
            const playerTotal = this.state.playerOneTotal + this.state.playerTwoCurrent
            this.setState({
                playerTwoTotal: playerTotal, 
                playerTwoCurrent: null,
                playerOneActive: true,
                playerTwoActive: false
            })
        }
    }

    getCurrent = (rollResult) => {
        if (this.state.playerOneActive) {
            const current = this.state.playerOneCurrent + rollResult
            this.setState({ playerOneCurrent: current })
            const total = this.state.totalScore + rollResult
            this.setState({totalScore:total})
        } else {
            const current = this.state.playerTwoCurrent + rollResult
            this.setState({ playerTwoCurrent: current })
            const total = this.state.totalScore + rollResult
            this.setState({totalScore:total})
        }
    }

    winner = ({ playerOneActive, playerTwoActive, playerOneTotal, playerOneCurrent, playerTwoTotal, playerTwoCurrent, winingScore }) => {  
        if ( playerOneActive && (playerOneTotal || playerOneCurrent) >= winingScore) {
            if ((playerOneTotal || playerOneCurrent) === winingScore) {
                setTimeout(() => this.newGame(), 1000)
                return alert("Player One Win!!!")
            } else if ((playerOneTotal || playerOneCurrent) > winingScore) {
                setTimeout(() => this.newGame(), 1000)
                return alert("Player Two Win!!!")
            }
        } else if ( playerTwoActive && (playerTwoTotal || playerTwoCurrent) >= winingScore) {
            if ((playerTwoTotal || playerTwoCurrent) === winingScore) {
                setTimeout(() => this.newGame(), 1000)
                return alert("Player Two Win!!!")
            } else {
                setTimeout(() => this.newGame(), 1000)
                return alert("Player One Win!!!")
            }
        } 
    }

    newGame = () => {
        this.setState({
            rollResult: {
                first: null,
                second: null,
                total: null
            } ,      
            playerOneActive: false,
            playerTwoActive: false,
            playerOneTotal:null,
            playerOneCurrent:null,
            playerTwoTotal:null,
            playerTwoCurrent: null,
            totalScore: null,
            winingScore: null,
        })
    }
    componentDidMount() {
    }
    
    componentDidUpdate() {    
        const submit = document.getElementById('Submit')
        console.dir(submit)
        if(this.state.winingScore >= 12) { submit.setAttribute('class', 'none')}
        this.winner(this.state)
    }

    
  render() {
    return (
        <main className='row-c-se'>
            <PlayerSection
                playerCurrent={this.state.playerOneCurrent}
                playerTotal={this.state.playerOneTotal} 
                activePlayer={this.state.playerOneActive}
                player="Plyer One" />
            <br />
            <br />
            <ScoreBoard
                className="score-board"
                rollResult={this.state.rollResult}
                holdDice={this.holdDice}
                getRolledDice={this.getRolledDice}
                newGame={this.newGame}
                winingScoreInput={this.winingScoreInput}
                inputWiningScore={this.state.winingScore}
            />
            <br />
            <br />
            <PlayerSection
                playerCurrent={this.state.playerTwoCurrent}
                playerTotal={this.state.playerTwoTotal} 
                activePlayer={this.state.playerTwoActive} 
                player="Plyer Two"/>
      </main>
    )
  }
}
