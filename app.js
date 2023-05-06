const questionBoxes = document.querySelectorAll(".question-box");
let currentQuestion = null;

questionBoxes.forEach(questionBox => {
    const question = questionBox.querySelector('.question');
    const arrow = questionBox.querySelector('.arrow');
    const answer = questionBox.querySelector('.answers');
  
    const toggleAnswer = () => {
      if (currentQuestion !== null && currentQuestion !== questionBox) {
        const currentArrow = currentQuestion.querySelector('.arrow');
        const currentAnswer = currentQuestion.querySelector('.answers');
        const currentQuestionText = currentQuestion.querySelector('.question');

        currentArrow.classList.remove('arrow-active');
        currentAnswer.classList.add('hidden');
        currentQuestionText.style.fontWeight = 'normal';
        currentQuestion = questionBox;
      }
  
      answer.classList.toggle('hidden');
      arrow.classList.toggle('arrow-active');
      question.style.fontWeight = '700';
      currentQuestion = questionBox;
    };
  
    question.addEventListener('click', toggleAnswer);
    arrow.addEventListener('click', toggleAnswer);

    
  question.addEventListener('mouseover', () => {
    if (currentQuestion !== questionBox) {
      question.style.color = 'var(--clr-Soft-red)';
    }
  });
  
    question.addEventListener('mouseout', () => {
      question.style.color = 'var(--clr-Very-dark-desaturated-blue)';
    });
  });
    