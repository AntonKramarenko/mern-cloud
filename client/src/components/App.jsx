import Navbar from "./navbar/Navbar";
import './app.scss'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../actions/user";
import Disk from "./disk/Disk";


function App() {

  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
   // eslint-disable-next-line
}, [])
     


  return (
    <BrowserRouter>
     <div className="app">
      <Navbar/>
      <div className="wrap">
        {!isAuth ?
            <Routes>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={ <Navigate to="/login" /> } />
            </Routes>
            : <Routes>
                <Route exact path="/" element={<Disk/>}/>
                <Route path="*" element={<Navigate replace to="/" />} />
              </Routes>
        }
      </div>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
