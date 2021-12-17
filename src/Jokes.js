export default function Jokes(props){
   return (
    <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <p style={{display: props.isPun ? "block" : "none"}}>Is pun</p>
            {props.upvotes && <p> Upvotes: {props.upvotes}</p>}
            {props.downvotes && <p> Downvotes: {props.downvotes}</p>}
            <hr />
    </div>
   )}

   //  <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>