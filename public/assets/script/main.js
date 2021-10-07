/**
 * Given a string that contains words seperated by digits(0-9). Reverse words in place
 * Eg: asd1fa -> dsa1af
 **/



/**
 * step1: get the string as the variable name is str
 * step2: declare empty array named arr
 * step3: convert str in to the array as named arr and add number string(like '1') in that str
 * step4: declare two empty strings named as it_str and rev
 * step5: assign a for loop and iterate the arr
 * step6: check is the iterable element is present in alphabets a to z
 * step7: if yes push in to the it_str string
 * step8: if no 
 * step9: concat all strings and print 
 */


const reverseWords = (str) => {
    var arr = [];
    arr = str + "1";
    var it_str = "";
    var rev = "";


    for (let x in arr) {
        if (arr[x] >= 'a' && arr[x] <= 'z') {
            it_str += arr[x];

        } else {
            var spl = it_str.split("");
            var rev_arr = spl.reverse();
            var res = rev_arr.join("");
            rev += res;
            it_str = "";
            rev += arr[x];
        }
    }
    rev = rev.substring(0, rev.length - 1);
    return rev;

};


console.log(reverseWords("asts7hg8jsgtred5lyaass")); // stsa7gh8dertgsj5ssaayl
console.log(reverseWords("asts77hg8jsgtred5lyaass")); // stsa77gh8dertgsj5ssaayl
console.log(reverseWords("123")); // 123
console.log(reverseWords("asd")); // dsa
console.log(reverseWords("asd1f")); // dsa1f