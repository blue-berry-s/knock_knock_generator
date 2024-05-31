//Creating Joke Class for easier storage
class Joke{
    setup;
    punchline;

    constructor(setup, punchline){
        this.setup = setup;
        this.punchline = punchline;
    }
}


//Array for all of the jokes
const Jokes = [new Joke("Tank", "You’re welcome"), new Joke("Luke", "Luke through the peep hole and find out."), new Joke("Cow says", "No, a cow says mooooo!"), new Joke("Who", "I didn’t know you were an owl!"), new Joke("Annie", "Annie way you can let me in?"), new Joke("Waddle", "Waddle it take to get you to open the door?")]

//Geting elements from web page
const joke_bttn = document.getElementById("generate_bttn");
const who_text = document.getElementById("who");
const setup_text = document.getElementById("setup");
const setup_who = document.getElementById("setup_who");
const punchline_text = document.getElementById("punchline");

joke_bttn.addEventListener("click", generateJoke);

const texts = document.querySelectorAll('.left_text, .right_text' );

let canPress = true;


function generateJoke(){
    //prevents user from spanning the button - due to limitations of setTimeOut used for waiting 
    //If pressed multiple time, creates unpredictable visual effects
    if (canPress){
        
        //Make sure all text are refreshed to not visble
        for(var i = 0; i < texts.length; i ++){
            texts[i].classList.add("not_visible");
        }

        //Get a random joke
        const ran = Math.floor(Math.random() * Jokes.length);
        const ran_joke = Jokes[ran];

        //Change the text
        setup_text.innerText = ran_joke.setup;
        setup_who.innerText = ran_joke.setup + " who?";
        punchline_text.innerText = ran_joke.punchline;
        
        canPress = false;
        joke_bttn.classList.add("not_active");
        showJokes();
        
    }
}

//Function to showcase the joke using the setTimeOut
function showJokes(){
    if (!canPress){

        //By switching from different CSS classes, we can take advantage of different CSS style and the transition property to "animate" the text
        setTimeout(function(){
            who_text.classList.remove("not_visible");
            who_text.classList.add('visible');
        }, 1000)
    
        setTimeout(function(){
            setup_text.classList.remove("not_visible");
            setup_text.classList.add('visible');
        }, 2500)
    
        setTimeout(function(){
            setup_who.classList.remove("not_visible");
            setup_who.classList.add('visible');
        }, 4000)
    
        setTimeout(function(){
            punchline_text.classList.remove("not_visible");
            punchline_text.classList.add('visible');
            canPress = true;
            joke_bttn.classList.remove("not_active");
        }, 5500)
    }

}



