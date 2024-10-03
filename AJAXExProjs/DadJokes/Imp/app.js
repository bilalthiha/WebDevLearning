const jokes = document.querySelector('#jokes');
const button = document.querySelector("button");

const addNewJoke = async() => {
    const jokeText = await getNewJoke();    
    const newLI = document.createElement("li");
    newLI.innerText = jokeText;
    jokes.append(newLI);    
};

const getNewJoke = async() => {
    let joke = "";
    try{
        const config = {headers: {"Accept": "application/json"}};
        const res = await fetch("https://icanhazdadjoke.com/", config);
        const jobj = await res.json();
        joke = jobj.joke;
    }
    catch(e){
        joke = "No jokes available! Sorry :("
    }
    return joke;    
};


button.addEventListener("click", addNewJoke);