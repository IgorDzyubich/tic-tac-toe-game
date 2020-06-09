for (let i = 0; i < 9; i++) {
    document.getElementById('game').innerHTML += '<div class="block"></div>';
}


let turn = 0; 

document.getElementById('game').onclick = function(event) {
    console.log(event);
    if (event.target.className = 'block') {
        if (turn % 2 == 0) {
            event.target.innerHTML = '<img src="./img/1.png" alt="cross">';  
        }
        else {
            event.target.innerHTML = '<img src="./img/2.png" alt="zero">';
        }
        turn++;
        checkWinner();
    }
}

function checkWinner() {
    let allBlock = document.getElementsByClassName('block');
    
    // check cross
    if (allBlock[0].innerHTML == '<img src="./img/1.png" alt="cross">' 
    && allBlock[1].innerHTML == '<img src="./img/1.png" alt="cross">'
    && allBlock[2].innerHTML == '<img src="./img/1.png" alt="cross">') {
        document.getElementById('game').innerHTML += '<div class="horizontal-line" style="left:0px; top:72px;"></div>';
        document.getElementById('game').innerHTML += '<div class="game-over">Win X-player!!!</div>';
    }
    if (allBlock[3].innerHTML == '<img src="./img/1.png" alt="cross">' 
    && allBlock[4].innerHTML == '<img src="./img/1.png" alt="cross">'
    && allBlock[5].innerHTML == '<img src="./img/1.png" alt="cross">') {
        document.getElementById('game').innerHTML += '<div class="horizontal-line" style="left:0px; top:222px;"></div>';
        document.getElementById('game').innerHTML += '<div class="game-over">Win X-player!!!</div>';
    }
    if (allBlock[6].innerHTML == '<img src="./img/1.png" alt="cross">' 
    && allBlock[7].innerHTML == '<img src="./img/1.png" alt="cross">'
    && allBlock[8].innerHTML == '<img src="./img/1.png" alt="cross">') {
        document.getElementById('game').innerHTML += '<div class="horizontal-line" style="left:0px; top:372px;"></div>';
        document.getElementById('game').innerHTML += '<div class="game-over">Win X-player!!!</div>';
    }
    if (allBlock[0].innerHTML == '<img src="./img/1.png" alt="cross">' 
    && allBlock[3].innerHTML == '<img src="./img/1.png" alt="cross">'
    && allBlock[6].innerHTML == '<img src="./img/1.png" alt="cross">') {
        document.getElementById('game').innerHTML += '<div class="vertical-line" style="left:72px; top:0px;"></div>';
        document.getElementById('game').innerHTML += '<div class="game-over">Win X-player!!!</div>';
    }
    if (allBlock[1].innerHTML == '<img src="./img/1.png" alt="cross">' 
    && allBlock[4].innerHTML == '<img src="./img/1.png" alt="cross">'
    && allBlock[7].innerHTML == '<img src="./img/1.png" alt="cross">') {
        document.getElementById('game').innerHTML += '<div class="vertical-line" style="left:222px; top:0px;"></div>';
        document.getElementById('game').innerHTML += '<div class="game-over">Win X-player!!!</div>';
    }
    if (allBlock[2].innerHTML == '<img src="./img/1.png" alt="cross">' 
    && allBlock[5].innerHTML == '<img src="./img/1.png" alt="cross">'
    && allBlock[8].innerHTML == '<img src="./img/1.png" alt="cross">') {
        document.getElementById('game').innerHTML += '<div class="vertical-line" style="left:372px; top:px;"></div>';
        document.getElementById('game').innerHTML += '<div class="game-over">Win X-player!!!</div>';
    }
    if (allBlock[0].innerHTML == '<img src="./img/1.png" alt="cross">' 
    && allBlock[4].innerHTML == '<img src="./img/1.png" alt="cross">'
    && allBlock[8].innerHTML == '<img src="./img/1.png" alt="cross">') { 
        document.getElementById('game').innerHTML += '<div class="vertical-line" style="left:225px; top:0px; transform: rotate(-45deg);"></div>';
        document.getElementById('game').innerHTML += '<div class="game-over">Win X-player!!!</div>';
    }
    if (allBlock[2].innerHTML == '<img src="./img/1.png" alt="cross">' 
    && allBlock[4].innerHTML == '<img src="./img/1.png" alt="cross">'
    && allBlock[6].innerHTML == '<img src="./img/1.png" alt="cross">') {
        document.getElementById('game').innerHTML += '<div class="vertical-line" style="left:225px; top:0px; transform: rotate(45deg);"></div>';
        document.getElementById('game').innerHTML += '<div class="game-over">Win X-player!!!</div>';
    }
    
    // check zero
    if (allBlock[0].innerHTML == '<img src="./img/2.png" alt="zero">' 
    && allBlock[1].innerHTML == '<img src="./img/2.png" alt="zero">'
    && allBlock[2].innerHTML == '<img src="./img/2.png" alt="zero">') {
        document.getElementById('game').innerHTML += '<div class="horizontal-line" style="left:0px; top:72px;"></div>';
        document.getElementById('game').innerHTML += '<div class="game-over">Win O-player!!!</div>';
    }
    if (allBlock[3].innerHTML == '<img src="./img/2.png" alt="zero">' 
    && allBlock[4].innerHTML == '<img src="./img/2.png" alt="zero">'
    && allBlock[5].innerHTML == '<img src="./img/2.png" alt="zero">') {
        document.getElementById('game').innerHTML += '<div class="horizontal-line" style="left:0px; top:222px;"></div>';
        document.getElementById('game').innerHTML += '<div class="game-over">Win O-player!!!</div>';
    }
    if (allBlock[6].innerHTML == '<img src="./img/2.png" alt="zero">' 
    && allBlock[7].innerHTML == '<img src="./img/2.png" alt="zero">'
    && allBlock[8].innerHTML == '<img src="./img/2.png" alt="zero">') {
        document.getElementById('game').innerHTML += '<div class="horizontal-line" style="left:0px; top:372px;"></div>';
        document.getElementById('game').innerHTML += '<div class="game-over">Win O-player!!!</div>';
    }
    if (allBlock[0].innerHTML == '<img src="./img/2.png" alt="zero">' 
    && allBlock[3].innerHTML == '<img src="./img/2.png" alt="zero">'
    && allBlock[6].innerHTML == '<img src="./img/2.png" alt="zero">') {
        document.getElementById('game').innerHTML += '<div class="vertical-line" style="left:72px; top:0px;"></div>';
        document.getElementById('game').innerHTML += '<div class="game-over">Win O-player!!!</div>';
    }
    if (allBlock[1].innerHTML == '<img src="./img/2.png" alt="zero">' 
    && allBlock[4].innerHTML == '<img src="./img/2.png" alt="zero">'
    && allBlock[7].innerHTML == '<img src="./img/2.png" alt="zero">') {
        document.getElementById('game').innerHTML += '<div class="vertical-line" style="left:222px; top:0px;"></div>';
        document.getElementById('game').innerHTML += '<div class="game-over">Win O-player!!!</div>';
    }
    if (allBlock[2].innerHTML == '<img src="./img/2.png" alt="zero">' 
    && allBlock[5].innerHTML == '<img src="./img/2.png" alt="zero">'
    && allBlock[8].innerHTML == '<img src="./img/2.png" alt="zero">') {
        document.getElementById('game').innerHTML += '<div class="vertical-line" style="left:372px; top:px;"></div>';
        document.getElementById('game').innerHTML += '<div class="game-over">Win O-player!!!</div>';
    }
    if (allBlock[0].innerHTML == '<img src="./img/2.png" alt="zero">' 
    && allBlock[4].innerHTML == '<img src="./img/2.png" alt="zero">'
    && allBlock[8].innerHTML == '<img src="./img/2.png" alt="zero">') { 
        document.getElementById('game').innerHTML += '<div class="vertical-line" style="left:225px; top:0px; transform: rotate(-45deg);"></div>';
        document.getElementById('game').innerHTML += '<div class="game-over">Win O-player!!!</div>';
    }
    if (allBlock[2].innerHTML == '<img src="./img/2.png" alt="zero">' 
    && allBlock[4].innerHTML == '<img src="./img/2.png" alt="zero">'
    && allBlock[6].innerHTML == '<img src="./img/2.png" alt="zero">') {
        document.getElementById('game').innerHTML += '<div class="vertical-line" style="left:225px; top:0px; transform: rotate(45deg);"></div>';
        document.getElementById('game').innerHTML += '<div class="game-over">Win O-player!!!</div>';
    }

    // check draw
    if (
        (allBlock[0].innerHTML == '<img src="./img/1.png" alt="cross">' || allBlock[0].innerHTML == '<img src="./img/2.png" alt="zero">')
        &&
        (allBlock[1].innerHTML == '<img src="./img/1.png" alt="cross">' || allBlock[1].innerHTML == '<img src="./img/2.png" alt="zero">')
        &&
        (allBlock[2].innerHTML == '<img src="./img/1.png" alt="cross">' || allBlock[2].innerHTML == '<img src="./img/2.png" alt="zero">')
        &&
        (allBlock[3].innerHTML == '<img src="./img/1.png" alt="cross">' || allBlock[3].innerHTML == '<img src="./img/2.png" alt="zero">')
        &&
        (allBlock[4].innerHTML == '<img src="./img/1.png" alt="cross">' || allBlock[4].innerHTML == '<img src="./img/2.png" alt="zero">')
        &&
        (allBlock[5].innerHTML == '<img src="./img/1.png" alt="cross">' || allBlock[5].innerHTML == '<img src="./img/2.png" alt="zero">')
        &&
        (allBlock[6].innerHTML == '<img src="./img/1.png" alt="cross">' || allBlock[6].innerHTML == '<img src="./img/2.png" alt="zero">')
        &&
        (allBlock[7].innerHTML == '<img src="./img/1.png" alt="cross">' || allBlock[7].innerHTML == '<img src="./img/2.png" alt="zero">')
        &&
        (allBlock[8].innerHTML == '<img src="./img/1.png" alt="cross">' || allBlock[8].innerHTML == '<img src="./img/2.png" alt="zero">')
        ) 
        {
            document.getElementById('game').innerHTML += '<div class="game-over">DRAW!!!</div>';
        }
}




