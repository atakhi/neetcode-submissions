class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = [];
        //sort, hashmap
        var mp = {};
        for(var i=0;i<strs.length;i++) {
            var wd = strs[i].split('').sort().join();
            if(mp[wd] == undefined) {
                mp[wd] = [];
                mp[wd].push(strs[i]);
            } else {
                mp[wd].push(strs[i]);
            }
        }
        for(var key in mp) {
            res.push(mp[key]);
        }
        return res;
    }
}
