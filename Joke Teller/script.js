const jokeButton = document.querySelector("#jokeBtn")
const joke = document.querySelector("#joke")
const errMsg = document.querySelector("#erroMsg")

let speech = new SpeechSynthesisUtterance();

speech.lang = "en-US";
speech.volume = 1;
speech.rate = 1;
speech.pitch = 1;                

async function getAJoke() {
    let response = await axios.get('https://v2.jokeapi.dev/joke/Programming,Spooky?type=single');
    let jokeText = response.data.joke;
    joke.innerText = jokeText
    speech.text = jokeText
    window.speechSynthesis.speak(speech);    
}

function check(){
    if(window.speechSynthesis.speaking){
        erroMsg.style.display = '-webkit-box';
    }else{
        erroMsg.style.display = 'none';
        getAJoke();
    }
}