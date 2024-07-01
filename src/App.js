import './App.css';
import RulesModal from "./components/RulesModal"
import RPS from "./components/RPS"


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <RPS/>
      </header>
      <RulesModal/>
    </div>
  );
}

export default App;
