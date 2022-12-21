
const wordText = document.querySelector('.word');
hintText = document.querySelector(".hint span");
timeText = document.querySelector(".time b");
inputField = document.querySelector("input");
refereshBtn = document.querySelector(".refresh-word");
checkBtn = document.querySelector(".check-word");



let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval( () => {
        if (maxTime > 0)
        {
            maxTime--;
            return timeText.innerText = maxTime; 
        }
        clearInterval(timer);
        alert ('Time off');
        initGame();
    }, 1000

    );
}

const initGame = () => {
    //call function
    initTimer(30);

    //getting random object from words
    let randomObj = words[Math.floor(Math.random() * 10)];

    // splitting each letter of random word
    let wordArray = randomObj.word.split("");

    for (let i = wordArray.length-1; i>0; i-- )
    {
        //getting random number
        let j = Math.floor(Math.random() * (parseInt (i)+1));

        //shuffling and swiping wordArray letters randomly
        [wordArray[i],wordArray[j]] = [wordArray[j], wordArray[i]];

    }
    //Passing shuffled word as word text
    wordText.innerText = wordArray.join("");

    //pasing random object
    hintText.innerText = randomObj.hint;

    //passing random word to correctWord
    correctWord = randomObj.word.toLocaleLowerCase();

    //input field empty
    inputField.value= "";

    //set word length = max wordlength
    inputField.setAttribute("maxlength",correctWord.length);
   
}
initGame();

const checkWord = () => {
    //getting user value
    let userWord = inputField.value.toLocaleLowerCase();

    // no word entered
    if(!userWord) return alert('Please enter a word');

    //incorrect word
    if ( userWord !== correctWord )
    alert ('Wrong guess! Try again');

    //correct word
    else
    alert ('congratulations..! Correct guess');

    initGame();
}

refereshBtn.addEventListener("click",initGame);
checkBtn.addEventListener("click",checkWord);

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}

