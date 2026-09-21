class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var arr = Array(26).fill(1);
        var mp = {};
        for(var i=0;i<strs.length;i++) {
            arr = Array(26).fill(1);
            let str = strs[i];
            for(var ch of str) {
                arr[ch.charCodeAt(0) - 97]++;
            }
            if(mp[arr.toString()] == undefined) {
                mp[arr.toString()] = [];
            }
            mp[arr.toString()].push(str);
        }
        return Object.values(mp);
    }
}
