
// Use to make a function available after the document is ready
$(document).ready(function () {

    // Global variables
    var userPick = 0;
    var message = '';
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unAnswered = 0;
    var count = 45 // this varible could be store here or in the 

    // timer example to structure my timer that while be decresing the count variable by a second

    // timer evet
    var timer = setTimeout(stuffToDo, 1000);
    clearTimeout(timer);
    var count = 45;  // this is the time in seconds that will decrease 

    // funtion that actually gets called

    function stuffToDo() {
        count--;
    }

    let interval = setInterval(stuffToDo, 1000);
    clearInterval(interval);




    // game questions and answers. Check if is better to have the questions before the start game fn or inside the wrapper.
    var myQuestions = [
        {
            question: 'where is mount everest located at?',
            answers: {    // change this to an array so that i could use the index
                a: 'canada',
                b: 'nepal',
                c: 'china',
            },
            correctAnswer: this.answers[1], // This way may be better because it prevents errors
        },

        {
            question: 'moscow is the capital of what country?',
            answers: ['russia', 'venezuela', 'germany'],
            correctAnswer: this.answers[0],
        },

        {
            question: 'berlin is the capital of what country?',
            answers: ['germany', 'france', 'italy'],
            correctAnswer: this.answers[0],
        },

        {
            question: 'madrid is the capital of what country?',
            answers: ['portugal', 'spain', 'england'],
            correctAnswer: this.answers[1],
        },

        {
            question: 'rome is the capital of what country?',
            answers: ['russia', 'japan', 'italy'],
            correctAnswer: this.answers[2],
        },
    ];


    // start funtion when the button is click phase 1
    $('#start-now').on('click', function () {
        $(this).hide();


    });

    // phase 2  showing the questions and answer with the time counter in seconds running
    function showQuestions() {
        $('#questions-container').html(myQuestions[0].question);
        question++;
        myAnswers();

    }

    // This funtion is to create new div button for the html to display the answers 
    function myAnswers() {
        var answersArr = myQuestions[0].answers;

        for (var i = 0; i < answersArr.length; i++) {
            var button = $('<button>');
            button.text(answersArr[i]);
            button.attr('data-value', i);
            $('#answer-container');
        }
        console.log(myAnswers);
    }

},

