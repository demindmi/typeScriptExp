interface Product {
  id: number;
  name: string;
  price: number;
}

const getProduct = (id: number): Product => {
  return {
    id,
    name: `Banana with id ${id}`,
    price: 1.99,
  };
};

const product = getProduct(1);

const showProduct = (name: string, price: number) => {
  console.log(`Product: ${name} costs ${price}`);
};

showProduct(product.name, product.price);
