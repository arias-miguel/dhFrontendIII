import Button from 'react-bootstrap/Button';


function Rejuvenecedor(props){
    return (
        <div>
        <h2>Rejuvenecedor</h2>
        <form onSubmit={props.calcular}>
          <p>Ingrese nombre: <input className="form-control" type="text" name="nombre" /></p>
          <p>Ingrese edad : <input type="number" className="form-control" name="edad" /></p>
          <Button  variant="primary" type="submit">Calcular</Button>
        </form>
        </div>
    )
  }
  
  export default Rejuvenecedor;