// What does the following code return?
// new Set([1,1,2,2,3,4])
Set { 1, 2, 3, 4 }


// What does the following code return?
// [...new Set("referee")].join("")
"ref"

// What does the Map m look like after running the following code?
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
Map(2) {
    [1, 2, 3] => true,
    [1, 2, 3] => false
  }
  
//   Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
//   hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false
const hasDuplicate = (arr) => {
    const seen = new Set();
    for (const item of arr) {
        if (seen.has(item)) {
            return true; // Duplicate found
        }
        seen.add(item); // Add the item to the set
    }
    return false; // No duplicates found
};

// Example Usage
console.log(hasDuplicate([1, 3, 2, 1])); // true
console.log(hasDuplicate([1, 5, -1, 4])); // false

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }
const vowelCount = (str) => {
    const vowels = 'aeiou';
    const vowelMap = new Map();

    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            // If the vowel is already in the map, increment its count
            vowelMap.set(char, (vowelMap.get(char) || 0) + 1);
        }
    }

    return vowelMap;
};

// Example Usage
console.log(vowelCount('awesome')); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt'));    // Map { 'o' => 1 }
