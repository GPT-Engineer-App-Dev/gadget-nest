import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const sampleProducts = [
  { id: 1, name: 'Smartphone X', category: 'Phones', price: 799 },
  { id: 2, name: 'Laptop Pro', category: 'Computers', price: 1299 },
  { id: 3, name: 'Wireless Earbuds', category: 'Audio', price: 149 },
  { id: 4, name: '4K Smart TV', category: 'TVs', price: 899 },
  { id: 5, name: 'Gaming Console', category: 'Gaming', price: 499 },
];

const Products = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  const filteredProducts = sampleProducts.filter(product =>
    (product.name.toLowerCase().includes(searchQuery.toLowerCase())) && 
    (selectedCategory === 'All' || product.category === selectedCategory) &&
    (product.price >= priceRange[0] && product.price <= priceRange[1])
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <label className="block mb-2">Category</label>
                <Select onValueChange={handleCategoryChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Phones">Phones</SelectItem>
                    <SelectItem value="Computers">Computers</SelectItem>
                    <SelectItem value="Audio">Audio</SelectItem>
                    <SelectItem value="TVs">TVs</SelectItem>
                    <SelectItem value="Gaming">Gaming</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block mb-2">Price Range</label>
                <Slider
                  min={0}
                  max={2000}
                  step={10}
                  value={priceRange}
                  onValueChange={handlePriceRangeChange}
                />
                <div className="flex justify-between mt-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
        <main className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? filteredProducts.map(product => (
              <Card key={product.id}>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Category: {product.category}</p>
                  <p>Price: ${product.price}</p>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Add to Cart
                  </button>
                </CardContent>
              </Card>
            )) : (
              <p>No products found matching your search criteria.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;