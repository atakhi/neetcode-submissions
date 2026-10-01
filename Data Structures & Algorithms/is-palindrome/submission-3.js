class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length == 1){ 
            return true;
        }
        //s = s.toLowerCase();
        var left=0;
        var right = s.length - 1;
        
        
        while(left < right) {
            console.log(left, right);
            while((left < right) && (!this.isAlphaNum(s[left]))) {
                left++;
            }
            while((right > left) && (!this.isAlphaNum(s[right]))) {
                right--;
            }
            
            if(s[left].toLowerCase() != s[right].toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    isAlphaNum(c) {
        console.log(c);
        return ( (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || 
        (c >='0' && c <= '9'))
    }
}
