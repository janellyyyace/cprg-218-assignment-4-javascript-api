//Random Joke Loaded

fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    RandomJoke.textContent = data.joke || data.setup +" ... "+ data.delivery;
});

//Programming

document.getElementById('programming').addEventListener('click', () => {
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('RandomJoke').textContent = data.joke || data.setup +" ... "+ data.delivery;
    })

    document.getElementById('PageTitle').textContent = "A Programming Joke!"; 
})

//Misc

document.getElementById('misc').addEventListener('click', () => {
    fetch('https://v2.jokeapi.dev/joke/Misc?safe-mode')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('RandomJoke').textContent = data.joke || data.setup +" ... "+ data.delivery;
    })

    document.getElementById('PageTitle').textContent = "A Random Joke!"; 
})

//Pun

document.getElementById('pun').addEventListener('click', () => {
    fetch('https://v2.jokeapi.dev/joke/Pun?safe-mode')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('RandomJoke').textContent = data.joke || data.setup +" ... "+ data.delivery;
    })

    document.getElementById('PageTitle').textContent = "A New Pun!"; 
})

//Spooky

document.getElementById('spooky').addEventListener('click', () => {
    fetch('https://v2.jokeapi.dev/joke/Spooky?safe-mode')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('RandomJoke').textContent = data.joke || data.setup +" ... "+ data.delivery;
    })

    document.getElementById('PageTitle').textContent = "A Sppoky Joke!"; 
})
