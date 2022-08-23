import React, { useState } from 'react';
import './App.css';
import Patients from './components/Patients';
import Formturns from './components/Formturns';


function App() {
   
  const [patients, SetPatients]= useState([])
  const [countTurn, SetCountTurn]= useState(1)

  function createTurn(event){
     event.preventDefault();
     const fsName = event.target.fsName.value;
     const lsName = event.target.lsName.value;
     SetCountTurn(countTurn+1);
     const turn = countTurn;
     const patientsdb = {
      id: turn,
      firstName: fsName,
      lastName: lsName
     }
     
     SetPatients([patientsdb, ...patients])
     event.target.fsName.value="";
     event.target.lsName.value="";


  }
  return (
    <div className="App">
      <h1>hello</h1>
      <Formturns onCreateTurn={createTurn}/>
      <Patients Patients={patients}/>
    </div>
  );
}
export default App;
