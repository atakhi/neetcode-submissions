class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        var mp = {};
        var invalid = false;
        for (var i = 0; i < 9; i++) {
            mp = {};
            for (var j = 0; j < 9; j++) {
                var key = i.toString() + j.toString() + board[i][j];
                if (board[i][j] != '.') {
                    if (mp[board[i][j]] == undefined) {
                        mp[board[i][j]] = board[i][j];
                    } else {
                        return false;
                    }
                }

            }
        }
        if (invalid) {
            console.log('rows');
            return invalid;
        }
        for (var i = 0; i < 9; i++) {
            mp = {};
            for (var j = 0; j < 9; j++) {

                if (board[j][i] != '.') {
                    if (mp[board[j][i]] == undefined) {
                        mp[board[j][i]] = board[j][i];
                    } else {
                        return false;
                    }
                }

            }
            console.log(Object.values(mp));
        }
        if (invalid) {
            console.log('cols');
            return invalid;
        }
        console.log('diag check')
        var diag = {};
        var minJ = 0;
        var maxJ = 2;
        for (var d = 0; d < 9; d++) {
            diag = {};
            //d=0, row0 col0col1col2 col3col4col5 col6col7col8
            //d=0, row1 col0col1col2 col3col4col5
            //d=0, row2 col0col1col2 col3col4col5
            //d=1, row3 col0col1col2 col3col4col5
            //d=1, row4 col0col1col2 col3col4col5
            //d=1, row5 col0col1col2 col3col4col5
            //d=2, row6 col0col1col2 col3col4col5
            //d=2, row7 col0col1col2 col3col4col5
            //d=2, row8 col0col1col2 col3col4col5
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    let row = Math.floor(d/3) * 3 + i;
                    let col = Math.floor(d%3)*3+j;
                    if(board[row][col] != '.') {
                        console.log(row, col);
                    if(diag[board[row][col]] == undefined) {
                        diag[board[row][col]] = board[row][col];
                    } else {
                        return false;
                    }
                    }
                    
                }
            }
        }

        return true;
    }
}
