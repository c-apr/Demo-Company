import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Mainpage from './components/Mainpage';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Sidebar/> 
     <Mainpage/>
    </div>
  );
}

export default App;
