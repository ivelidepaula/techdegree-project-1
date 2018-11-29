/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

var htmlString;
var timeout;

//Array named 'quotes' with 6 different quote objects. Each one has at least a 'quote' and a 'source' property.
//Some of them also have an 'year' and 'citation' property.

var quotes = [
  {
    quote:"If you don’t actively attack the risks, the risks will actively attack you.",
    source:"Tom Gilb",
    year:1988
  },
  {
    quote:"If at first you don’t succeed, call it version 1.0.",
    source:"Unknown"
  },
  {
    quote:"You will build the future, with your hands, with your heart, with your love, with your passions, with your dreams. Together with others.",
    source:"Pope Francis",
    year:2018,
    citation:"Twitter"
  },
  {
    quote:"If life gives you lemons make some kind of fruity juice.",
    source:"Conan O'Brien"
  },
  {
    quote:"First do it, then do it right, then do it better.",
    source:"Addy Osmani"
  },
  {
    quote:"Be curious. Read widely. Try new things. I think a lot of what people call intelligence boils down to curiosity.",
    source:"Aaron Swartz"
  }
];

//This function stores a random number in a variable. It is used to find an object from a random postion.

function getRandomQuote(quotes) {
  var randomNumber = Math.floor(Math.random()* quotes.length);
  return quotes[randomNumber];
}

/***
The following function:
  - assigns the previous function to a variable
  - assigns the first random quote to a variable
  - use a if conditional to check if the object has a 'citation' property and a 'year' property
***/

function printQuote() {
  var randomQuote = getRandomQuote(quotes);
  //The next variable stores the first paragraph with the random quote.
  var htmlString = '';
  htmlString += '<p class="quote">' + randomQuote.quote + '</p>';
  //The second paragraph has the source, citation and year properties. The 'if' conditional add those properties to the paragraph.
  htmlString += '<p class="source">' + randomQuote.source;
  if ('citation' in randomQuote) {
    htmlString += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if ('year' in randomQuote) {
    htmlString += '<span class="year">' + randomQuote.year + '</span>';
  }
  htmlString += '</p>';

  //This calls a function that changes the background color.
  changeColor();

  //This prints the quote to the page
  document.getElementById('quote-box').innerHTML = htmlString;

  //This calls a function that changes the quote after 30 seconds
  timeout = setTimeout(printQuote, 30000);
}

function changeColor(){
  var hexArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  var hexCode = '#';
  var randomValue;

  for (var i = 0; i < 6; i += 1) {
    randomValue = getRandomQuote(hexArray);
    hexCode += randomValue;
  }

  document.body.style.backgroundColor = hexCode;
}

printQuote();

function resetTimeout(){
  clearTimeout(timeout);
}


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function.
***/

document.getElementById('loadQuote').addEventListener("click", function(){
  resetTimeout();
  printQuote();
}, false);
