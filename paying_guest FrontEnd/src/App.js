import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Layout/Navbars';
import Room from './components/Room';

function App() {
  return (
    <div className="App">
      <Navbars />
      <Room />
    </div>
  );
}

export default App;
