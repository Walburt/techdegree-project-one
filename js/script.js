// Thank you for reviewing my first project! I am aiming for an exceeds expectations grade.

// An array of quote objects: all quotes sourced from https://www.goodreads.com/quotes/tag/humor
let quotes = [
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein",
    tagged: "Science"
  },
  {
    quote: "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
    source: "Jane Austen",
    citation: "Northanger Abbey",
    year: 1818,
    tagged: "Literature"
  },
  {
    quote: "A day without sunshine is like, you know, night.",
    source: "Steve Martin",
    tagged: "Obvious"
  },
  {
    quote: "Never put off till tomorrow what may be done day after tomorrow just as well.",
    source: "Mark Twain",
    tagged: "Procrastination"
  },
  {
    quote: "I love deadlines. I love the whooshing noise they make as they go by.",
    source: "Douglas Adams",
    citation: "The Salmon of Doubt",
    year: 2002,
    tagged: "Writing"
  },
  {
    quote: "Women and cats will do as they please, and men and dogs should relax and get used to the idea.",
    source: "Robert A. Heinlein",
    tagged: "Women"
  },
  {
    quote: "All you need is love. But a little chocolate now and then doesn't hurt.",
    source: "Charles M. Schultz",
    tagged: "Chocolate"
  },
  {
    quote: "Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.",
    source: "Jim Henson"
  },
  {
    quote: 'I\'m not afraid of death; I just don\'t want to be there when it happens.',
    source: "Woody Allen",
    tagged: "Death/Life"
  },
  {
    quote: "Whenever I feel the need to exercise, I lie down until it goes away.",
    source: "Paul Terry"
  }
];

// function pulls a random quote from the array
function getRandomQuote(quoteArr) {
  let randomArrayNumber = Math.floor(Math.random()*(quoteArr.length));
  return quoteArr[randomArrayNumber];
};

 // function generates a random red, green and blue value to produce a random color value:
function randomBackgroundColor() {
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")"
  document.body.style.background =  bgColor;
};

// returns and prints random quote, changes background color first
function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let message = "";
  message += "<p class='quote'>" + randomQuote.quote + "</p>";
  message += "<p class='source'>" + randomQuote.source ;
  if (randomQuote.citation) {
    message += "<span class = 'citation'>" + randomQuote.citation + "</span>";
  }; 
  if (randomQuote.year) {
    message += "<span class='year'>" + randomQuote.year + "</span>"
  };
  // tagged class, below, has also been added to styles.css
  if (randomQuote.tagged) {
    message += "<span class = 'tagged'>" + randomQuote.tagged + "</span></p>";
  } else {
    message += "</p>";
  };
  document.getElementById('quote-box').innerHTML = message;
  randomBackgroundColor();
  return message;
};

printQuote();
setInterval(printQuote, 20000); // refreshes random quote every 20 seconds
document.getElementById('loadQuote').addEventListener("click", printQuote, false);