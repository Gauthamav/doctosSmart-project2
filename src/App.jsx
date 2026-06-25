import { useState, useEffect } from 'react';
import './App.css';
import { PASSWORD, USERNAME } from './utils/Constants';
import Header from './components/Header';
import Patients from './components/Patients';

function App() {
  return (
    <div className="">
      <Header />
      <Patients />
    </div>
  );
}

export default App;
