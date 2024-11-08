{
    // Problem_4
    type Circle = {
        shape: "circle";
        radius: number;
    };
    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    };
    type Shape = Circle | Rectangle;

    function calculateShapeArea(shape: Shape): number {
        if ("radius" in shape) {
            return Math.PI * shape.radius ** 2;
        } else {
            return shape.width * shape.height;
        }
    }

    //Input-1
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    // console.log(circleArea); //Output: 78.54

    //Input-2
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    // console.log(rectangleArea); //Output: 24
}