//Random Joke Loaded

fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    RandomJoke.textContent = data.joke || data.setup +" ... "+ data.delivery;
});
