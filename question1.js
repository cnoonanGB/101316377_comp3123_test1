const lowerCaseWords = () => {
    const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
    var newArray = []
    var counter = 0;
    for (x=0; x < mixedArray.length; x++) {
        if (typeof mixedArray[x] === 'string') {
            newArray.push(mixedArray[x].toLowerCase());
            counter++;
        }
    }

    return newArray;
}

console.log(lowerCaseWords());


