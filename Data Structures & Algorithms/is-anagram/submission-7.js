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
        s = s.split('').sort().join();
        t = t.split('').sort().join();
        return s == t;

        //hash maps?
        // var mp1 = {};
        // var mp2 = {};
        // for(var i=0;i<s.length;i++) {
        //     if(mp1[s[i]] == undefined) {
        //         mp1[s[i]] = 1;
        //     } else {
        //         mp1[s[i]] = mp1[s[i]] + 1;
        //     }
        // }
        // for(var j=0;j<t.length;j++) {
        //     if(mp2[t[j]] == undefined) {
        //         return false;
        //     } else {
        //         mp2[t[j]] = mp2[t[j]] + 1;
        //     }
        // }
        // console.log(mp1[obj] + ' ' + mp2[obj])

        // Object.keys(mp1).forEach(obj=>{
        //     console.log(mp1[obj] + ' ' + mp2[obj])
        //     if(mp1[obj] != mp2[obj]) {
        //         return false;
        //     }
        // })
        // return true;
    }
}
