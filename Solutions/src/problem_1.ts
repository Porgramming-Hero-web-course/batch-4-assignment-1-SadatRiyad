{
    // Problem_1 
    function sumArray( array: number[]): number {
        let sum: number = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
            }
        return sum;
    }

    const arr: number[] = [1, 2, 3, 4, 5];
    // console.log(sumArray(arr)); // 15
}