import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Admin from './Pages/Admin'
import Adduser from './Pages/Adduserform';
import Adminroutes from './Adminroutes';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  return (
    // <div className='flex justify-center items-center max-h-screen bg-blue-500'>
    //   <h1 className='text-4xl text-white font-bold'>Hello tailwind css</h1>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/admin/*' element={<Adminroutes />} />
          <Route path='/add' element={<Adduser />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Home />}/>
        </Routes>

      </BrowserRouter>
      </div>
      
  );
   
  
}

export default App;
