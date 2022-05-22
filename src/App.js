import Main from "./components/Main.js"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
document.querySelector('title').innerText = "Dice Game"
function App() {
  return (
    <div className="App column-c-c">
      <div className="header txt-40 bold">Dice Game</div>
      <Main />
      <a href='https://github.com/Avishai-Peretz/Dice-Game' className='txt-28'>Github Page</a>
    </div>
  );
}

export default App;
