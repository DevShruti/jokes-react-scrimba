import Jokes from './Jokes';
import jokesData from "./jokesData"

function App() {
    const jokeElements = jokesData.map(joke =>
         <Jokes setup={joke.setup} punchline={joke.punchline} />
    )
    return (
        <div>
            {jokeElements}
        </div>
    )
}

export default App;
