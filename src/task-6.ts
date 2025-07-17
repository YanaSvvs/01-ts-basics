function getFirstElement<T>(arr: T[]): T | undefined {
  if (arr.length === 0) {
    return undefined; 
  }
  return arr[0];
}

console.log(getFirstElement<number>([1, 2, 3]));           
console.log(getFirstElement<string>(["a", "b", "c"]));     
console.log(getFirstElement<boolean>([true, false, true])); 

console.log(getFirstElement<number>([])); 
