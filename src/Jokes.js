export default function Jokes(props){
   return (
    <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
   )}

   //  <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>