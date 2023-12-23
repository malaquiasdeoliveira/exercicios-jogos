document.addEventListener("DOMContentLoaded", function () {
  const mario = document.querySelector(".mario");
  const pipe = document.querySelector(".pipe");
  let score = document.getElementById("score");
  let jumps = 0;
let seconds = 0;
let minutes = 0;
let algarismos = 2;

  const jump = function () {
    mario.classList.add("jump");

    setTimeout(function () {
      mario.classList.remove("jump");
    }, 500);

    jumps++;  
    updateScore();
  };

  

  const updateTimer = function() {
    seconds++;
    minutes = seconds/3600;
    let min = minutes.toFixed(algarismos);
    timer.textContent = `Time: ${min}  min`;
    
  };
 
  const updateScore = function() {
    score.textContent = `Score: ${jumps}`;
  }

  const loop = setInterval(function () {
    updateTimer();
    updateScore();

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;

      mario.src = "./imagens/images/game-over.png";
      mario.style.width = "75px";
      mario.style.marginLeft = "50px";
      

      

      clearInterval(loop);
    }
  }, 10);

  document.addEventListener("keydown", jump);
});
