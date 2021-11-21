// First we added files index.html, style.css, main.js and picture skyline...jpg.
// Next we wrote index.html, then style.css using google fonts and media queries.
// ==============

// VERSION 1.0: ES5, CONSTRUCTOR FUNCTION & PROTOTYPE METHODS
// ==========================================================
// 1. Build constructor function, and provide for a prototype method type()
// 2. Event Listener to call function init on dom load
// 3. Create function init - will cause errors.
// 4. Create the type method on the prototype



// // 1. Constructor function:
// const Typewriter = function(txtElement, words, wait=3000) {
//     // txtElement is the var assigned to class txt-type; words ditto for data-words attr; wait for data-wait attr and assigned a default value

//     // assign properties
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = "" ;    
//         // provision for whatever series of chars are within our <span> element
//     this.wordIndex = 0;
//         // the index of word in data-words
//     this.wait = parseInt(wait, 10);
//         // just to make sure this is an integer
//     this.type();
//         // main method being called
//     this.isDeleting = false;
//         // a boolean flag to represent the state
// }

// //  Type method - to come.
// // 4. Create the type method on the prototype
// // ===============================================
// // Typewriter.prototype.type = function() {

// //     setTimeout(()=>this.type(), 500);
// //     // This is the last part of our function, but we're writing it first because it's easier to figure out.
// //     // We want to call the method type() every 1/2 second. 
// //     // If we now add 
// //     // console.log('Hello World');
// //     // can see it runs and outputs every 500ms.
// // }

// Typewriter.prototype.type = function() {
//     // get current index of the word
//     const current = this.wordIndex % this.words.length;
//         // tricksy: our words length is 3; 0 % 3 is 0; 1 % 3 is 1; when 3 % 3, resets back to 0, so it runs through each element in the array.
//     // console.log(current);

//     // get full text of current word
//     const fullTxt = this.words[current];
//     // console.log(fullTxt); 
//         // now it works: was only returning "["! went back to init(), see notes, had a fiddle, now outputs Developer every 1/2 sec
    
//     // Check to see if we're deleting this word or not:
//     if (this.isDeleting) {
//         // remove a character
//         this.txt = fullTxt.substring(0,this.txt.length-1);
//     } else {
//         // add a character
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }
//     // console.log(this.txt);
//         // On first test, it will "build" Developer one letter at a time; later we're going to reset the flag .isDeleting and it should "shrink" one letter at a time.

//     // Insert this.txt to INSIDE the span element in DOM
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
//         // we've added a span to inside the span containing data-words etc, and given it a class "txt" so we can use this in CSS to create the cursor effect.
//         // if we run it now, will "type out" first word only; need to do more to make it then delete and go to next word

//     // Set typespeed, depending on if typing or deleting:
//     // Initial type speed:
//     let typeSpeed = 300;
//     if (this.isDeleting) {
//         typeSpeed/=2;
//             // i.e. will operate at twice speed, 150ms each turn, while deleting than "typing"
//     }

//     // Check to see if word is complete
//     if (!this.isDeleting && this.txt===fullTxt) {
//         // if not deleting, and have reached end of word (fullTxt)
//         typeSpeed = this.wait;
//             // pauses at end of word
//         this.isDeleting = true;
//             // sets flag to say state is delete now
//     } else if (this.isDeleting && this.txt==="") {
//         // if deleting is true and have removed all letters from this.txt to empty string
//         this.isDeleting = false;
//         // Move to next word
//         this.wordIndex++;
//         // Pause before typing next word:
//         typeSpeed = 500;
//     }

//     // setTimeout(()=>this.type(), 500);
//     // // see above commented out

//     // Remove hardcoded 500 from setTimeout and replace with var typeSpeed:
//     setTimeout(()=>this.type(), typeSpeed);
// }
//     // That's working nicely, just need to go to CSS and create the cursor effect by adding a border-right to our span class txt within span class txt-type

// //  2. Event Listener to call init function on dom load:
// document.addEventListener("DOMContentLoaded", init);

// //  3. Create init function
// function init() {
//     // assign vars
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute("data-words"));
//     const wait = txtElement.getAttribute('data-wait');
//         // so we've assigned the class txt-type to var txtElement; 
//         // then we assign the data attr data-words, which are a string, which we must parse to assign it to var words as an array; 
//             // i wish there was a red type for this: this gave an error when txtElement.getAttribute('data-words') was passed thru JSON.parse(), so i took it out, we'll see what happens (stackoverflow suggested it might not need parsing)
//             // there is a problem: not sure what, redid this and redid html, now it works. A mystery. Pretty sure it was exactly the same as before, but maybe not.
//         // then we assign the attribute 'data-wait', which is also a string, to var wait, but this is converted to an integer in the constructor Typewriter. We could have used the same JSON.parse and skipped that step? in the constructor function.
    
//     // create a new instance object of the constructor Typewriter and pass in these vars
//     new Typewriter(txtElement, words, wait);
// } 
//     // First we got the error for JSON.parse() and dealt with that;
//     // Now we're getting an error: this.type is not a function; because we haven't created it yet, only asserted its existence in the constructor.

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
        // assign properties - same as for v1.0 constructor:
        this.txtElement = txtElement;
        this.words = words;
        this.txt = "" ;    
            // provision for whatever series of chars are within our <span> element
        this.wordIndex = 0;
            // the index of word in data-words
        this.wait = parseInt(wait, 10);
            // just to make sure this is an integer
        this.type();
            // main method being called
        this.isDeleting = false;
            // a boolean flag to represent the state
    }

    // 2. add method type() within class;
    type() {
        // get current index of the word
        const current = this.wordIndex % this.words.length;

        // get full text of current word
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
            // we've added a span to inside the span containing data-words etc, and given it a class "txt" so we can use this in CSS to create the cursor effect.
            // if we run it now, will "type out" first word only; need to do more to make it then delete and go to next word

        // Set typespeed, depending on if typing or deleting:
        // Initial type speed:
        let typeSpeed = 300;
        if (this.isDeleting) {
            typeSpeed/=2;
        }

        // Check to see if word is complete
        if (!this.isDeleting && this.txt===fullTxt) {
            // if not deleting, and have reached end of word (fullTxt)
            typeSpeed = this.wait;
                // pauses at end of word
            this.isDeleting = true;
                // sets flag to say state is delete now
        } else if (this.isDeleting && this.txt==="") {
            // if deleting is true and have removed all letters from this.txt to empty string
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before typing next word:
            typeSpeed = 500;
        }

        // setTimeout(()=>this.type(), 500);
        // // see above commented out

        // Remove hardcoded 500 from setTimeout and replace with var typeSpeed:
        setTimeout(()=>this.type(), typeSpeed);
    }
    // That's working nicely, just need to go to CSS and create the cursor effect by adding a border-right to our span class txt within span class txt-type


} // end class Typewriter

//  2. Event Listener to call init function on dom load:
document.addEventListener("DOMContentLoaded", init);

//  3. Create init function
function init() {
    // assign vars
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute('data-wait');
        // so we've assigned the class txt-type to var txtElement; 
       // then we assign the data attr data-words, which are a string, which we must parse to assign it to var words as an array; 

//     // create a new instance object of the constructor Typewriter and pass in these vars
    new Typewriter(txtElement, words, wait);

}   // end init()
     
