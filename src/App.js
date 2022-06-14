import './App.scss';
import data from './data/current-loans.json'
import Loans from './components/loans/Loans.jsx'

function App() {
  const {loans} = data
  
  return (
    <div className="App">
     <Loans data={loans} />
    </div>
  );
}

export default App;
