const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

const checkpalindrome = (str) => {
    const lowerString = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reverseString = lowerString.split("").reverse().join("");

    if (lowerString === reverseString) return true;
    
    return false;
};

function handleCheck() {
    const inputValue = textInput.value;

    if(!inputValue) {
        alert('Please input a value');
        return;
    };

    const isPalindrome = checkpalindrome(inputValue);
    result.innerText = isPalindrome ? `${inputValue} is a palindrome` : `${inputValue} is not a palindrome`;
    textInput.value = '';
};

checkBtn.onclick = function() {handleCheck()};