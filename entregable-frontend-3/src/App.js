// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import data from "./components/data.json"

function App() {
 const [shoppingCart,setShoppingCart]= useState(0);
 const [products, setProducts] = useState(data)
 
 function sumCart(event){
    event.preventDefault();
    const id= event.target.name;
    setShoppingCart(shoppingCart+1);
    const updatedOSArray = products.map(p =>
      p.id === id
        ? { ...p, stock: p.stock-1 }
        : p
    );
    setProducts(updatedOSArray)
    // products.lessStock.stock = products.lessStock.stock-1;
    
 }

  return (
    <div className="App">
      <Cabecera shoppingCount={shoppingCart}/>
      <Listado products={products} sumCart={sumCart}/>
    </div>
  );
}

export default App;
