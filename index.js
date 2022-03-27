
const cardsName = ["Guadalupe", "Ollie", "Aki"];
const cards = [];

function writeCards() {
  let i = 0; 
  while (i < cardsName.length) {
    console.log(cards.push(`Thank you, ${cardsName[i]}, for the wonderful surprise gift!`));
    i++;
  }

  return cards;
}

function countDown(count) {
    let i = 10;
    while ( i >= 0 ) {
      console.log(i--)
    }
    return i;
  }
  countDown(10)