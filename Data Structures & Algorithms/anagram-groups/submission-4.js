class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var mp = {};
        var i=0;
        for(let str of strs) {
            str = str.split('').sort().join();
            if(mp[str] == undefined) {
                mp[str] = [];
            }
            mp[str].push(i);
            i++;
        }
        i=0;
        let res=[];
        for(var obj in mp) {
            const arr = mp[obj];
            res.push(arr.map(i => strs[i]));
        }
        return res;
    }
}
