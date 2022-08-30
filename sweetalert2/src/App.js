// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import Rejuvenecedor from './Rejuvenecedor';
import Swal from 'sweetalert2'
import Container from 'react-bootstrap/Container';

function App() {

 function calcular(event) {
    event.preventDefault();
    
    var name = event.target.nombre.value;
    var edad = parseInt(event.target.edad.value);

    if (!name && !edad){
      Swal.fire(
        'Información',
        'Debes ingresar tu nombre y edad',
        'warning'
      )
      return;
    } else if(name.lenght<1){
      Swal.fire(
        'Información',
        'El nombre al menos debe contener un caracter',
        'warning'
      )
      return;
    } else if(edad <=0){
      Swal.fire(
        'Información',
        'La edad debe ser mayor que cero',
        'warning'
      )
      return;
    }


    if(edad>10){
      edad = edad -10;
    } 
    Swal.fire(
      'Felicidades!!!',
      'Hola '+name+', tu edad es '+edad,
      'success'
    )
    event.target.nombre.value="";
    event.target.edad.value="";
    console.log(edad);
 }

 return (


  <Container className="p-5 mb-4 bg-light rounded-3">
    <Rejuvenecedor calcular={calcular}/>
  </Container>
 
);

}

export default App;
