import React, { useState } from 'react';
import './Home.css'; // Import file CSS

const Home = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });
  const [cart, setCart] = useState({});

  const handleAddProduct = () => {
    const product = { ...newProduct, id: Date.now() };
    setProducts([...products, product]);
    setNewProduct({ name: '', price: '', description: '' });
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleBuyProduct = (product) => {
    setCart({ ...cart, [product.id]: (cart[product.id] || 0) + 1 });
  };

  const calculateTotal = () => {
    let total = 0;
    for (const productId in cart) {
      const product = products.find((p) => p.id.toString() === productId);
      if (product) {
        total += product.price * cart[productId];
      }
    }
    return total;
  };

  return (
    <div className="home-container">
      <div className="header">
        <h1>Website UTS</h1>
        <p>Halaman utama perbelanjaan. Silahkan Pilih</p>
      </div>
      <div className="product-form">
        <h2>Formulir Tambah Produk</h2>
        <input
          type="text"
          placeholder="Nama Produk"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Harga Produk"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Deskripsi Produk"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <button onClick={handleAddProduct}>Tambah Produk</button>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Harga: Rp{product.price}</p>
            <button onClick={() => handleBuyProduct(product)}>Beli</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Hapus</button>
          </div>
        ))}
      </div>
      <div className="shopping-cart">
        <h2>Keranjang Belanja</h2>
        <ul>
          {Object.keys(cart).map((productId) => (
            <li key={productId}>
              {products.find((product) => product.id.toString() === productId).name} - Jumlah: {cart[productId]}
            </li>
          ))}
        </ul>
        <p>Total Belanja: Rp{calculateTotal()}</p>
      </div>
      <div className="footer">
        <p>120140203-Dandy Arkandhiya Putra</p>
      </div>
    </div>
  );
};

export default Home;