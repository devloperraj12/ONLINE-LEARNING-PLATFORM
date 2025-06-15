window.onload = function() {
  alert("Welcome to CyberLearn! Ready to level up your skills?");
};

document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const questions = ['q1', 'q2', 'q3', 'q4', 'q5'];
  let score = 0;
  let total = questions.length;

  questions.forEach(q => {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    const questionDiv = selected ? selected.closest('.quiz-question') : null;

    if (selected) {
      if (selected.value === 'correct') {
        score++;
        // Mark correct answer green
        selected.parentElement.style.color = 'green';
      } else {
        // Mark wrong answer red
        selected.parentElement.style.color = 'red';
        // Show the correct answer label in green for reference
        const correctLabel = questionDiv.querySelector('input[value="correct"]').parentElement;
        if(correctLabel){
          correctLabel.style.color = 'green';
        }
      }
    } else {
      // If no option selected, mark question text red
      if(questionDiv) {
        questionDiv.querySelector('p').style.color = 'red';
      }
    }
  });

  // Show score summary
  const resultDiv = document.getElementById('quiz-result');
  resultDiv.innerHTML = `Your Score: ${score} / ${total}`;

});
