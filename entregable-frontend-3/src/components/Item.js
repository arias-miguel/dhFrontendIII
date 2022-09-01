
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
    let cant = stock
    
  
  return (
    <form key={id} name={id} onSubmit={props.sumCart} className='producto'>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <h5>En stock :
        { cant===0? <span>"agotado"</span>: <p>{cant}</p>  
        }
      </h5>
      <button type="submit">COMPRAR</button>
    </form>
  )
}
