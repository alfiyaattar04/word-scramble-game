const h1Text = document.querySelector(".fancy");
const h1StrText = h1Text.textContent;
const splitText = h1StrText.split("");
h1Text.textContent="";

for (let i =0;i<splitText.length;i++)
{
    h1Text.innerHTML += "<span>" + splitText[i] +  "</span>";
}

let char = 0;
let h1Timer = setInterval(onTick, 50);

function onTick()
{
    const span = h1Text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length)
    {
       complete();
       return;
    }
}

function complete()
{
    clearInterval(h1Timer);
    h1Timer = null;
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