/* eslint-disable no-trailing-spaces */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird');
  const gameDisplay = document.querySelector('.game-container');
  const ground = document.querySelector('.ground-moving');

  let birdLeft = 220;
  let birdBottom = 100;
  let gravity = 3;
  let isGameOver = false;
  let gap = 430;

  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = birdBottom + 'px';
    bird.style.left = birdLeft + 'px';
  }
  let gameTimerId = setInterval(startGame, 20);
  function control(e) {
    if (e.keyCode === 32) {
      // eslint-disable-next-line no-use-before-define
      jump();
    }
  }
  function jump() {
    if (birdBottom < 500) birdBottom += 50;
    birdBottom += 50;
    bird.style.bottom = birdBottom + 'px';
  }
  document.addEventListener('keyup', control);

  function generateObstacle() {
    let obstacleLeft = 500;
    let randomHeight = Math.random() * 60;
    let obstacleBottom = randomHeight;
    const obstacle = document.createElement('.div');
    const topObstacle = document.createElement('.div');
    if (!isGameOver) {
      obstacle.classList.add('.obstacle');
      topobstacle.classList.add('.topObstacle');
    }

    gameDisplay.append(obstacle);
    gameDisplay.append(topObstacle);
    obstacle.style.left = obstacleLeft + 'px';
    obstacle.style.bottom = obstacleBottom + 'px';
    topobstacle.style.left = obstacleLeft + 'px';
    topobstacle.style.bottom = obstacleBottom + gap + 'px';

    function moveObstacle() {
      obstacleLeft -= 2;
      obstacle.style.left = obstacleLeft + 'px';
      topObstacle.style.left = obstacleLeft + 'px';
      if (obstacleLeft === -60) {
        clearInterval(timerId);
        gameDisplay.removeChild(obstacle);
        gameDisplay.removeChild(topObstacle);
      }
      if (birdBottom === 0) {
        gameOver();
      }
      if (
        (obstacleLeft > 200
          && obstacleLeft < 280
          && birdLeft === 220
          && (birdBottom < obstacleBottom + 153
            || birdBottom > obstacleBottom + gap - 200))
        || birdBottom === 0
      ) {
        gameOver();
        clearInterval(timerId);
      }
    }
    let timerId = setInterval(moveObstacle, 100);
    if (!isGameOver) setTimeout(generateObstacle, 3000);
  }
  generateObstacle();

  function gameOver() {
    clearInterval(gameTimerId);
    isGameOver = true;
    document.removeEventListener('keyup', control);
    ground.classList.add('.ground')
    ground.classList.add('.ground-moving');
  }
});
