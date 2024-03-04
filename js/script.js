function submitAnswers(){
    var total = 5;
    var score = 0;

    //get user input

    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    // 1 = b
    // 2 = c
    // 3 = b
    // 4 = b
    // 5 = b
    for(let i = 1;i<= total;i++){
        if(eval("q"+i) == null || eval("q"+i) == ''){
            alert("You missed question " + i);
            return false;
        }
    }

    var answers = ["b","c","b","b","b"];
    for(let i = 1;i<= total;i++){
        if(eval("q"+i) == answers[i-1]){
            score++;
        }
    }
    var results = document.getElementById("results");
    results.innerHTML = "<h3>You scored <span>" + score + "</span> out of <span>" + total +"</span></h3>"

    return false;
}