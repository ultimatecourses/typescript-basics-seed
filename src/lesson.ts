export function mergeArrays(arr1: number[], arr2: number[] = [2, 4, 6, 8]) {
    const newArr = [...arr1, ...arr2];
    const sortedNumbers = newArr.sort((a, b): number =>{
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    console.log(sortedNumbers);
    const firstNumber = sortedNumbers[0];
    console.log('First number: ' + firstNumber);
}


export function mergeObjects(address: {street: string, city: string}, person = {name: 'John', sName: 'White'}) {
    const personAddress = { ...address, ...person };
    console.log(personAddress);
    const {name, street} = personAddress;
    //const personalInfo = {};
}

export function sum() {

}