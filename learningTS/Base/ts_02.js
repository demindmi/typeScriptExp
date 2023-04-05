var getProduct = function (id) {
    return {
        id: id,
        name: "Banana with id ".concat(id),
        price: 1.99,
    };
};
var product = getProduct(1);
var showProduct = function (name, price) {
    console.log("Product: ".concat(name, " costs ").concat(price));
};
showProduct(product.name, product.price);
