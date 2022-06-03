import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreateCitizen from './pages/CreateCitizen';
import UpdateCitizen from './pages/UpdateCitizen';
import DrivingLiscense from './pages/DrivingLiscense';
import GetAll from './pages/GetAll';
import GetByName from './pages/GetbyName';
import GetById from './pages/GetById';
import IsCitizen from './pages/IsCitizen';
import NumberofChildren from './pages/NumberofChildren';
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
    <Routes>
        <Route path='/addCitizen' element={<CreateCitizen/>} />
        <Route path='/getByDrivingLiscense' element={<DrivingLiscense/>} />
        <Route path='/getAll' element={<GetAll/>} />
        <Route path='/getById' element={<GetById/>} />
        <Route path='/isCitizen' element={<IsCitizen/>} />
        <Route path='/getByChildren' element={<NumberofChildren/>} />
        <Route path='/updateCitizen' element={<UpdateCitizen/>} />
        <Route path='/getByName' element={<GetByName/>} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
