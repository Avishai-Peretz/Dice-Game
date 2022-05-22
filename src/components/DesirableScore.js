import React, { Component } from 'react'

export default class DsirableScore extends Component {
  state = { inputValue: "" }
  

  render() {
    return (
      <form  className="column-c-c ">
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
          id="Submit"
          className='btn'
          onClick={(e) => {
          e.preventDefault()
          this.props.winingScoreInput(parseInt(this.state.inputValue, 10))
          } 
        }>Submit</button>
      </form>
    )
  }
}
