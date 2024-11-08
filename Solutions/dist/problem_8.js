"use strict";
{
    function validateKeys(obj, keys) {
        for (let key of keys) {
            if (!(key in obj)) {
                return false;
            }
        }
        return true;
    }
    //Input
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    //Output
    // console.log(validateKeys(person, ["name", "age"])); //Expected output: true
}
