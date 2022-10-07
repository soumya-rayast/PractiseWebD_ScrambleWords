const wordText =document.querySelector(".word");
const hintText =document.querySelector(".hint span");
const timeText =document.querySelector(".time b");
const inputfield =document.querySelector("input");
const refreshBtn =document.querySelector(".refresh-word");
const checkBtn =document.querySelector(".check-word");

let correctWord,timer;

// for timing adjustment 
const initTimer = maxTime =>{
    clearInterval(timer);
    timer =setInterval(() => {
        if(maxTime > 0){
            maxTime--;
            return timeText.innerText =maxTime;
        }
        alert(`Time off! ${checkWord.toUpperCase()} was the correct word`);
        initGame();
    },1000);
}
const initGame =() =>{
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for(let i =wordArray.length - 1 ; i > 0; i--){
        let j =Math.floor(Math.random() * (i+1));
        [wordArray[i],wordArray[j]] =[wordArray[j],wordArray[i]];

    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputfield.value = "";
    inputfield.setAttribute("maxlength", correctWord.length);
}
initGame();
//checking word 
const checkWord = () =>{
    let userWord = inputfield.value.toLowerCase();
    if(!userWord) return alert("Please enter a word to check"); 
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
    alert(`Congrats! ${userWord.toUpperCase()} is a correct word`);
    initGame();
}
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);  