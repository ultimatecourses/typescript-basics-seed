interface Person {
    name: string;
    age: number;
}

interface PersonMistake {
    ame: string;
    age: number;
}



export function testAnimal() {
    const peter = {name: 'Peter', age: 18};
    const peter2: any = {ame: 'Peter', age: 18};
    const textJson = JSON.stringify(peter);
    const newPeter = JSON.parse(textJson);
    const newPeter2 = JSON.parse(textJson) as Person;
    nameOfPerson(peter2 as Person);

}

function nameOfPerson(person: Person) {
    console.log(person);
}