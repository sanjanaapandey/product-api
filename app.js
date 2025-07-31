const express = require('express');
const app = express();
const productRoutes = require('./routes/product.routes');

// Middleware
app.use(express.json());

// Serve frontend (public/index.html)
app.use(express.static('public'));

// Mount API routes
app.use('/products', productRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
