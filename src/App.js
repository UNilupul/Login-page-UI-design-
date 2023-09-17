import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import ForgotPassword from './forgot_password/forgot_password';
import Home from './home/home';
import Login from './login/login';
import Register from './register/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
