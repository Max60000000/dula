
"use client"

import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './productSlice';
import './globals.css'
import ProductList from './ProductList';
import Navbar from './Navbar';
import Miiddle from './Miiddle';
import Footer from './Footer';

export default function RootLayout({ children, products }) {
  const [fetchedProducts, setFetchedProducts] = useState(products);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://getbizzusa-api.lbtechnology.co/products');
      const data = await response.json();

      setFetchedProducts(data);
    }

    if (!fetchedProducts) {
      fetchProducts();
    }
  }, [fetchedProducts]);

  return (
    <Provider store={store}>
      <div className={inter.className}>
        <Navbar />
        <Miiddle />
        <ProductList products={fetchedProducts} />
        <Footer />
      </div>
      {children}
    </Provider>
  );
}
