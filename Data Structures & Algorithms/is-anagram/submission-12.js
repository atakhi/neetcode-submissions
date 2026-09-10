class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let mp = {};
        let mp2 = {};
        if(s.length != t.length) {
            return false;
        }
        for(let ch of s) {
            mp[ch] = (mp[ch] || 0) + 1;
        }
        for(let ch of t) {
            mp2[ch] = (mp2[ch] || 0) + 1;
        }
        for(let obj in mp) {
            if(mp[obj] != mp2[obj]) {
                return false;
            }
        }
        return true;
    }
}
