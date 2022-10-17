import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
function App() {  
  return (
      <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Registration/>}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/dashboard' element={< Dashboard />}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
