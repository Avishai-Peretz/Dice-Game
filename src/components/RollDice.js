import React,{ Component } from 'react'
import '../Assets/RollDice.css'
import {Die, rollDie} from './Die'
  
class RollDice extends Component{
  
  static defaultProps = {
    sides : ['one', 'two', 'three', 
             'four', 'five', 'six']
  }
  constructor(props){
    super(props);
    this.state = {
      die1 : 'one',
      die2 : 'one',
      rolling: false
    }
    this.roll = this.roll.bind(this)
  }
  
  roll(){
    const { sides } = this.props
    const die1 = rollDie(sides.length) + 1;
    const die2 = rollDie(sides.length) + 1;
    this.setState({
      
      die1 : sides[ die1 - 1 ],
      die2 : sides[ die2 - 1 ],
      rolling:true
    })
  
    setTimeout(() => {
      this.setState({rolling:false}, this.props.getRolledDice((die1 + die2), die1, die2))
    },1000)
  }
  
  render(){
    const handleBtn = this.state.rolling ? 
                      'RollDice-rolling' : ''
    const {die1, die2, rolling} = this.state
    return(
      <div className='RollDice column-c-se'>
        <div className='RollDice-container'>
          <Die face={die1} rolling={rolling}/>
          <Die face={die2} rolling={rolling}/>
        </div>
        <button className={handleBtn}
                disabled={this.state.rolling} 
                onClick={this.roll}>
          {this.state.rolling ? 'Rolling' : 'Roll Dice!'}
        </button>
      </div>
    )
  }
}
  
export default RollDice