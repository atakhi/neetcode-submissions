class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length) {
             return false;
        }
        var smap = {};
        for(var i=0;i<s.length;i++){ 
            var ch = s[i];
            if(!smap[ch]) {
                smap[ch] = 1;
            } else {
                smap[ch] = smap[ch] + 1;
            }
        }
        
        for(var j=0;j<t.length;j++) {
            var ch = t[j];
            if(!smap[ch]) {
                return false;
            } else {
                smap[ch] = smap[ch] - 1;
            }
        }
        Object.keys(smap).forEach(obj => {
            if(smap[obj] != 0) {
                return false;
            }
        })
        return true;
    }
}
