class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       
        let res = '';
        let arr = [];
        for(var str of strs) {
            const len = str.length;
            arr.push((len + '#' + str));
        }
        console.log(arr.join(''));
        return arr.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i=0;
       while(i < str.length){
        let j=i;
            while(str[j] != '#' || j >= str.length) {
                j++;
            }
            var len = +str.substring(i, j);
            res.push(str.substring(j + 1, 1 + len + j));
            i = j + 1 + len;
       }
        
        
        return res;
    }
}
