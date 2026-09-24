class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for(var str of strs){
            res = res + (str.length + '#') + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //console.log(str);
        let res = [];
        for(var i=0;i<str.length;) {
            let j=i;
            while(str[j] != '#') {
                j++;
            }
            let len = +str.substring(i, j);
            console.log((j+1), (j+1+len), str.substring(j+1, j+1+len));
            res.push(str.substring(j+1, j+1+len));
            i = j + 1 + len;
        }
        return res;
    }
}
