
import './App.css';
import Home from './home/home';
import Login from './login/login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path='/' element = {<Login/>} />
          <Route  path='/home' element = {<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
