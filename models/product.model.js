const { products, getNextId } = require('../data/db');

exports.getAll = () => products;

exports.getById = (id) => products.find(p => p.id === id);

exports.add = ({ name, price, description }) => {
  const product = {
    id: getNextId(),
    name,
    price,
    description,
  };
  products.push(product);
  return product;
};

exports.update = (id, { name, price, description }) => {
  const product = products.find(p => p.id === id);
  if (!product) return null;

  product.name = name ?? product.name;
  product.price = price ?? product.price;
  product.description = description ?? product.description;

  return product;
};

exports.remove = (id) => {
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return null;
  return products.splice(index, 1)[0];
};
