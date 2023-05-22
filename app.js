const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.span-color');

btn.addEventListener('click', function(){
    const randomNumer = getRandomNumbers(colors.length);
    document.body.style.backgroundColor = colors[randomNumer];
    color.textContent =colors[randomNumer]
})

function getRandomNumbers(index){
    return Math.floor(Math.random() * index);
}