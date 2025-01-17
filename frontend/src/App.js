import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { Route , Routes } from 'react-router-dom';

function App() {
  return (
    <div className='w-11/12  bg-slate-300 mx-auto'>
        <Routes>
            <Route path = '/' element ={<Login/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
