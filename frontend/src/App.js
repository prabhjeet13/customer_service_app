import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { Route , Routes } from 'react-router-dom';
import RequestForm from './pages/RequestForm';
function App() {
  return (
    <div className='bg-cyan-500 mx-auto min-h-screen'>
        <Routes>
            <Route path = '/' element ={<Login/>}></Route>
            <Route path = '/request-form/:user/:email/:token' element ={<RequestForm/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
