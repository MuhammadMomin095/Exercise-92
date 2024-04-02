function removeLastElement<T>(arr: T[]): T | undefined {
    return arr.pop();
} 

const fruits: string[] = ['Apple', 'Banana', 'Cherry'];

console.log(removeLastElement(fruits)); // 'Cherry'

console.log(fruits);