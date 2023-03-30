let list: string[] = ['a', 'b', 'c'];
let list2: Array<string> = ['a', 'b', 'c'];

list.push("23")
list2.push('d') 

const manager: [string, number] = ['Federica', 33]
const manager2: [string, number] = ['Juan', 35]
const manager3: [string, number] = ['Olga', 30]


let randomNumbers: number[] = [];
let nextNumber: number;
for (let i = 0; i < 10; i++) {
  nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  randomNumbers.push(nextNumber);
}

console.log(randomNumbers);