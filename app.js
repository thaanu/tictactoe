$(document).ready(function () { 

    let pos = [];
    pos[0] = "empty";
    pos[1] = "empty";
    pos[2] = "empty";
    pos[3] = "empty";
    pos[4] = "empty";
    pos[5] = "empty";
    pos[6] = "empty";
    pos[7] = "empty";
    pos[8] = "empty";

    let rounds = 0;
    let currentPlayer = "x";
    let endgame = false;
    let message = '';

    console.log(endgame, 'game started');

    $('#display').html(currentPlayer + "'s turn");

    $('.btn').on('click', function () { 

        rounds += 1; // increment the round

        if ( rounds == 9 ) {
            endgame = true;
            message = 'It\'s a draw';
        }
        
        
        if (currentPlayer == "x") {
            pos[$(this).data('id')] = "x";
            $(this).html('x');
        }
        else {
            pos[$(this).data('id')] = "o";
            $(this).html('o');
        }

        // Check if won
        if (
            (pos[0] != "empty") && (pos[0] == pos[1] && pos[1] == pos[2]) || 
            (pos[3] != "empty") && (pos[3] == pos[4] && pos[4] == pos[5]) || 
            (pos[6] != "empty") && (pos[6] == pos[7] && pos[7] == pos[8]) ||
            (pos[0] != "empty") && (pos[0] == pos[3] && pos[3] == pos[6]) || 
            (pos[1] != "empty") && (pos[1] == pos[4] && pos[4] == pos[7]) || 
            (pos[2] != "empty") && (pos[2] == pos[5] && pos[5] == pos[8]) ||
            (pos[0] != "empty") && (pos[0] == pos[4] && pos[4] == pos[8]) ||
            (pos[2] != "empty") && (pos[2] == pos[4] && pos[4] == pos[6])
        ) {
            message = currentPlayer + ' won';
            endgame = true;
        }

        currentPlayer = (currentPlayer == "x" ? "o" : "x");

        if (endgame == true) {
            $('#display').html(message);
            alert(message);
            window.location.reload();
        }
        else {
            $('#display').html(currentPlayer + "'s turn");
        }

    });

});