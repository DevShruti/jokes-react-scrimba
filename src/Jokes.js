import {useState} from "react"

export default function Jokes(props){
const[isShown, setIsShown] = useState(false)
function toggle(){
       setIsShown ( prevState => !prevState)}

   return (
    <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {isShown && <p>Punchline: {props.punchline}</p>}
            <p style={{display: props.isPun ? "block" : "none"}}>Is pun</p>
            {props.upvotes && <p> Upvotes: {props.upvotes}</p>}
            {props.downvotes && <p> Downvotes: {props.downvotes}</p>}
            <button onClick={toggle}>Show Punchline!</button>
            <hr />
    </div>
   )}

   //  <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>