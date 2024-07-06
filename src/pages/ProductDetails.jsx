import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // For demonstration purposes, we'll use a mock API call
        // In a real application, you would fetch from your actual API
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto">
        <img src={product.image} alt={product.title} className="w-full h-64 object-contain mb-4" />
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-2xl font-semibold mb-4">${product.price}</p>
        <p className="mb-4">{product.description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add to Cart
        </button>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          {/* In a real application, you would map through actual reviews here */}
          <div className="bg-gray-100 p-4 rounded">
            <p><strong>John Doe</strong></p>
            <p>Great product! Highly recommended.</p>
            <p>Rating: 5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;