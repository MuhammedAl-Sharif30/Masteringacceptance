let currentQuestion = 0;
const questions = [
  { q: "ما هو الرمز الكيميائي للماء؟", options: ["H2O", "CO2", "O2", "NaCl"], answer: 0 },
  { q: "أي من التالي ليس عنصراً؟", options: ["حديد", "أكسجين", "ماء", "ذهب"], answer: 2 }
];

function navigateTo(screen) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active-screen'));
  document.getElementById(screen).classList.add('active-screen');
  if (screen === 'quiz') loadQuestion();
}

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("questionBox").innerText = q.q;
  document.getElementById("optionsBox").innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i);
    document.getElementById("optionsBox").appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  const result = document.getElementById("resultBox");
  if (selected === correct) result.innerText = "إجابة صحيحة ✅";
  else result.innerText = "إجابة خاطئة ❌";
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("resultBox").innerText = "";
  if (currentQuestion < questions.length) loadQuestion();
  else {
    document.getElementById("questionBox").innerText = "انتهى الاختبار!";
    document.getElementById("optionsBox").innerHTML = "";
  }
}