let isGameActive = true;
let point;
point = prompt('Nhập số điểm cần để chiến thắng');
if (point == null || point == "" || point == 0) {
    isGameActive = false;
}

const cells = Array.from(document.querySelectorAll('.cell'));
const resetButton = document.querySelector('#reset');
const announcer = document.querySelector('.announcer');
const goalX = document.querySelector('.goalX');
const goalO = document.querySelector('.goalO');
const scoreX = document.querySelector('.scoreX');
const scoreO = document.querySelector('.scoreO');
const clap = document.querySelector('.clap');
const X_X = document.querySelector('.X');
const O_O = document.querySelector('.O');

let board = ['','','','','','','','',''];

let X = '<img src ="./img/X.jpg" alt style = "width: 100px; height: 100px;" >';
let O = '<img src ="./img/O.jpg" alt style = "width: 100px; height: 100px;" >'

let currentPlayer = X;
X_X.style.backgroundColor = 'green';


const playerX_won = 'playerX_won';
const playerO_won = 'playerO_won';
const tie = 'tie';

function checkWinCondition() { 
    let roundWon = false; 
    if ((board[0]=== X && board[1]=== X && board[2]=== X)|| 
    (board[3]=== X && board[4]=== X && board[5]=== X )|| 
    (board[6]=== X && board[7]=== X && board[8]=== X )|| 
    (board[0]=== X && board[3]=== X && board[6]=== X )|| 
    (board[1]=== X && board[4]=== X && board[7]=== X )|| 
    (board[2]=== X && board[5]=== X && board[8]=== X )|| 
    (board[0]=== X && board[4]=== X && board[8]=== X )|| 
    (board[2]=== X && board[4]=== X && board[6]=== X )) 
    { roundWon = true; } 
    else if ((board[0]=== O && board[1]=== O && board[2]=== O)|| 
    (board[3]=== O && board[4]=== O && board[5]=== O )|| 
    (board[6]=== O && board[7]=== O && board[8]=== O )|| 
    (board[0]=== O && board[3]=== O && board[6]=== O )|| 
    (board[1]=== O && board[4]=== O && board[7]=== O )|| 
    (board[2]=== O && board[5]=== O && board[8]=== O )|| 
    (board[0]=== O && board[4]=== O && board[8]=== O )|| 
    (board[2]=== O && board[4]=== O && board[6]=== O )) 
    { roundWon = true; }
    else if (!board.includes('')) 
    { announce(tie); }
    
if (roundWon) 
    { 
    announce(currentPlayer === X ? playerX_won : playerO_won); 
    isGameActive = false; 
    return; 
    }
}

const announce = (type) => { 
    switch(type){ 
        case playerO_won: 
            goalO.textContent=Number(goalO.textContent)+1; 
            alert("O won!!!");  
            O_O.style.backgroundColor = 'green';
            if (goalO.textContent === point)
                { scoreO.innerText=Number(scoreO.innerText)+1; 
                announcer.innerHTML = 'Player <span class="colorO">O</span> won!!!'; 
                announcer.classList.remove('hide');
                clap.classList.remove('hide'); 
                setTimeout(reloadGame, 3000);
           
             }; 
             break; 
        case playerX_won: 
             goalX.textContent=Number(goalX.textContent)+1; 
             alert("X won!!!"); 
             if (goalX.textContent === point)
                 { scoreX.innerText=Number(scoreX.innerText)+1; 
                 announcer.innerHTML = 'Player <span class="colorX">X</span> won!!!'; 
                 announcer.classList.remove('hide'); 
                 clap.classList.remove('hide'); 
                 setTimeout(reloadGame, 3000);
              }; 
              break; 
        case tie: 
              alert('Game ended in a draw!!!');  
    }
};

const isValidAction = (cell) => { 
    if (cell.innerHTML === X || cell.innerHTML === O){ 
        return false; 
    } 
    return true;
};

const updateBoard = (index) => { 
    board[index] = currentPlayer;
}

const changePlayer = () => { 
    if (currentPlayer === X){ 
        currentPlayer = O; 
        O_O.style.backgroundColor = 'green';
        X_X.style.backgroundColor = 'lightgray';
    } 
    else if (currentPlayer === O){ 
        currentPlayer = X; 
        X_X.style.backgroundColor = 'green';
        O_O.style.backgroundColor = 'lightgray';
    }
}

const userAction = (cell, index) => { 
    if (isValidAction(cell) && isGameActive) { 
        cell.innerHTML = currentPlayer; 
        /* cell.classList.add('color' + currentPlayer); */
        updateBoard(index); 
        checkWinCondition(); 
        changePlayer(); 
    }
}

const resetBoard = () => { 
    board = ['','','','','','','','','']; 
    isGameActive= true; 
    announcer.classList.add('hide'); 
    
    if (currentPlayer === O) { 
        changePlayer(); 
    }
    
    cells.forEach(cell => { 
        cell.innerHTML = ''; 
        cell.classList.remove('colorX')
        cell.classList.remove('colorO')
    });
}

const reloadGame = () => { 
    resetBoard(); 
    goalO.textContent='0'; 
    goalX.textContent='0'; 
    clap.classList.add('hide'); 
    point = prompt('Nhập số điểm cần để chiến thắng');
    if (point == null || point == "" || point == 0) {
        isGameActive = false;
    }

}

cells.forEach( (cell, index) => { 
    cell.addEventListener('click', () => userAction(cell, index));
});

resetButton.addEventListener('click',resetBoard);