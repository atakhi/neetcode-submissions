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
        for(const ch of s) {
            mp[ch] = (mp[ch] || 0) + 1;
        }
        for(const ch of t) {
            if(mp[ch] == undefined) {
                return false;
            } else {
                mp[ch] = mp[ch] - 1;
            }
        }
        for(var obj in mp) {
            if(mp[obj] != 0){ 
                return false;
            }
        }
        return true;
    }
}
