"use strict";
{
    // Problem_2
    function removeDuplicates(array) {
        let newArray = [];
        array.forEach((element, index) => {
            if (array.indexOf(element) === index) {
                newArray.push(element);
            }
        });
        return newArray;
    }
    const arr = [1, 2, 2, 3, 4, 4, 5];
    // console.log(removeDuplicates(arr)); //[1, 2, 3, 4, 5]
}