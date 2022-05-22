import Main from "./components/Main.js"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {
  return (
    <div className="App">
        <Main />
    </div>
  );
}

export default App;
