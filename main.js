//get element from html
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = [];
// show new quote
 
function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //check if author is exist
    if(! quote.author){
        quoteAuthor.textContent='Unknown';
    }else{
        quoteAuthor.textContent =quote.author;
    }
    //check if text is long or not 
    if(quote.text.length > 50){
        quoteText.classList.add('long-quote');

    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent =quote.text;
   
}
// Tweet Quote
function tweetQuote(){
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(tweetUrl,'_blank')
}
//Event Liseners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
// Get quotes from Api
async function getQuotes (){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error){
         console.error();
    }
}

getQuotes();