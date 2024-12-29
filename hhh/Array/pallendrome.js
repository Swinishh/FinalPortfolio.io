function isPalindrome(str) {
    // remove all and just check them
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    let reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the cleaned string is equal to its reversed version
    return cleanedStr === reversedStr;
}


console.log(isPalindrome("Race CaR"));  // Output: true

// let s="helloOOSSSSFFF";
// let s2= s.toLowerCase().toUpperCase;
// console.log(s2);    