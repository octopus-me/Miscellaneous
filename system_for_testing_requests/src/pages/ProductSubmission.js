import React, { useState } from 'react';

const ProductSubmission = () => {
  // State for form inputs and response message
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a product object
    const product = {
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };

    try {
      // Send a POST request using fetch
      const response = await fetch('http://localhost:8080/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Display success message
      setResponseMessage(`Product added successfully: ${JSON.stringify(data)}`);
    } catch (error) {
      // Display error message
      setResponseMessage(`Error adding product: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Product Submission</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>{responseMessage}</div>
    </div>
  );
};

export default ProductSubmission;
