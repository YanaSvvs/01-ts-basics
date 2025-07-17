function getFirstElement<T>(arr: T[]): T {
  if (arr.length === 0) {
    throw new Error("Масив не може бути порожнім."); 
  }
  return arr[0];
}

console.log(getFirstElement<number>([1, 2, 3]));
console.log(getFirstElement<string>(["a", "b", "c"]));
console.log(getFirstElement<boolean>([true, false, true]));

try {
  console.log(getFirstElement<number>([]));
} catch (error: any) {
  console.error("Помилка:", error.message);
}
