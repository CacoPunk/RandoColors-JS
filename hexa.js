const hexa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];


const btn = document.getElementById('btn');
const color = document.querySelector('.span-color');

btn.addEventListener('click', function(){
    let corHex = '#';
    for (let index = 0; index < 6; index++) {
        corHex += hexa[getRandomNumbers()];
        console.log(index)   
    }

    console.log(corHex)

    document.body.style.backgroundColor = corHex;
    color.textContent = corHex
})

function getRandomNumbers(){
    return Math.floor(Math.random() * hexa.length);
}

