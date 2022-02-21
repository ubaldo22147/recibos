import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Recibos from './Pages/Recibos';
import Visualizar from './Pages/Visualizar';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login />} /> 
        <Route exact path='/recibos' element={<Recibos />} />
        <Route exact path='/recibos/visualizar' element={<Visualizar />} />
      </Routes>
    </Router>
  );
}

export default App;