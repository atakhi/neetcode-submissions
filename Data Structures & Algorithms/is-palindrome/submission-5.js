class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length == 1){
            return true;
        }
        var left=0;
        var right = s.length - 1;
        while(left < right) {
            while((left < right) && (!this.isAlphaNum(s[left]))) {

                left++;
            }
            while((right > left) && (!this.isAlphaNum(s[right]))) {
                 
                right--;
            }
            if(s[left].toLowerCase() != s[right].toLowerCase()) {
                console.log(s[left],left,s[right], right);
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }

    isAlphaNum(c) {
        console.log(c);
        if((c >= 'A' && c <= 'Z')
        ||(c >= 'a' && c <= 'z')
        || (c >= '0' && c <= '9')) {
            return true;
        }
         return false;
    }
}
