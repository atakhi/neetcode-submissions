class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let res = [];
        let mp = {};
        for(var i=0;i<strs.length;i++) {
            var wd = strs[i].split('').sort().join();
            if(!mp[wd]) {
                mp[wd] = [];
                mp[wd].push(strs[i]);
            } else {
                mp[wd].push(strs[i]);
            }
        }
        Object.keys(mp).forEach(obj => {
            res.push(mp[obj]);
        })
        return res;
    }
}
