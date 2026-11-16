
  const btn = document.querySelector("#btn");
const startScreen = document.querySelector("#start-screen");
const container = document.querySelector("#quiz-container");

const quizData = [
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Management", "Digital Ordinance Model"],
    correctAnswer: "Document Object Model"
  },
  {
    question: "Which keyword creates a block-scoped variable in JavaScript?",
    options: ["var", "let", "define"],
    correctAnswer: "let"
  }
];
let score=0

let currentIndex = 0;

function render() {
  if (currentIndex >= quizData.length) {
    container.innerHTML = `<h2>Quiz Finished! 🎉</h2>}
     <h3> your score: ${score}</h3>`;
    return;
  }
  
  let currentQuestion = quizData[currentIndex];

  container.innerHTML = `
    <p>Question ${currentIndex + 1} of ${quizData.length}</p>
    <h2>${currentQuestion.question}</h2>
    <ul>
      ${currentQuestion.options.map(option => `<li><button class="option-btn">${option}</button></li>`).join("")}
    </ul>
    <button id="next-btn">Next</button>
  `;

  const optionBtn=document.querySelectorAll(".option-btn")
  optionBtn.forEach(button=>{

  button.addEventListener("click",function(){
    if(button.textContent===currentQuestion.correctAnswer){
      score++
      console.log("correct! score is now ",score)

    }
    else{
      console.log("incorrect!")
    }
    currentIndex++
    render()
  })
  })


  // Grab the Next button after it gets drawn
  const nextBtn = document.querySelector("#next-btn");
  nextBtn.addEventListener("click", function() {
    currentIndex++;
    render();
  });
}

// When Start is clicked, hide the welcome screen and launch question 1
btn.addEventListener("click", function() {
  startScreen.style.display = "none"; 
  container.classList.remove("hidden")
  currentIndex = 0;
  score=0
  render();
});







