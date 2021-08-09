var qoutes = [
 “In three words I can sum up everything I've learned about life: it goes on.”,
  “To live is the rarest thing in the world. Most people exist, that is all.”,
  “There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”,
  “Life is what happens to us while we are making other plans.”,
  "That's your best friend and your worst enemy - your own brain."
]


    var randomNumber = Math.floor(Math.random() * (qoutes.length));
    document.getElementById('Display').innerHTML = qoutes[randomNumber];


document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('yellowButton').onclick = switchYellow;

function switchGray() {
  document.getElementById('Display').style.color= 'gray'; 
  document.getElementById('Display').style.border= 'thick solid gray'; 
  
}

function switchWhite() {
document.getElementById('Display').style.color= 'white'; 
document.getElementById('Display').style.border= 'thick solid black'; 
 }

function switchBlue() {
  document.getElementById('Display').style.color= 'blue'; 
  document.getElementById('Display').style.border= 'thick solid blue'; 
}

function switchYellow() {
  document.getElementById('Display').style.color= 'yellow'; 
  document.getElementById('Display').style.border= 'thick solid yellow'; 
}