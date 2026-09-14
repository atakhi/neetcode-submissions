class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var mp={};
        let arr = [];
        for(let i=0;i<26;i++) {
            arr[i] = 0;
        }
        for(const str of strs) {
            for(let ch of str) {
                arr[(ch.charCodeAt(0) - 97)] = arr[(ch.charCodeAt(0) - 97)] + 1;
            }
            if(mp[arr.toString()] == undefined) {
                mp[arr.toString()] = [];
            }
            mp[arr.toString()].push(str);
 
            for(let i=0;i<26;i++) {
                arr[i] = 0;
            }
        }
        return Object.values(mp);
    }
}
