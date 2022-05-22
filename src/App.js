import Main from "./components/Main.js"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {
  return (
    <div className="App column-c-c">
      <Main />
      <a href='https://github.com/Avishai-Peretz/Dice-Game' className='txt-28'>Github Page</a>
    </div>
  );
}

export default App;
