export function mergeArrays(arr1: number[], arr2: number[] = [2, 4, 6, 8]) {
    const newArr = [...arr1, ...arr2];
    return newArr.sort((a, b): number => a - b);
}


export function mergeObjects(address: {street: string, city: string}, person = {name: 'John', sName: 'White'}) {
    return { ...address, ...person };
}

export function sum(...numbers) {
    return numbers.reduce((prev, next) => {
        if (prev < next) {
            return prev;
        } else {
            return next;
        }


    });
}