import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import products from '../../products';

import { useParams } from 'react-router-dom'; // Import useParams

function ProductScreen() {
  // Use useParams to get the 'id' parameter
  const { id } = useParams();
  
  // Find the product using the 'id' parameter
  const product = products.find((p) => p._id === id);

  // Check if the product is not found
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}

export default ProductScreen;
