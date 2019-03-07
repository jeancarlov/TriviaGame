
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
            question: "where is mount everest located at?",
            answers: {
                a: 'canada',
                b: 'nepal',
                c: 'china'
            },
            correctAnswer: 'b'
        },
        {
            question: "moscow is the capital of what country?",
            answers: {
                a: 'russia',
                b: 'venezuela',
                c: 'germany',
            },
            correctAnswer: 'a'
        },
        {
            question: "berlin is the capital of what country?",
            answers: {
                a: 'germany',
                b: 'france',
                c: 'italy'
            },
            correctAnswer: 'a'
        },
        {
            question: "rome is the capital of what country?",
            answers: {
                a: 'germany',
                b: 'france',
                c: 'italy'
            },
            correctAnswer: 'c'
        },

    ];
    console.log(myQuestions)
    // I need to put a reset funtion for the game to star again after the results have been show 

    // start funtion when the button is click phase 1
    $('#start-now').on('click', function () {
        $(this).hide();
        var counter = setInterval(timer, 1000);
        showQuestions();

    });
    // timer funtion for the seconds to decrease the variable count by a 1000
    function timer() {
        count--;
        $('#timer').html('Time remaining: ' + count + " seconds");
        if (count <= 0) {
            clearInterval(counter)
            //check if there is a piece missing for this function to work
        }
    }

    // phase 2  showing the questions and answer with the time counter in seconds running
    function showQuestions() {
        // for (var i =0; i< myQuestions.length; i++){
        //     $('#questions-container').append(myQuestions[i].question +"<br>"); 
        //     // $('questions-container').append()
        // }
        $('#questions-container').append(myQuestions[0].question + '<br>');
        $('#questions-container').append('<button>' + myQuestions[0].answers.a + '</button>');
        $('#questions-container').append('<button>' + myQuestions[0].answers.b + '</button>');
        $('#questions-container').append('<button>' + myQuestions[0].answers.c + '</button><br>')
        $('#questions-container').append(myQuestions[1].question + '<br>');
        $('#questions-container').append('<button>' + myQuestions[1].answers.a + '</button>');
        $('#questions-container').append('<button>' + myQuestions[1].answers.b + '</button>');
        $('#questions-container').append('<button>' + myQuestions[1].answers.c + '</button><br>')
        $('#questions-container').append(myQuestions[2].question + '<br>');
        $('#questions-container').append('<button>' + myQuestions[2].answers.a + '</button>');
        $('#questions-container').append('<button>' + myQuestions[2].answers.b + '</button>');
        $('#questions-container').append('<button>' + myQuestions[2].answers.c + '</button><br>')
        $('#questions-container').append(myQuestions[3].question + '<br>');
        $('#questions-container').append('<button>' + myQuestions[3].answers.a + '</button>');
        $('#questions-container').append('<button>' + myQuestions[3].answers.b + '</button>');
        $('#questions-container').append('<button>' + myQuestions[3].answers.c + '</button><br>')
        // question++;

        if (myQuestions[0].question === myQuestions.correctAnswer[0]){
            correctAnswers++;
            // $('.results').text(myQuestions.correctAnswers[0])
        } else if (myQuestions[0].question !== myQuestions.correctAnswer[0]) {
            incorrectAnswers++;
        };



    }







    // notes: phase three show the message all done, show results, and reset funtion for the game to start again


})

