/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird');
  const gameDisplay = document.querySelector('.game-container');
  const ground = document.querySelector('.ground');

  let birdLeft = 220;
  let birdBottom = 100;
  let gravity = 2;
  let isGameOver = false;

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
    if (birdBottom < 500)birdBottom += 50;
    birdBottom += 50;
    bird.style.bottom = birdBottom + 'px';
  }
  document.addEventListener('keyup', control);

  function generateObstacle() {
    let obstacleLeft = 500;
    let randomHeight = Math.random() * 60;
    let obstacleBottom = randomHeight;
    const obstacle = document.createElement('.div');
    if (!isGameOver) obstacle.classList.add('.obstacle');
    obstacle.classList.add('.obstacle');
    gameDisplay.append(obstacle);
    obstacle.style.left = obstacleLeft + 'px';
    obstacle.style.bottom = obstacleBottom + 'px';

    function moveObstacle() {
      obstacleLeft -= 2;
      obstacle.style.left = obstacleLeft + 'px';
      if (obstacleLeft === -60) {
        clearInterval(timerId);
        gameDisplay.removeChild(obstacle);
      }
      if (birdBottom === 0) {
        gameOver();
      }
      if (obstacleLeft > 200 && obstacleLeft < 200 && birdLeft === 220 || birdBottom === 0) {
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
  }
});