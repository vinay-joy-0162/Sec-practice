
import Bar from './Navbar';
import Home from './Home';
// import AboutPage from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Bar /> 
      <div className="content">
      <Home/>
            </div>
    </div>
  );
}

export default App;
