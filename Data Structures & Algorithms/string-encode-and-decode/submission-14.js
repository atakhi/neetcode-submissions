class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for(var str of strs) {
            res = res + str.length + '#' + str;
        }
        console.log(res);
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        for(var i=0;i<str.length;) {
            let j=i;
            while(str[j] != '#' && j <= str.length) {
                j++;
            }
            const len = +str.substring(i, j);
            res.push(str.substring(j+1, j+1+len));
            i = j + 1 + len;
        }
        return res;
    }
}
