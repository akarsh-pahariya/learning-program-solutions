import logo from './logo.svg';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore Name="Steve" School={"IIPS"} Total={300} goal={3}/>
    </div>
  );
}

export default App;
