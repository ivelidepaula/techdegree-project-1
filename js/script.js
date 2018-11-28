/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/***
Created an array named 'quotes' with 6 different quote objects. Each one has at least a 'quote' and a 'source' property.
One has an 'year' property and another has 'year' and 'citation' property.
***/


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
    quote:"If Life gives you lemons make some kind of fruity juice.",
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

//This function finds a random number that is used to find an object from a random postion.

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
  var htmlString = '<p class="quote">' + 'randomQuote[0]' + '</p>';
  //The second paragraph has the source, citation and year properties. The 'if' conditional add those properties to the paragraph.
  if ('citation' in randomQuote || 'year' in randomQuote) {
    htmlString += '<p class="source">' + randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span><span class="year">' + randomQuote.year + '</span></p>';
  } else if ('citation' in randomQuote){
    htmlString += '<p class="source">' + randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span></p>';
  } else if ('year' in randomQuote) {
    htmlString += '<p class="source">' + randomQuote.source + '<span class="year">' + randomQuote.year + '</span></p>';
  } else {
    '<p class="source">' + randomQuote.source + '</p>';
  }

  document.getElementById('quote-box').innerHTML = htmlString;
}

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
