import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav/Navbar'
import Home from './components/Home'

import {BrowserRouter as Router} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'
import About from './components/About'
function App() {
  return (
    <div className="App">
      <Router>
     <Navbar/>
     <Route exact path='/'> <Home/>  </Route>
     <Route exact path='/about'> <About/>  </Route>
     
     </Router>
    </div>
  );
}

export default App;
