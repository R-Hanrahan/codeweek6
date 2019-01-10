// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// Question 2: Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added together,
// give the target number. For example: answer([1,2,3], 4)should return [1,3]

// Question 3: Write a function that converts HEX to RGB. 
// Then Make that function auto-dect the formats so that if you enter HEX color format
// it returns RGB and if you enter RGB color format it returns HEX.

//Solve 3 initial hextorgb
function hexToRgb() {
    inputHex = prompt('Please enter hexadecimal:');
    if (inputHex.startsWith('#') && inputHex.length === 7 ) {
        red = inputHex.slice(1, 3);
        redRgb = parseInt(red, 16);
        green = inputHex.slice(3, 5);
        greenRgb = parseInt(green, 16);
        blue = inputHex.slice(5, 7);
        blueRgb = parseInt(blue, 16);
        return alert('rgb(' + redRgb + ',' + greenRgb + ',' + blueRgb + ')')
    }
    else {
        return alert('Enter valid hexadecimal color and try again!');
    }
}

//Solve 3 complete
function hexToRgbAndRgbToHex() {
    input = prompt('Please enter hexadecimal or rgb:');
    if (input.startsWith('#') && input.length === 7 ) {
        red = input.slice(1, 3);
        redRgb = parseInt(red, 16);
        green = input.slice(3, 5);
        greenRgb = parseInt(green, 16);
        blue = input.slice(5, 7);
        blueRgb = parseInt(blue, 16);
        return alert('rgb(' + redRgb + ',' + greenRgb + ',' + blueRgb + ')')
    }
    else if (input) {

    }
    else {
        return alert('Enter valid hexadecimal or rgb color and try again!');
    }
}
