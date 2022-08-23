// import { Button } from "react-bootstrap";

function Formturns(props){
  return(
   <form onSubmit={props.onCreateTurn}>
        <h3>Please complete the next data for take a turn</h3>
        <p>Your First Name
          <input 
          type="text" 
          name="fsName"
          required
          />
          </p>
        <p>Your last Name
          <input 
          type="text" 
          name="lsName"
          required
          />
          </p>
        <button type="submit">Take a turn</button>
   </form>
  )
}
export default Formturns;