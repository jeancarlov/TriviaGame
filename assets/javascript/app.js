
// Use to make a function to display the html document before the javascript 
$(document).ready(function () {

    // Global variables
    var userPick = 0;
    var message = '';
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unAnswered = 0;
    var count = 45 


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

    // I need to put a reset funtion for the game to star again after the results have been show 

    // start funtion when the button is click phase 1
    $('#start-now').on('click', function () {
        $(this).hide();
        var counter = setInterval(timer, 1000);
        showQuestions();

    });
    // timer funtion for the seconds to decrease the variable count by a 1000
    function timer (){
        count--;
        $('#timer').html('Time remaining: ' + '00' + count + "seconds");
        if( count <=0){
        clearInterval(counter)
        //check if there is a piece missing for this function to work
        }
    }

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

    $('#answer-container').on('click', 'button', function(event){
        userPick = $('#answer-container').data('value');
        myQuestions[0].correctAnswer;
        if( userPick === myQuestions[0].correctAnswer){
            correctAnswers++;
        } else if ( userPick !== myQuestions[0].correctAnswer){
            incorrectAnswers
        }
    })


    // notes: phase three show the message all done, show results, and reset funtion for the game to start again


},

