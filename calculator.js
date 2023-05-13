let question = document.querySelector('.question')
let answer_buttons = document.querySelectorAll('.answer')
let containerH3 = document.querySelector('.container_h3')
let start_buton = document.querySelector('.btn-start')
let container = document.querySelector('.container_start')
let container_main = document.querySelector('.main')
let signsList = ['+','-','*','/']

        function getRandomSign(){
            return signsList[randint(0,3)]
        }
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) { 
    randomIndex = Math.floor(Math.random() * currentIndex); 
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [    
      array[randomIndex], array[currentIndex]];
  }
  return array; 
}

   function randint(min,max){
        return Math.round(Math.random() * (max-min)+min)
    }

class Question{
    constructor(){
                     let a = randint(1,30)
                     let b = randint(1,30)
                     let sign = getRandomSign()
                     this.question = `${a} ${sign} ${b}`
                     if (sign == '+'){
                         this.correctAnswer = a+b 
                     }else if (sign == '*'){
                         this.correctAnswer = a*b
                     }else if (sign== '/'){
                         this.correctAnswer = a/b
                     }else if (sign == '-'){
                         this.correctAnswer = a-b
                     }
                    this.answers = [
                        this.correctAnswer,
                        randint(this.correctAnswer-15, this.correctAnswer-1),
                        randint(this.correctAnswer-15, this.correctAnswer-1),
                        randint(this.correctAnswer-15, this.correctAnswer-1),
                    ]
                    shuffle(this.answers)
                  }
display(){
    question.innerHTML = this.question
    for (let i=0; i <answer_buttons.length;i += 1){
        answer_buttons[i].innerHTML = this.answers[i]
    }
}}
let total_questions_asked
let currentQuestion
let right_amount
start_buton.addEventListener('click',function(){
    container_main.style.display = 'flex'
    container_start.style.display = 'none'

right_amount = 0
total_questions_asked = 0
currentQuestion = new Question()
currentQuestion.display()

setTimeout(function(){
     container_main.style.display = 'none'
    container_start.style.display = 'flex'
    containerH3.innerHTML= `Вы дали ${right_amount}правильных ответов из ${total_questions_asked}
                Точность - ${Math.round(right_amount*100/total_questions_asked)}%`
    },10000)

 }) 




for (let i=0; i < answer_buttons.length; i += 1){
    answer_buttons[i].addEventListener('click',function(){
        if (answer_buttons[i].innerHTML == currentQuestion.correctAnswer){
            console.log("Правильно")
            right_amount += 1
            answer_buttons[i].style.background = "#00FF00";
            anime({
                targets:answer_buttons[i],
                background:"#FFFFFF",
                duration:500,
                delay:100,
                easing:'linear'
            })
        }else{
            console.log("Не правильно")
            answer_buttons[i].style.background = "#ff0000";
             anime({
                targets:answer_buttons[i],
                background:"#FFFFFF",
                duration:500,
                delay:100,
                easing:'linear'
            })
        }
        totalQuestionAsked += 1
        currentQuestion = new Question()
        currentQuestion.display()
    })
  


}
