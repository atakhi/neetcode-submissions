class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        var mp={};
        console.log('rows');
        for(var i=0;i<9;i++){
            mp={};
            for(var j=0;j<9;j++){
                if(board[i][j] == '.')
                    continue;
                if(mp[board[i][j]] == undefined){
                    mp[board[i][j]] = board[i][j];
                } else {
                    console.log(i, j)
                    return false;
                }
            }
        }
        console.log('cols');
        mp={};
        for(var i=0;i<9;i++){
            mp={};
            for(var j=0;j<9;j++){
                if(board[j][i] == '.')
                    continue;
                if(mp[board[j][i]] == undefined){
                    mp[board[j][i]] = board[j][i];
                } else {
                    console.log(i, j)
                    return false;
                }
            }
        }
        mp={};
        console.log('3x3')
        for(var sq=0;sq<9;sq++){
            mp = {};
            console.log(sq + 'box');
            for(var i=0;i<3;i++){
                for(var j=0;j<3;j++){
                    
                    let row = Math.floor(sq/3) * 3 + i;
                    let col = Math.floor(sq%3)*3+j;
                    if(board[row][col] == '.')
                        continue;
                    console.log(row, col);
                    if(mp[board[row][col]] == undefined) {
                        mp[board[row][col]] = board[row][col];
                    } else {
                        console.log(row, col)
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
