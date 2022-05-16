/******************************************
 * Akiko Koyama 
 * 05-16-2022
 * Random Quote Lab
*****************************************/

/*** 
 * `Five Quotes on Parenting
***/
const arrOne={
    quote:"To be in your children’s memories tomorrow, you have to be in their lives today.",
    author:"Barbara Johnson",
    citation:"Splashes Of Joy In The Cesspools Of Life",
    year:"1992",
};

const arrTwo={
    quote:"As a mom, you have to look at how much time you’re spending with your kids. There is nothing you will regret more in life than not being present with your children.",
    author:"Jamie Lee Curtis",
};
const arrThree={
    quote:"Parents are the ultimate role model for children. Every word, movement and action has an affect. No other person or outside force has a greater influence on a child than a parent.",
    author:"Bob Keeshan",
};
const arrFour={
    quote:"If you want your children to turn out well, spend twice as much time with them and half as much money.",
    author:"Abigal Van Buren",
};
const arrFive={
    quote:"What it’s like to be a parent: It’s one of the hardest things you’ll ever do, but in exchange it teaches you the meaning of unconditional love.",
    author:"Nicholas Sparksi",
    citation:"The Wdding",
    year:"2005",
};

//quotes Array containting the five quotes
const quotesArr=[arrOne, arrTwo, arrThree, arrFour, arrFive];



/***
 * `getRandomQuote` function
***/
let lastRandom=0; //setting the initial index to 0. 

//function returns a random number. if same number is repeated, function is re-run
function getRandomNumber(){
    i=Math.floor((Math.random()*5));
    console.log(i);
    if(i!=lastRandom){
        lastRandom=i;
    }
    else{
        getRandomNumber();
    }
    return lastRandom;
}

//function to get quotes randomly using the getRandomNumber function above
function getRandomQuote (objArray) {
    let i= getRandomNumber();
     return objArray[i];
    
};

console.log(getRandomQuote(quotesArr));


/***
 * `printQuote` function -- random quote is displayed 
***/
function printQuote (){ 
    let object =getRandomQuote(quotesArr);
    let phrase=object.quote;
    let who=object.author;
    let where=object.citation;
    let when=object.year;
    
    let newHtml=`<div><p class="quote">${phrase}</p>
                <p class="source">${who}<span class="citation">${where}</span><span class="year">${when}</span></p></div>`;
    let anotherHtml=`<div><p class="quote">${phrase}</p>
                <p class="source">${who}</p></div>`;
   if(Object.hasOwn(object, "citation")){
    document.querySelector(".container").innerHTML=newHtml;
   }
   else{
    document.querySelector(".container").innerHTML=anotherHtml;
   }
};

//setting the initial display when browser is launched
document.querySelector(".quote-box").remove();  // removing default quote
let initialHtml=`<div><p class="quote">${arrOne.quote}</p>
<p class="source">${arrOne.author}<span class="citation">${arrOne.citation}</span><span class="year">${arrOne.year}</span></p></div>`;
document.querySelector(".container").innerHTML=initialHtml; //adding the initial quote from the array. 

/***
 * click event listener for the print quote button - different random quote is displayed when button is clicked. 
***/
document.getElementById('load-quote').addEventListener("click", printQuote);