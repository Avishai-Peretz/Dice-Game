import React, { Component } from 'react'
import ScoreBoard from "./ScoreBoard"
import PlayerSection from "./PlayerSection.js"
import '../Assets/display.css'
import '../Assets/fonts.css'
import '../Assets/style.css'


const INITIAL_STATE = {
    gameActive: false,
    rollResult: {
        first: null,
        second: null,
        total: null
    },
    playerOneActive: false,
    playerTwoActive: false,
    playerOneTotal: null,
    playerOneCurrent: null,
    playerTwoTotal: null,
    playerTwoCurrent: null,
    totalScore: null,
    winingScore: null,
}
export default class Main extends Component {
    state = INITIAL_STATE

    winingScoreInput = (score, num) => {
        if (score instanceof String) {
            score = parseInt(score, num);
        }
        if (score > 11) {
            this.setState({
                gameActive: true,
                playerOneActive: true,
                winingScore: score
            })
        }

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
        if (this.state.playerOneActive) {
            const playerTotal = this.state.playerOneTotal + this.state.playerOneCurrent
                this.setState({
                playerOneTotal: playerTotal,
                playerOneCurrent: null,
                playerOneActive: false,
                playerTwoActive: true,
                totalScore: null,
            })
        } else if (this.state.playerTwoActive){
            const playerTotal = this.state.playerTwoTotal + this.state.playerTwoCurrent
            this.setState({
                playerTwoTotal: playerTotal,
                playerTwoCurrent: null,
                playerOneActive: true,
                playerTwoActive: false,
                totalScore: null,
            })
        }
    }

    getCurrent = (rollResult) => {
        if (this.state.playerOneActive) {
            const current = this.state.playerOneCurrent + rollResult
            this.setState({ playerOneCurrent: current })
            const total = this.state.totalScore + rollResult
            this.setState({ totalScore: total })
        } else {
            const current = this.state.playerTwoCurrent + rollResult
            this.setState({ playerTwoCurrent: current })
            const total = this.state.totalScore + rollResult
            this.setState({ totalScore: total })
        }
    }

    winner = ({ playerOneActive, playerTwoActive, playerOneTotal, playerOneCurrent, playerTwoTotal, playerTwoCurrent, winingScore }) => {
        if (playerOneActive && (playerOneCurrent + playerOneTotal) >= winingScore) {
            if ((playerOneCurrent + playerOneTotal) === winingScore) {
                this.newGame()
                return alert("Player One Win!!!")
            } else if ((playerOneCurrent + playerOneTotal) > winingScore) {
                this.newGame()
                return alert("Player Two Win!!!")
            }
        } else if (playerTwoActive && (playerTwoCurrent + playerTwoTotal) >= winingScore) {
            if ((playerTwoCurrent + playerTwoTotal) === winingScore) {
                this.newGame()
                return alert("Player Two Win!!!")
            } else {
                this.newGame()
                return alert("Player One Win!!!")
            }
        }
    }

    newGame = () => this.setState(INITIAL_STATE)

    async componentDidUpdate() {
        this.winner(this.state)
    }


    render() {
        return (
            <main className='row-c-c'>
                <PlayerSection
                    playerCurrent={this.state.playerOneCurrent}
                    playerTotal={this.state.playerOneTotal}
                    activePlayer={this.state.playerOneActive}
                    player="Plyer One" />
                <br />
                <br />
                <ScoreBoard
                    rollResult={this.state.rollResult}
                    holdDice={this.holdDice}
                    getRolledDice={this.getRolledDice}
                    newGame={this.newGame}
                    winingScoreInput={this.winingScoreInput}
                    inputWiningScore={this.state.winingScore}
                    gameActive={this.state.gameActive}
                />
                <br />
                <br />
                <PlayerSection
                    playerCurrent={this.state.playerTwoCurrent}
                    playerTotal={this.state.playerTwoTotal}
                    activePlayer={this.state.playerTwoActive}
                    player="Plyer Two" />

            </main>
        )
    }
}
