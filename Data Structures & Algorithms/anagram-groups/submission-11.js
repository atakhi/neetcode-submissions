class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var mp={};
        for(var str of strs){
            let arr = Array(26).fill(0);
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
