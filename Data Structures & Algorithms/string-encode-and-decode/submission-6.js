class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        var res = [];
        for(const str of strs) {
            res.push(str.length + '#' + str);
        }
        console.log(res);
        return res.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        var res = [];
        var wd = '';
        var i=0;
        while(i<str.length) {
            var j = i;
            while(str[j] != '#') {
                j++;
            }
            var len = +str.substring(i, j);
            res.push(str.substring(j+1, j+ 1+len));
            i = j+1+ len;
        }
        return res;
    }
}
