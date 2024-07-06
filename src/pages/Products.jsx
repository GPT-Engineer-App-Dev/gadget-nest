import React, { useState } from 'react';
import './Products.css';

const sampleProducts = [
  { id: 1, name: 'Product 1', category: 'Category 1', price: 100 },
  { id: 2, name: 'Product 2', category: 'Category 2', price: 200 },
  { id: 3, name: 'Product 3', category: 'Category 1', price: 150 },
  { id: 4, name: 'Product 4', category: 'Category 3', price: 250 },
  { id: 5, name: 'Product 5', category: 'Category 2', price: 300 },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory === 'All'
    ? sampleProducts
    : sampleProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="products-page">
      <aside className="sidebar">
        <h2>Filter by Category</h2>
        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">All</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 3">Category 3</option>
        </select>
      </aside>
      <main className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Products;
```

```css
/* Products.css */
.products-page {
  display: flex;
}

.sidebar {
  width: 200px;
  padding: 20px;
  background-color: #f4f4f4;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.product-card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  text-align: center;
}