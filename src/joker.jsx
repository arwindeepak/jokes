import { useEffect, useState } from "react"

export default function Joker(){
    let[joke,setJoke]=useState({});
    const Url="https://official-joke-api.appspot.com/random_joke";
    const getNewJoke=async()=>{
       let response= await fetch(Url);
       let jsonResponse = await response.json();
              console.log(jsonResponse);
              setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline});
    };
    useEffect(()=>{
        async function getJokeFirst(){
        let response= await fetch(Url);
        let jsonResponse = await response.json();
               console.log(jsonResponse);
               setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline});
    }
    getJokeFirst();
    },[]);
    return(<>
        <h1>JOKES</h1>
        <h3>{joke.setup}</h3>
        <h3>{joke.punchline}</h3>

        <button onClick={getNewJoke}>Get NEW joke</button>
        </>
    )
}