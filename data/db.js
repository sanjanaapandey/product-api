let products = [];
let nextId = 1;

module.exports = {
  products,
  getNextId: () => nextId++,
};
