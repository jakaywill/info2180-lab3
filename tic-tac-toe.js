document.addEventListener("DOMContentLoaded", () => {    
    const squares = document.querySelectorAll("#board div");    
    const stat = document.getElementById("status");    
    const newGameButton = document.querySelector(".btn");    
    let cp = "O";    

    squares.forEach(sq => {        
        sq.classList.add("square");        
        sq.addEventListener("click", () => {            
            if (!sq.textContent) {                
                sq.textContent = cp;                
                sq.classList.add(cp);                
                checkWin();                
                cp = cp === "O" ? "X" : "O";            
            }        
        });        
        sq.addEventListener("m_over", () => {            
            sq.classList.add("hover");        
        });        
        sq.addEventListener("m_out", () => {            
            sq.classList.remove("hover");        
        });    
    });    

    function checkWin() {        
        const winningCombos = [            
            [0, 1, 2], [3, 4, 5], [6, 7, 8],            
            [0, 3, 6], [1, 4, 7], [2, 5, 8],            
            [0, 4, 8], [2, 4, 6]          
        ];        
        
        winningCombos.some(combo => {            
            if (combo.every(index => squares[index].textContent === "X")) {                
                displayWin("X");                
                return true;            
            }            
            if (combo.every(index => squares[index].textContent === "O")) {                
                displayWin("O");                
                return true;            
            }
            return false;                
        });    
    }    

    function displayWin(winner) {        
        stat.textContent = `Congratulations! ${winner} has won!`;        
        stat.classList.add("you-won");    
    }  

    newGameButton.addEventListener("click", () => {        
        squares.forEach(sq => {            
            sq.textContent = "";            
            sq.classList.remove("X", "O");        
        });        
        stat.textContent = "Hover over a square and click to play your turn";        
        stat.classList.remove("you-won");        
        currentPlayer = "X";    
    });
});
