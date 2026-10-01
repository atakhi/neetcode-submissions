class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        var mp = new Set();
        for(var i=0;i<9;i++){
            mp.clear();
            for(var j=0;j<9;j++) {
                var curr = board[i][j];
                if(curr == '.')
                    continue;
                if(mp.has(curr)) {
                    return false;
                } else {
                    mp.add(curr);
                }
            }
        }
        mp.clear();
        for(var i=0;i<9;i++){
            mp.clear();
            for(var j=0;j<9;j++) {
                var curr = board[j][i];
                if(curr == '.')
                    continue;
                if(mp.has(curr)) {
                    return false;
                } else {
                    mp.add(curr);
                }
            }
        }
        mp.clear();
        for(var sq=0;sq<9;sq++){
            mp.clear();
            for(var i=0;i<3;i++){
                for(var j=0;j<3;j++) {
                    var row = Math.floor(sq/3)*3+i;
                    var col = Math.floor(sq%3)*3+j;
                    if(board[row][col] == '.')
                        continue;
                    var curr = board[row][col];
                    if(curr == '.')
                        continue;
                    if(mp.has(curr)) {
                        return false;
                    } else {
                        mp.add(curr);
                    }
                }
            }
        }
        return true;
    }
}
