// Amount of draughts each team has
let teamOne = 12;
let teamTwo = 12;


// Determines which team wins the game
if (teamOne == 0) {
// "Brown Team Wins!"
} else if (teamTwo == 0) {
// "Red Team Wins!"
}




// Function for moving draughts
function draughtState(buttonID, state) {
    if (state == 0) { // No draughts (0) on a given black tile
        
    } else if (state == 1) { // Includes a draught (1) or a king (2) on a given black tile

    } else if (state == 2) { // If a RED draught becomes king
        kingState(buttonID);
    } else if (state == 3) {
        kingState(buttonID); // If a BROWN draught becomes king
    }
}




// Function for moving kings
function kingState(buttonID) {

}




// Function for eliminating opponent's draughts
function eliminate() {

}