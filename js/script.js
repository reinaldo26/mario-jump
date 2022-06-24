const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameoverBoard = document.querySelector('.game-over');
const btnOver = document.querySelector('.btn-over');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump'); 
    }, 500);
}

const restart = () => {
    btnOver.addEventListener('click', () => { location.reload();});
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;

    // Game Over
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'img/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '40px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;
        gameoverBoard.removeAttribute('hidden');

        restart();
        clearInterval(loop);
    }
}, 20);

document.addEventListener('keydown', jump);