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
        s = s.split('');
        t = t.split('');
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

        //hash map?
        var mp = {};
        for(var i=0;i<s.length;i++) {
            if(mp[s[i]] == undefined) {
                mp[s[i]] = 1;
            } else {
                mp[s[i]] = mp[s[i]] + 1;
            }
        }
        Object.keys(mp).forEach(obj=>{
            console.log(mp[obj] + ' ' + obj)
            
        })
        for(var j=0;j<t.length;j++) {
            if(mp[t[j]] == undefined) {
                return false;
            } else {
                mp[t[j]] = mp[t[j]] - 1;
            }
        }
        var found = true;
        Object.keys(mp).forEach(obj=>{
            console.log(mp[obj] + ' ' + obj)
            if(mp[obj] != 0) {
                found = false;
            }
        })
        return found;
    }
}
