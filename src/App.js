import logo from './logo.svg';
import './App.css';
import InfoEntry from './components/InfoEntry';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
        
          <InfoEntry/>
        
      </header>
    </div>
  );
}

export default App;
