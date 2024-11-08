{
    // Problem_8
    type Person = {
        name: string,
        age: number,
        email: string
    };
    function validateKeys<O extends object>(obj: O, keys: (keyof O)[]): boolean {
        for(let key of keys){
            if(!(key in obj)){
                return false
            }
        }
        return true;
    }

    //Input
    const person : Person = { name: "Alice", age: 25, email: "alice@example.com" };
    //Output
    // console.log(validateKeys(person, ["name", "age"])); //Expected output: true

}