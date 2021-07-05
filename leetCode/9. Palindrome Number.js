var isPalindrome = function(x) {
    var s=String(x);
    var str='';
    for(var i=s.length-1; i>=0; i--){
        str+=s[i];
    }
    return x==str;
};
