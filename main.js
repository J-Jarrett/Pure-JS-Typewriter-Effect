// CLEAN COPY OF MAIN.JS
// ===================  
// First we added files index.html, style.css, main.js and picture skyline...jpg.
// Next we wrote index.hmtl, then style.css using google fonts and media queries.
// ==============

// VERSION 1.0: ES5, CONSTRUCTOR FUNCTION & PROTOTYPE METHODS
// ==========================================================

//  // Constructor function:
// const Typewriter = function(txtElement, words, wait=3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = "" ;    
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// //  Create the type method on the prototype
// Typewriter.prototype.type = function() {
//     setTimeout(()=>this.type(), 500);
// }

// Typewriter.prototype.type = function() {
//     // get current index of the word
//     const current = this.wordIndex % this.words.length;
//     // console.log(current);

//     // get full text of current word
//     const fullTxt = this.words[current];
//     // console.log(fullTxt); 
    
//     // Check to see if we're deleting this word or not:
//     if (this.isDeleting) {
//         // remove a character
//         this.txt = fullTxt.substring(0,this.txt.length-1);
//     } else {
//         // add a character
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }
//     // console.log(this.txt);

//     // Insert this.txt to INSIDE the span element in DOM
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//     // Set typespeed, depending on if typing or deleting:
//     // Initial type speed:
//     let typeSpeed = 300;
//     if (this.isDeleting) {
//         typeSpeed/=2;
//     }

//     // Check to see if word is complete
//     if (!this.isDeleting && this.txt===fullTxt) {
//         typeSpeed = this.wait;
//         this.isDeleting = true;
//     } else if (this.isDeleting && this.txt==="") {
//         this.isDeleting = false;
//         this.wordIndex++;
//         typeSpeed = 500;
//     }

//     setTimeout(()=>this.type(), typeSpeed);
// }

// //  2. Event Listener to call init function on dom load:
// document.addEventListener("DOMContentLoaded", init);

// //  3. Create init function
// function init() {
//     // assign vars
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute("data-words"));
//     const wait = txtElement.getAttribute('data-wait');
    
//     // create a new instance object of the constructor Typewriter and pass in these vars
//     new Typewriter(txtElement, words, wait);
// } 

// // 4. Create the type method on the prototype

// ==========================================================
// now we comment out all of this and rewrite it as Class method
// ==========================================================


// VERSION 2.0: ES6, CLASS METHOD

// 1. Write a class Typewriter;
// 2. add method type() within class;
// 3. add Event Listener for page loading;
// 4. create init() to assign vars from Dom and initialize a new Typewriter object

// 1. Write a class Typewriter;
class Typewriter {
    constructor (txtElement, words, wait=3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = "" ;    
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    // 2. add method type() within class;
    type() {
        const current = this.wordIndex % this.words.length;

        const fullTxt = this.words[current];
        
        // Check to see if we're deleting this word or not:
        if (this.isDeleting) {
            // remove a character
            this.txt = fullTxt.substring(0,this.txt.length-1);
        } else {
            // add a character
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        
        // Insert this.txt to INSIDE the span element in DOM
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Set typespeed, depending on if typing or deleting:
        // Initial type speed:
        let typeSpeed = 300;
        if (this.isDeleting) {
            typeSpeed/=2;
        }

        // Check to see if word is complete
        if (!this.isDeleting && this.txt===fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt==="") {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(()=>this.type(), typeSpeed);
    }

} // end class Typewriter

//  2. Event Listener to call init function on dom load:
document.addEventListener("DOMContentLoaded", init);

//  3. Create init function
function init() {
    // assign vars
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute('data-wait');

    // create a new instance object of the constructor Typewriter and pass in these vars
    new Typewriter(txtElement, words, wait);

}   // end init()
     
