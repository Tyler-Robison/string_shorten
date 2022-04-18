
function stringShortening(str) {
    let string = '';
    let count = 1;

    for (let i = 1; i < str.length; i++) {
        const prevChar = str[i - 1];
        const char = str[i];

        // increment count if same char as last iteration
        // if not, add to string via createString
        if (i !== str.length - 1) {
            if (char === prevChar) count++;
            else {
                string += createString(prevChar, count)
                count = 1;
            }
        }

        // handle last idx pos
        // If last character is same as previous, add to string with count + 1
        // else add string for chars prior to last, then run function again with count of 1
        else {
            if (char === prevChar) {
                string += createString(prevChar, count + 1)
            }

            else {
                string += createString(prevChar, count)
                string += createString(char, 1)
            }
        }
    }
    return string
}

// returns correct string based on char and count
function createString(char, count) {
    let subString = '';
    while (count > 0) {
        if (count === 1) {
            subString += `${char}`;
            count = 0;
        }
        else if (count < 10) {
            subString += `${count}${char}`;
            count = 0;
        }
        else {
            subString += `9${char}`;
            count -= 9;
        }
    }
    return subString
}

console.log(stringShortening(`awwwwwwllllcwlllx`)) // a6w4lcw3lx
console.log(stringShortening(`aaccc`)) // 2a3c
console.log(stringShortening(`osjfh`)) // osjfh
console.log(stringShortening(`aaaUUuqqaa`)) // 3a2Uu2q2a
console.log(stringShortening(`ooaaaaaaaaaaaaaaaa`)) // 2o9a7a
console.log(stringShortening(`ooaaaaaaaaaaaaaaaaaaaaaaaaaa`)) // 2o9a9a8a
console.log(stringShortening(`aaabccC`)) // 3ab2cC
console.log(stringShortening(`dddddddddddGgGgdddddddddddd`)) // 9d2dGgGg9d3d