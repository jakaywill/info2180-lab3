document.addEventListener("DOMContentLoaded", () => {    
    const squares = document.querySelectorAll("#board div");  

    squares.forEach(sq => {        
        sq.classList.add("square");   
    }) 
});