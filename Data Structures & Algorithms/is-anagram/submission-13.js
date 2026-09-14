class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        var mp = {};
        if(s.length != t.length){
            return false;
        }
        s=s.split('').sort().join();
        t=t.split('').sort().join();

        var i=0;
        for(let ch of s) {
            if(ch != t[i]) {
                return false;
            }
            i++;
        }
        return true;
    }
}
