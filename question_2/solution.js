function firstRecurringChar(str) {
    let charMap = {};
    for (let char of str) {
        if (charMap[char]) {
            return char;
        } else {
            charMap[char] = true;
        }
    }
    return null;
}

