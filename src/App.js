 import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Bar from './Navbar';
import Home from '../src/Pages/Home';
import News from './Pages/News';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './Pages/Blogs';
import Podcasts from './Pages/Podcasts';
import Gamification from './Pages/Gamification';
import Resources from './Pages/Resources';

function App() {
  return ( 
    <div className="App">
    <Bar />
      <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/News" element={<News/>}/>
            <Route path="/Blogs" element={<Blogs/>}/>
            <Route path="/Podcasts" element={<Podcasts/>}/>
            <Route path="/Resources" element={<Resources/>}/>
            <Route path="/Gamification" element={<Gamification/>}/>
          </Routes>

        {/* <Home/>
    
        <News/> */}
      </div>
    </div>
  );
}

export default App;
