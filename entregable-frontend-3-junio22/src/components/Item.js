
// El componente Item no tiene componentes hijos.

// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item(props) {
    const {id,producto,stock }= props.products
//     id: "2"
// producto:
// descripcion: "Las zapatillas Puma Shuffle ADP están confeccionadas en materiales sintéticos. De caña baja, con ajuste personalizado gracias al sistema de cordones, sus perforaciones le dan un estilo urbano que se fusiona con la inserción del logo PUMA N°1 y PUMA N°2 para que camines la calle de la ciudad con un calzado sofisticado."
// nombre: "Zapatillas Puma Shuffle"

  return (
    <div key={id} className='producto'>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <h5>En stock :<span>{stock}</span></h5>
      <button>COMPRAR</button>
    </div>
  )
}
