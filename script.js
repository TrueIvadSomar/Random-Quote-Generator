
const RANDOMQUOTESARRAY = [
 {
    quote : "Bata em um mudo. O que ele vai fazer? Contar pros pais dele?" ,
    author: "Mario Ayala"
 },

 {
    quote : "Mulher fácil é que nem moeda: Ou é cara ou é coroa." ,
    author: "Mario Ayala"
 },

 {
    quote : "Nunca aceite doces de estranhos: A não ser que seja muito gostoso ( O doce ou o estranho :P )." ,
    author: "Mario Ayala"
 },

 {
    quote : "Opinião é que nem cu. Quando você dá, a pessoa já mete o pau." ,
    author: "Mario Ayala"
 },

 {
    quote : "Só tem AIDS quem faz exame." ,
    author: "Mario Ayala"
 },

 {
   quote : "A vantagem de namorar uma mendiga é que na hora de levar ela pra casa, você pode deixá-la em qualquer lugar." ,
   author: "Mario Ayala"
},

{
   quote : "Nunca fale a palavra \"senpai\" dentro de um orfanato.",
   author: "Mario Ayala"
},



 

]



window.onload= initialized;
function initialized()
{
 generateQuote();
} 

function generateQuote()
{
    let quoteSize = RANDOMQUOTESARRAY.length;
    let randomizer = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = RANDOMQUOTESARRAY[randomizer];

   let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
    let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
    twitterLink += quoteInApiFormat;


    let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
    twitterLink += " - " + authorInApiFormat;



  
 

    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("text").innerText = randomQuoteData.quote;
    document.getElementById("author").innerText = randomQuoteData.author;
}