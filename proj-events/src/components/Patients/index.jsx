function Patients(props){
return(
    <div>
        
        {props.Patients.map((elemt,index) =>
        <li key={index}>{elemt.firstName} {elemt.lastName} your tour is {elemt.id}</li>
        
        )}    
    </div>
)
}
export default Patients;