

// Amount of draughts each team has
let teamOne = 12;
let teamTwo = 12;




//Reset All Pieces


document.addEventListener("DOMContentLoaded", function() {
   
document.getElementById("p1_score").textContent = teamOne;
document.getElementById("p2_score").textContent = teamTwo;

//State Info: [0 = Empty Tile] [1 = P1 Piece] [2 = P2 Piece] [3 = P1 King Piece] [4 = P2 King Piece] []


    //Which Turn is it:


    let turn = 1;
    // 1: Player 1, 2: Player 2.
   
   
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


    //Row 4:
    let G14 = [document.getElementById("G.1-4"),1,4]
    let G34 = [document.getElementById("G.3-4"),3,4]
    let G54 = [document.getElementById("G.5-4"),5,4]
    let G74 = [document.getElementById("G.7-4"),7,4]
   
    G14[0].textContent = '-';
    G34[0].textContent = '-';
    G54[0].textContent = '-';
    G74[0].textContent = '-';
   
    //Row 3:
    let G03 = [document.getElementById("G.0-3"),0,3]
    let G23 = [document.getElementById("G.2-3"),2,3]
    let G43 = [document.getElementById("G.4-3"),4,3]
    let G63 = [document.getElementById("G.6-3"),6,3]
   
    G03[0].textContent = '-';
    G23[0].textContent = '-';
    G43[0].textContent = '-';
    G63[0].textContent = '-';
   
   
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

//BEFORE CLICKING, ALL STATES MUST BE SET APON PAGE LOAD


//Click Steps:
//Find Id
//Match Id to button Variable
//Check State
//Check Turn
//-Check Move Options (using states too)
    //-Move piece
        //change all piece states involved

//Registering Click:
function ButtonListeners() {
    const buttons = document.querySelectorAll('.black-tile');


    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonId = e.target.id;
            console.log(`Button clicked: ${buttonId}`);
            checkTurn(buttonId);
        });
    });
}
ButtonListeners();






function checkTurn(buttonId) {
    console.log("the function went through");
    const buttonOptions = {
        //Row 7:
        "G.0-7": G07,
        "G.2-7": G27,
        "G.4-7": G47,
        "G.6-7": G67,
        //Row 6:
        "G.1-6": G16,
        "G.3-6": G36,
        "G.5-6": G56,
        "G.7-6": G76,
        //Row 5:
        "G.0-5": G05,
        "G.2-5": G25,
        "G.4-5": G45,
        "G.6-5": G65,
        //Row 4:
        "G.1-4": G14,
        "G.3-4": G34,
        "G.5-4": G54,
        "G.7-4": G74,
        //Row 3:
        "G.0-3": G03,
        "G.2-3": G23,
        "G.4-3": G43,
        "G.6-3": G63,
        //Row 2:
        "G.1-2": G12,
        "G.3-2": G32,
        "G.5-2": G52,
        "G.7-2": G72,
        //Row 1:
        "G.0-1": G01,
        "G.2-1": G21,
        "G.4-1": G41,
        "G.6-1": G61,
        //Row 0:
        "G.1-0": G10,
        "G.3-0": G30,
        "G.5-0": G50,
        "G.7-0": G70,
    }
    const currentButton = buttonOptions[buttonId];
    console.log(`Button Id: ${buttonId}, Button Variable: ${currentButton}`);
    checkTurn(buttonId, currentButton);
}


function checkTurn(buttonId, currentButton) {
    if (turn == 1) {
        checkStateP1(buttonId, currentButton);
        //if the state and turn are correct, the box will light up as blue and then
            //another function will light up 2 green boxes for the moves
    } else if (turn == 2) {
        checkStateP2(buttonId, currentButton);
    }
    //add a state for a player there
   
    //switch turn at the end of move
    //make an html title displaying the turn
}


function checkStateP1(buttonId, currentButton) {
    const button = document.getElementById(buttonId);
    let state = button.getAttribute('data-state');


    if (state == 1) {
        button.style.backgroundColor = '#110088';
        movePieceP1(button, buttonId, currentButton);
    }
}


function checkStateP2(buttonId, currentButton) {
    const button = document.getElementById(buttonId);
    let state = button.getAttribute('data-state');


    if (state == 2) {
        button.style.backgroundColor = '#110088';
        movePieceP2(button, buttonId, currentButton);
    }
}


//add, subtract, etc, to find the two options
        //check for their states and highlight only if states are appropriate
        //if the attributed option is clicked, update the all the states and remove highlights
function movePieceP1(button, buttonId, currentButton) {
    const opt1 = [currentButton[1] - 1, currentButton[2] + 1];
    console.log(`Option 1: ${opt1}`);
    const opt2 = [currentButton[1] + 1, currentButton[2] + 1];
    console.log(`Option 2: ${opt2}`);
    document.getElementById(`${buttonId}`);
}


function movePieceP2(button, buttonId, currentButton) {
        
}


//use coords fins the two move options
//check the 2 options ffor their states
    //if the state is empty, hilight option green
    //if the state is a player



});


// Determines which team wins the game
if (teamOne == 0) {
    // "Brown Team Wins!"
    console.log("You Won!")
    } else if (teamTwo == 0) {
    // "Red Team Wins!"
    console.log("You Won!")
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


