import UserContext from "./context" 
import { useContext,useState } from "react"
import { Button } from "react-bootstrap"
export default function Deposit()
{
    let users=useContext(UserContext)
    let n=users.users.length
    let [bal,setBal]=useState(users.users[n-1].amount)
    let [dep,setDep]=useState(0)
    function handleSubmit(e){
        e.preventDefault()
        let deposit=Number(dep)
        setBal(bal-deposit)
    }
    users.users[n-1].amount=bal
return(
<>
<h1>CASHBACK</h1>
<form onSubmit={handleSubmit}>
    <input type="number" onChange={(e)=>setDep(e.target.value)} placeholder="AMOUNT..."></input>
    <button type="submit">SUBMIT</button>
</form>
<h2>BALANCE: {bal}</h2>

</>)
}