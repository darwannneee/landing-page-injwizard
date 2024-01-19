import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/css/Font.css'

import Home from './Pages/Home';
import Checker from './Pages/Checker';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/checker' Component={Checker}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
