class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        let arr = [];
        for(var str of strs) {
            arr.push(str.length + '#' + str);
        }
        
        return arr.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str);
        let res = [];
        let i=0;
        while(i<str.length){
            let j=i;
            
            while(str[j] != '#' && j < str.length) {
                j++;
            }
            
            let len = +str.substring(i, j);
            console.log(i,j, len, str.substring(j+1, j+1+len));
            res.push(str.substring(j + 1, j + 1 + len));
            i = j + 1 + len;
        }
        return res;
    }
}
