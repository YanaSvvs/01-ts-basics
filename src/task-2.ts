interface Product {
  readonly id: number;
  title: string;
  description?: string;
}

const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};
console.log(`Product: ${JSON.stringify(product)}`);
const productWithoutDescription: Product = {
  id: 2,
  title: "Smartphone",
};

console.log(`Product without description: ${JSON.stringify(productWithoutDescription)}`);
