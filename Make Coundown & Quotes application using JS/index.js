const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "If you want to achieve greatness, stop asking for permission. - Unknown",
]

const quote = document.querySelector('#quote')

function showQuote(){
   setInterval(()=>{
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quote.innerText = randomQuote;
   },2000)
}

showQuote()

window.onload = () =>{
    document.querySelector('#start').onclick = start;
}

function start()
{
    const time = 61;

    const stop = document.querySelector('#stop')
    
    const endTime = new Date(Date.now() + time * 1000);

    const interval = setInterval(() => calculateTime(endTime), 1000);

    stop.addEventListener('click', () => {
        clearInterval(interval);
    })
}

function calculateTime(endTime){
    const currentTime = new Date


    const seconds = document.querySelector('#countdown-seconds')

    if (endTime > currentTime){
        const timeLeft = (endTime - currentTime) / 1000;

        console.log(timeLeft)
    
 
        seconds.innerText = Math.floor(timeLeft % 60)
    } else{
    
        seconds.innerText = 0
    }
}

function reset(){
 
    document.querySelector('#countdown-seconds').innerText = 0;

    quote.innerText = "Quote of the day:"
}



document.querySelector('#reset').onclick = reset;

document.querySelector('#start').onclick = start;