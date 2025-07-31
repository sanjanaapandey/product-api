const Product = require('../models/product.model');
const { paginate } = require('../utils/pagination');

exports.getAllProducts = (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const products = Product.getAll();
  const result = paginate(products, parseInt(page), parseInt(limit));
  res.json(result);
};

exports.getProductById = (req, res) => {
  const product = Product.getById(parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

exports.createProduct = (req, res) => {
  const product = Product.add(req.body);
  res.status(201).json(product);
};

exports.updateProduct = (req, res) => {
  const product = Product.update(parseInt(req.params.id), req.body);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

exports.deleteProduct = (req, res) => {
  const deleted = Product.remove(parseInt(req.params.id));
  if (!deleted) return res.status(404).json({ message: "Product not found" });
  res.json(deleted);
};

exports.searchProducts = (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ message: "Search query is required" });

  const results = Product.getAll().filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase())
  );
  res.json(results);
};
