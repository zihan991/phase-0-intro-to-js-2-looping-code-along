// Code your solutions in this file
const cards = ["Lisa", "Kaitlyn", "Jan"];

const newArray = []
function writeCards(cards){
    for( let i = 0; i < cards.length; i++){
        newArray.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    }
  return newArray
}

function  countDown(integer){
    while(integer >= 0){
        console.log(integer);
        integer--;  
    }
}

countDown(4)