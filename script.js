let arr = [
    'banana', 'apple', 'orange', 'grape', 'kiwi', 'pineapple', 'strawberry', 'watermelon'
];
function randarray(){
    arr = arr.sort(() => 0.5 - Math.random())
    console.log(arr)
}
randarray()

let iteration = 0
const timeRemaining = 20;
let seconds = timeRemaining;

let htmlTag={
    timer:document.querySelector('#timer'),
    scr_word:document.querySelector('#scrambled-word')
}

let answer=document.querySelector('#answer')
let score=document.querySelector('#current')
let warning=document.querySelector('#warning')
let submit=document.querySelector('#submit')
let refresh=document.querySelector('#refresh')
let time;

function view() {
    if (!arr[iteration]) {
        clearInterval(time)
        answer.classList.add('d-none')
        htmlTag.scr_word.classList.add('d-none')
        htmlTag.timer.classList.add('d-none')
        submit.classList.add('d-none')
        refresh.classList.remove('d-none')
        return;
    }
    htmlTag.scr_word.textContent=randtext(arr[iteration])
    console.log(arr[iteration])
}

view()

function EnterQuestion(event) {
    if (event.keyCode === 13) {
        nextQuestion()
    }
}

function nextQuestion() {
    if (!arr[iteration]) {
        console.log('verj kanec')
        return;
    }
    seconds=timeRemaining
    if(answer.value===arr[iteration]){
        score.innerHTML++
    }else{
        warning.innerHTML++
    }

    answer.value=''

    iteration++
    view()
}
function randtext(arg){
    arg=arg.split('')
    return arg.sort(() => 0.5 - Math.random()).join('')
}

function refreshQuestion(){
    answer.classList.remove('d-none')
    htmlTag.scr_word.classList.remove('d-none')
    htmlTag.timer.classList.remove('d-none')
    submit.classList.remove('d-none')
    refresh.classList.add('d-none')
    seconds=timeRemaining
    score.innerHTML=0
    warning.innerHTML=0
    iteration=0
    randarray()
    timerfunc()
    view()
}

function timerfunc(){
    time=setInterval(function (){
        if(seconds===0){
            seconds=timeRemaining
            nextQuestion()
        }
        htmlTag.timer.innerHTML=seconds
        seconds--
    },1000)
}
timerfunc()