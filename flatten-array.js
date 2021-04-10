function deepFlat(arr) {
    //Using map()
    // let output = [];
    // arr.map((elem) => {
    //     Array.isArray(elem) ? output.push(...deepFlat(elem)) : output.push(elem);
    // });    
    // return output;

    //using reduce()
    return arr.reduce((acc, elem) => {
        Array.isArray(elem) ? acc.push(...deepFlat(elem)) : acc.push(elem);
        return acc;
    }, []);
}

console.log(deepFlat([1, 2, 3, [4, 5, [6, 7, [8]]]]));