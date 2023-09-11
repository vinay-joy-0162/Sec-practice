
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bar from './Navbar';
import Home from '../src/Pages/Home';
import News from './Pages/News';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
function App() {
  return ( 
    <div>
         <Bar />
       <Home/>
        <News/>

{/* <Router>
      <Bar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/News' component={News} />

      </Routes>
    </Router> */}
    </div>
    // <div className="App">
   
    //    {/* <div className="content"> */}
       
  
     
    //     {/* </div>
    // </div> */}
  );
}

export default App;
