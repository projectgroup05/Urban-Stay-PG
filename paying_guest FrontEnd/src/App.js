import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Layout/Navbars';
import Building from './components/Building';
import BootstrapForm from './components/BootstrapForm';
import Address from './components/Address';

function App() {
  return (
    <div className="App">
      <Navbars />
      <Building />
    </div>
  );
}

export default App;
