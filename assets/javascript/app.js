
// Use to make a function available after the document is ready
$(document).ready(function(){

// Global variables


// game questions and answers. Check if is better to have the questions before the start game fn or inside the wrapper.
var myQuestions = [
    {
        question: 'where is mount everest located at?',
        answers: {
            a: 'canada',
            b: 'nepal',
            c: 'china',
        },
        correctAnswer: 'b'
    },

    {
        question: 'moscow is the capital of what country?',
        answers: {
            a: 'russia',
            b: 'venezuela',
            c: 'germany',
        },
        correctAnswer: 'a'
    
    
    },

    {
        question: 'berlin is the capital of what country?',
        answers: {
            a: 'germany',
            b: 'france',
            c: 'italy',
        },
        correctAnswer: 'a'
    
    
    },

    {
        question: 'madrid is the capital of what country?',
        answers: {
            a: 'portugal',
            b: 'spain',
            c: 'england',
        },
        correctAnswer: 'b'
    
    
    },

    {
        question: 'rome is the capital of what country?',
        answers: {
            a: 'russia',
            b: 'japan',
            c: 'italy',
        },
        correctAnswer: 'c'
    
    
    },
    



];


// start funtion when the button is click
$('start-game').on('click', function(){

// will show the wrapper with the time and questions for the user
 $('.wrapper').show();

})

 











});