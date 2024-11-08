{
    // Problem_5
    function getProperty<OBJECT extends object, K extends keyof OBJECT>(obj: OBJECT, key: K): OBJECT[K] {
        return obj[key];
    }

    //Input-1
    const person = { name: "Alice", age: 30 };
    // console.log(getProperty(person, "name")); //Output: Alice
    
    //Input-2
    const person2 = { name: "Alice", age: 30 };
    // console.log(getProperty(person2, "age")); //Output: 30
}