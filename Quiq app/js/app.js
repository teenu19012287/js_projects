const questions = [{
    'que': "Which of the following is a markup language?",
    'a':"HTML",
    'b':"CSS",
    'c':"Javascript",
    'd':"PHP",
    'correct':"a",
},
{
'que': "Which year was js launched?",
'a':"1996",
'b':"1995",
'c':"1994",
'd':"none",
'correct':"b",
},

{
    'que': "css stands for?",
    'a':"hyper text markup",
    'b':"cascading stylesheet",
    'c':"jason object notation",
    'd':"helipad training",
    'correct':"b"
}
];
let index=0;
let total = questions.length;
let right =0 , wrong=0;
let quesBox = document.getElementById("quesBox")
let optionInputs = document.querySelectorAll(".options")
const loadQuestion = () => {
    if(index === total){
     return  endQuiz()
    }
     reset()
    
   const data = questions[index]

   quesBox.innerHTML = ` ${index + 1}) ${data.que}`
   optionInputs[0].innerElementSibling.innerText = data.a
   optionInputs[1].innerElementSibling.innerText = data.b
   optionInputs[2].innerElementSibling.innerText = data.c
   optionInputs[3].innerElementSibling.innerText = data.d


}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if(ans == data.correct){
        right++;

    }   else{
        wrong++;

    }
    index++;
    loadQuestion();
   // return;

}

const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
            (input) => {
                if(input.checked)
                { 
                   answer =input.value;

                }
            }
        
    )
    return answer;
}

const reset = () =>
{
    optionInputs.forEach(
        (input) => {
            input.checked = false;

        }
    )
}
// reset button is ued to reset  or can say clear the options choosen for the next qsn
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3> Thank you playing the quiz </h3>
    <h2> ${right} / ${total} are corect</h2>
    `
}

//initial call
loadQuestion(index);
