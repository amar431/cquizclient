import Register from './components/pages/Register';
import Login from './components/pages/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import Home from './components/pages/Home';
import Quiz from './components/pages/Quiz';
import Result from './components/pages/Result';

function App() {
  return (
    <BrowserRouter >
    <Header  />
    <Routes>
    <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/quiz' element={<Quiz />} />
      <Route path="/result" element={<Result  />} />
      

    </Routes>
    </BrowserRouter>
  );
}

export default App;