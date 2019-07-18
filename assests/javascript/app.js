console.log("hello world");

var card = $("#quiz-area");

var questions = [{
        question: "Someone on twitter asks you what Accelo is - describe Accelo in a tweet",
        answers: ["Accelo is the #1 SaaS project management tool that runs your entire business in the cloud - Sales, Projects, Service Management.", "Worst Product Ever.", "Drew School", "Project Management Tool."],
        correctAnswer: "Accelo is the #1 SaaS project management tool that runs your entire business in the cloud - Sales, Projects, Service Management."
    },
    {
        question: "Your grandma asks you what “Exio or whatever company you work for is” - describe Accelo to your grandmother.",
        answers: ["It’s a project management software tool used for SMB service companies like IT Consultants.", "Accelorate your business", "Computer Software", "Account Software."],
        correctAnswer: "It’s a project management software tool used for SMB service companies like IT Consultants"
    },
    {
        question: "A Client wants three Sales Plus Users, six Project Premium Users, and two Users that can use both. What is the total MRR?",
        answers: ["$352", "$459", "$339", "$512"],
        correctAnswer: "$352"
    },
    {
        question: "What user licenses is restricted to work between 4 and 40 hours per month at no additional cost?",
        answers: ["Administrator", "Professional", "Collaborator", "Contractor"],
        correctAnswer: "Contractor"
    },
    {
        question: "How do I import my Companies into Accelo?",
        answers: ["csv", "tabular", "project import", "projects module"],
        correctAnswer: "csv"
    },
    {
        question: "How do I delete a user?",
        answers: ["you can't", "delete button", "delete user on edit", "user edit profile field"],
        correctAnswer: ""
    },
    {
        question: "What is one type of rate within Accelo's projects module?",
        answers: ["Billable", "Non-negotiable", "Flat-fee", "Fixed"],
        correctAnswer: "Billable"
    },
    {
        question: "Why can’t my PM make a Project Plan? She has every single permission on the permission page.",
        answers: ["User access denied", "Admin access required", "Collaborator-level read-write access required", "no Financial Visibility"],
        correctAnswer: "no Financial Visibility"
    },
    {
        question: "When you log time, what are you creating?",
        answers: ["ticket", "task", "request", "activity"],
        correctAnswer: ""
    },
    {
        question: "Users automate their Objects automatically using _____",
        answers: ["project", "triggers", "action", "campaign"],
        correctAnswer: "triggers"
    },
    {
        question: "I want to bill for all the emails I have sent against the Client. Where can I invoice for that work?",
        answers: ["Quotes Module", "Project, Tickets, and Retainers", "Project, Request, Sales", "Invoice Module"],
        correctAnswer: "triggers"
    }
];

//Variable that will hold the setInterval
var timer;

var game = {
    correct: 0,
    incorrect: 0,
    counter: 180,

    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("TIME UP");
            game.done();
        }
    },

    start: function() {
        timer = setInterval(game.countdown, 1000);

        $("#sub-wrapper").prepend(
            "<h2>Time Remaining: <span id='#counter-number'>180</span> Seconds</h2>"
        );

        $("#start").remove();

        for (var i = 0; i < questions.length; i++) {
            card.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                card.append("<input type='radio' name='question-" + i +
                    "' value'" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }
        card.append("<button id='done'>Done</button>")
    },

    //Where we left off on Wed night (1hr demo video via zoom)
    //checking for the input values to see if the selected radio button is the correctAnswer or not
    done: function() {
        var inputs = card.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() === questions[i].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }
        this.result();
    },

    //append the final results - score
    result: function() {
        clearInterval(timer);
        $("#sub-wrapper h2").remove();

        card.html("<h2>All Done!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>")
    }
};

// CLICK EVENT HANDLERS
$(document).on("click", "#start", function() {
    game.start();
});

$(document).on("click", "#done", function() {
    game.start();
});