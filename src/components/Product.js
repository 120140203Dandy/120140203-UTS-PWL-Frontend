// src/components/Product.js
import React from 'react';

const Product = ({ product, onDelete }) => {
  return (
    <div className="product">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Harga: Rp{product.price}</p>
      <button onClick={() => onDelete(product.id)}>Hapus</button>
    </div>
  );
};

export default Product;