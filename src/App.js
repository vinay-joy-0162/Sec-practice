
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bar from './Navbar';
import Home from '../src/Pages/Home';
import News from './Pages/News';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Bar /> 
       <div className="content">
        <Home/>
  
        <News/>
        </div>
    </div>
  );
}

export default App;
