"use strict";
{
    function updateProfile(profile, updates) {
        return Object.assign(Object.assign({}, profile), updates);
    }
    //Input
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    //Output
    // console.log(updateProfile(myProfile, { age: 26 }));
}
