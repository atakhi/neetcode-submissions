class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = [];
        //sort, hashmap
        // var mp = {};
        // for(var i=0;i<strs.length;i++) {
        //     var wd = strs[i].split('').sort().join();
        //     if(mp[wd] == undefined) {
        //         mp[wd] = [];
        //         mp[wd].push(strs[i]);
        //     } else {
        //         mp[wd].push(strs[i]);
        //     }
        // }
        // for(var key in mp) {
        //     res.push(mp[key]);
        // }

        //frequency array with hashmap
        var arr = [];
        var mp = {};
        
        for(var i=0;i<strs.length;i++) {
            for(var j=0;j<26;j++) {
                arr[j] = 0;
            }
            var wd = strs[i];
            for (let c of wd) {
                arr[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            var key = arr.join(',');

            if(!mp[key]) {
                mp[key]=[]
            }
            mp[key].push(strs[i]);
        }
        return Object.values(mp);
    }
}
