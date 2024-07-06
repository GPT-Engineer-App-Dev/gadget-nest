import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const sampleProducts = [
  { id: 1, name: 'Smartphone X', category: 'Phones', price: 799, brand: 'TechCo' },
  { id: 2, name: 'Laptop Pro', category: 'Computers', price: 1299, brand: 'CompuTech' },
  { id: 3, name: 'Wireless Earbuds', category: 'Audio', price: 149, brand: 'SoundWave' },
  { id: 4, name: '4K Smart TV', category: 'TVs', price: 899, brand: 'VisualPro' },
  { id: 5, name: 'Gaming Console', category: 'Gaming', price: 499, brand: 'GameMaster' },
];

const Products = () => {
  const [products, setProducts] = useState(sampleProducts);
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...new Set(sampleProducts.map(product => product.category))];
  const maxPrice = Math.max(...sampleProducts.map(product => product.price));

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, priceRange, searchQuery]);

  const filterProducts = () => {
    let filtered = products;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

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
                <Label htmlFor="search">Search</Label>
                <Input
                  id="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="category">Category</Label>
                <Select onValueChange={handleCategoryChange} value={selectedCategory}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Price Range</Label>
                <Slider
                  min={0}
                  max={maxPrice}
                  step={10}
                  value={priceRange}
                  onValueChange={handlePriceRangeChange}
                  className="mt-2"
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
                  <p>Brand: {product.brand}</p>
                  <p>Price: ${product.price}</p>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Add to Cart
                  </button>
                </CardContent>
              </Card>
            )) : (
              <p>No products found matching your criteria.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;