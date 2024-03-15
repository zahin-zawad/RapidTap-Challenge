const stats = document.querySelector('.stats')
const startBtn = document.querySelector('button[name=start]');
const clickBtn = document.querySelector('button[name=click]');

const winscore = 10;
let count = 0;

startBtn.addEventListener('click',function(){
    start();
});

clickBtn.addEventListener('click', () =>{
    count++;
    stats.textContent = count;
})

const start = () => {
    count = 0;
    stats.textContent = count;
    clickBtn.removeAttribute('disabled');

    startCounting();
}

const startCounting = () => {
    setTimeout(() => {
        if(isWin()) {

            stats.textContent = 'You Won!';
        }
        else{
            stats.textContent = 'You Lost!';
        }

        clickBtn.setAttribute('disabled', true);
    }, 2000);
}

const isWin = () => {
    if(count < winscore){
        return false;
    }
    else{
        return true;
    }
}