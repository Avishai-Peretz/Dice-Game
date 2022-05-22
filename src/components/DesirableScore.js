import React, { Component } from 'react'

export default class DsirableScore extends Component {
  state = { inputValue: "" }


  render() {
    return (
      <form className="column-c-c ">
        <input
          className="input"
          type="number"
          placeholder="Wining Score"
          value={this.state.inputValue}
          onChange={(e) => {
            this.setState({ inputValue: e.target.value })
          }}
        />
        <button
          data-invisible={this.props.gameActive}
          className='btn'
          onClick={(e) => {
            e.preventDefault()
            const { inputValue } = this.state
            this.props.winingScoreInput(inputValue)
          }
          }>Submit</button>
      </form>
    )
  }
}
