/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return 0;
    }
    let curr = x
    let rev = 0;

    while(x>0){
        let digit = x%10
        rev = rev * 10 + digit
        x = Math.floor(x/10);
    }
    return curr===rev
};