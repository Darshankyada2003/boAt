import React from 'react';
import './ProductCard.css'

const products = [
  {
    id: 1,
    image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/plastic-161.jpg?v=1734517319',
    engraving: true,
    label: '40 Hours Playback',
    rating: 4.9,
    name: 'boAt Airdopes 161',
    price: 899,
    originalPrice: 2490,
    discount: '64% off',
  },
  {
    id: 2,
    image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/r255pro_55d805bc-f2e1-4861-9533-8eee57081305.jpg?v=1682573437',
    bestseller: true,
    label: '60 Hours Playback',
    rating: 4.8,
    name: 'boAt Rockerz 255 Pro+',
    price: 999,
    originalPrice: 3999,
    discount: '75% off',
  },
  {
    id: 3,
    image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_Alpha.jpg?v=1688452927',
    extraDiscount: 100,
    label: '35 Hours Playback',
    rating: 4.9,
    name: 'boAt Airdopes Alpha',
    price: 999,
    originalPrice: 3499,
    discount: '71% off',
  },
  {
    id: 4,
    image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdop800_Black.png?v=1716051692',
    newLaunch: true,
    label: 'Dolby Audio',
    rating: 4.8,
    name: 'boAt Airdopes 800',
    price: 1599,
    originalPrice: 6499,
    discount: '75% off',
  },
  {
    id: 5,
    image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Lifestyle.jpg?v=1717817159',
    newLaunch: true,
    label: '100 Hours Playback',
    rating: 4.7,
    name: 'boAt Airdopes 181 Pro',
    price: 1199,
    originalPrice: 4999,
    discount: '76% off',
  },
  {
    id: 6,
    image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745',
    engraving: true,
    label: '120 Hours Playback',
    rating: 5.0,
    name: 'boAt Nirvana Ion',
    price: 1799,
    originalPrice: 7999,
    discount: '77% off',
  },
];


const ProductCard = ({ product }) => {


  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      {product.extraDiscount && <span className="badge extra">₹{product.extraDiscount} Off</span>}
      {product.newLaunch && <span className="badge new-launch">New Launch</span>}
      {product.bestseller && <span className="badge bestseller">Bestseller</span>}
      {product.engraving && <span className="badge engraving">Engraving</span>}
      <div className="label">{product.label}</div>
      <div className="rating">⭐ {product.rating}</div>
      <h3 className="name">{product.name}</h3>
      <div className="price-section">
        <span className="price">₹{product.price}</span>
        <span className="original-price">₹{product.originalPrice}</span>
        <span className="discount">{product.discount}</span>
      </div>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
