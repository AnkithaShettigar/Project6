import './App.css';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import Home from './components/Home';
import Bollywood from './components/Bollwood';
import Technology from './components/Technology';
import Hollywood from './components/Hollywood';
import Fitness from './components/Fitness';
import Food from './components/Food';
import About from './components/About';




function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path = "/bollywood" element = {<Bollywood/>}/>
    <Route path = "/technology" element = {<Technology/>}/>
    <Route path = "/hollywood" element = {<Hollywood/>}/>
    <Route path = "/fitness" element = {<Fitness/>}/>
    <Route path = "/food" element = {<Food/>}/>
    <Route path = "/pages/about/:id"element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
