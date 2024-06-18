// Amount of draughts each team has
let teamOne = 12;
let teamTwo = 12;

// Changes turns



//Reset All Pieces

document.addEventListener("DOMContentLoaded", function() {
    //Row 7:
    let G07 = [document.getElementById("G.0-7"),0,7]
    let G27 = [document.getElementById("G.2-7"),2,7]
    let G47 = [document.getElementById("G.4-7"),4,7]
    let G67 = [document.getElementById("G.6-7"),6,7]
    
    G07[0].textContent = 'o';
    G27[0].textContent = 'o';
    G47[0].textContent = 'o';
    G67[0].textContent = 'o';
    
    //Row 6:
    let G16 = [document.getElementById("G.1-6"),1,6]
    let G36 = [document.getElementById("G.3-6"),3,6]
    let G56 = [document.getElementById("G.5-6"),5,6]
    let G76 = [document.getElementById("G.7-6"),7,6]
    
    G16[0].textContent = 'o';
    G36[0].textContent = 'o';
    G56[0].textContent = 'o';
    G76[0].textContent = 'o';

    //Row 5:
    let G05 = [document.getElementById("G.0-5"),0,5]
    let G25 = [document.getElementById("G.2-5"),2,5]
    let G45 = [document.getElementById("G.4-5"),4,5]
    let G65 = [document.getElementById("G.6-5"),6,5]
    
    G05[0].textContent = 'o';
    G25[0].textContent = 'o';
    G45[0].textContent = 'o';
    G65[0].textContent = 'o';

    
    
    //Row 2:
    let G12 = [document.getElementById("G.1-2"),1,2]
    let G32 = [document.getElementById("G.3-2"),3,2]
    let G52 = [document.getElementById("G.5-2"),5,2]
    let G72 = [document.getElementById("G.7-2"),7,2]
    
    G12[0].textContent = 'o';
    G32[0].textContent = 'o';
    G52[0].textContent = 'o';
    G72[0].textContent = 'o';
    
    //Row 1:
    let G01 = [document.getElementById("G.0-1"),0,1]
    let G21 = [document.getElementById("G.2-1"),2,1]
    let G41 = [document.getElementById("G.4-1"),4,1]
    let G61 = [document.getElementById("G.6-1"),6,1]
    
    G01[0].textContent = 'o';
    G21[0].textContent = 'o';
    G41[0].textContent = 'o';
    G61[0].textContent = 'o';

    //Row 0:
    let G10 = [document.getElementById("G.1-0"),1,0]
    let G30 = [document.getElementById("G.3-0"),3,0]
    let G50 = [document.getElementById("G.5-0"),5,0]
    let G70 = [document.getElementById("G.7-0"),7,0]
    
    G10[0].textContent = 'o';
    G30[0].textContent = 'o';
    G50[0].textContent = 'o';
    G70[0].textContent = 'o';

});


// Determines which team wins the game
if (teamOne == 0) {
// "Brown Team Wins!"
} else if (teamTwo == 0) {
// "Red Team Wins!"
}






// Each button will be set in this format: button = [x, y, state, team]

// Functions for managing draught movements
function redDraughtState(buttonID, state) {
    if (state == 0) { // No draughts (0) on a given black tile
        moveRed(x, y);
    } else if (state == 1) { // Includes a draught (1) or a king (2) on a given black tile
        moveRed(x, y);
    } else if (state == 2) { // If a RED draught becomes king
        redKingState(buttonID);
    }
}


function brownDraughtState(buttonID, state) {
    if (state == 0) { // No draughts (0) on a given black tile
        moveBrown(x, y);
    } else if (state == 1) { // Includes a draught (1) or a king (2) on a given black tile

    } else if (state == 2) { // If a BROWN draught becomes king
        brownKingState(buttonID);
    }
}




// Function for moving draughts
function moveRed(buttonID, x, y) {
    x = buttonID[0];
    y = buttonID[1];
    if (state = 0) {

    } else if (state = 1) {

    }
}


function moveBrown(x, y) {
    x = buttonID[0];
    y = buttonID[1];
    if (state == 0) { // No draughts (0) on a given black tile

    } else if (state == 1) {

    }
}




// Function for moving kings
function redKingState(buttonID) {

}

function brownKingState(buttonID) {

}




// Function for eliminating opponent's draughts
function eliminate() {

}




    //POD:
// Reset All scores
// All pieces in starting position
//