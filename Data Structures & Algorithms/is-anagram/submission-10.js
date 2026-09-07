class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) {
            return false;
        }
        // s = s.split('');
        // t = t.split('');
        //brute force O(n2) O(n)
        
        // for(var i=0;i<s.length;i++) {
        //     var found = false;
        //     for(var j=0;j<t.length;j++) {
        //         if(s[i] == t[j]) {
        //             found = true;
        //             t[j] = '*';
        //             break;
        //         }
        //     }
        // }
        // return found;

        //sorting? O(nlogn) O(1)
        // s = s.split('').sort().join();
        // t = t.split('').sort().join();
        // return s == t;
        
        //hash maps?
        var mp1 = {};
        var mp2 = {};
        for(var i=0;i<s.length;i++) {
            var ch=s[i];
            if(mp1[ch] == undefined) {
                mp1[ch] = 1;
            } else {
                mp1[ch] = mp1[ch] + 1;
            }

            ch = t[i];
            if(mp2[ch] == undefined) {
                mp2[ch] = 1;
            } else {
                mp2[ch] = mp2[ch] + 1;
            }
        }
        
        var ang = true;
        Object.keys(mp1).forEach(obj=>{
            console.log(mp1[obj] + ' ' + mp2[obj])
            if(mp1[obj] != mp2[obj]) {
                ang = false;
            }
        })
        return ang;
    }
}
