
const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

//airportAudio.play();
const playBUtton = document.querySelector("#play-button");
console.log(playBUtton);

playBUtton.addEventListener("click",playBUtton);

function playAirportAudio(){
    airportAudio.play();
}
