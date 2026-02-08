// PASSWORD
const lockScreen = document.getElementById("lockScreen");
const valentineScreen = document.getElementById("valentineScreen");
const letterScreen = document.getElementById("letterScreen");
const songScreen = document.getElementById("songScreen");
const wrongScreen = document.getElementById("wrongScreen");

const passDisplay = document.getElementById("passDisplay");
const numberPad = document.getElementById("numberPad");
const errorMsg = document.getElementById("errorMsg");
const retryBtn = document.getElementById("retryBtn");

const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Password
const correctPassword = "062125";
let enteredPassword = "";

// NUMBER PAD
for(let i=1;i<=9;i++){
  const btn = document.createElement("button");
  btn.innerText = i;
  btn.className = "pixelBtn";
  btn.onclick = ()=>{ addNumber(i); }
  numberPad.appendChild(btn);
}
const zeroBtn = document.createElement("button");
zeroBtn.innerText = 0;
zeroBtn.className = "pixelBtn";
zeroBtn.onclick = ()=>{ addNumber(0); }
numberPad.appendChild(zeroBtn);

function addNumber(num){
  if(enteredPassword.length < 6){
    enteredPassword += num;
    passDisplay.innerText = "●".repeat(enteredPassword.length);
  }
  if(enteredPassword.length === 6){
    if(enteredPassword === correctPassword){
      lockScreen.classList.add("hidden");
      valentineScreen.classList.remove("hidden");
      enteredPassword = "";
      passDisplay.innerText = "●●●●●●";
    } else {
      lockScreen.classList.add("hidden");
      wrongScreen.classList.remove("hidden");
      enteredPassword = "";
      passDisplay.innerText = "●●●●●●";
    }
  }
}

// RETRY BUTTON
retryBtn.onclick = ()=>{
  wrongScreen.classList.add("hidden");
  lockScreen.classList.remove("hidden");
}

// YES/NO BUTTONS
let yesSize = 14;
yesBtn.onclick = ()=>{
  valentineScreen.classList.add("hidden");
  letterScreen.classList.remove("hidden");
}

noBtn.addEventListener("mouseover", ()=>{
  const x = Math.random()*(window.innerWidth-100);
  const y = Math.random()*(window.innerHeight-200);
  noBtn.style.position="absolute";
  noBtn.style.left=x+"px";
  noBtn.style.top=y+"px";
  yesSize += 2;
  yesBtn.style.fontSize = yesSize + "px";
});

// NEXT BUTTON
nextBtn.onclick = ()=>{
  letterScreen.classList.add("hidden");
  songScreen.classList.remove("hidden");
}

// FLOATING HEARTS
function createHeart(){
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤";
  heart.style.left = Math.random()*window.innerWidth + "px";
  heart.style.animationDuration = (3+Math.random()*5) + "s";
  document.body.appendChild(heart);
  setTimeout(()=>{ heart.remove(); },7000);
}
setInterval(createHeart,500);
