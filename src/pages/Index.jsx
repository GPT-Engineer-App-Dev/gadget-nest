import React from 'react';

const Index = () => {
  return (
    <div>
      <section className="hero text-center py-20 bg-gray-200">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-xl">Discover amazing products and deals!</p>
      </section>

      <section className="featured-products py-20">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="product bg-white p-4 shadow-md">
            <h3 className="text-xl font-bold">Product 1</h3>
            <p className="text-gray-700">Description of product 1.</p>
          </div>
          <div className="product bg-white p-4 shadow-md">
            <h3 className="text-xl font-bold">Product 2</h3>
            <p className="text-gray-700">Description of product 2.</p>
          </div>
          <div className="product bg-white p-4 shadow-md">
            <h3 className="text-xl font-bold">Product 3</h3>
            <p className="text-gray-700">Description of product 3.</p>
          </div>
        </div>
      </section>

      <section className="promotional-offers py-20 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">Promotional Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="offer bg-white p-4 shadow-md">
            <h3 className="text-xl font-bold">Offer 1</h3>
            <p className="text-gray-700">Details of promotional offer 1.</p>
          </div>
          <div className="offer bg-white p-4 shadow-md">
            <h3 className="text-xl font-bold">Offer 2</h3>
            <p className="text-gray-700">Details of promotional offer 2.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
