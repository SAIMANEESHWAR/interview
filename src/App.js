import logo from './logo.svg';
import './App.css';
// import Home from './components/Home';
import Login from './components/Login';
import Home2 from './Home2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        
    
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home2/>}></Route>
        
      </Routes>
    </BrowserRouter>

   
    </div>
  );
}

export default App;
