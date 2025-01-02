import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import "./Home.css"
import image1 from '../assets/141_banner_new-desk_1440x.jpg'
import image2 from '../assets/1440x602_8b70d004-1ffd-4711-8578.jpg'
import image3 from '../assets/480_Desktop_2_1440x.jpg'
import image4 from '../assets/Artboard_2_copy_1440x.jpg'
import image5 from '../assets/shop-now-desk_1440x.jpg'
import image6 from '../assets/ION_Banner_WEB_f2f301b9-04e1-41f.jpg'
import saleImage from '../assets/Screenshot 2025-01-02 154053.png'
import ProductList from '../Component/ProductCard'

const Home = () => {

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const images = [image1, image2, image3, image4, image5, image6];

  useEffect(() => {
    setFade(true);
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div className='home'>
      <div className="top_discount">
        <p>Get 5% Off on First Order | Code: WELCOME5 | Shop Now!</p>
      </div>
      <Navbar />
      <div className='slider'>
        <div
          className={`slider-img ${fade ? 'fade-in' : 'fade-out'}`}
          key={current}>
          <img src={images[current]} className="banner-img" alt="" />
        </div>
      </div>
      <div className="feature">
        <div className="feature-item">
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123" className="warranty" alt="" />
          <p><strong>1 year</strong><br />Warranty</p>
        </div>
        <div className="feature-item">
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123" className="replace" alt="" />
          <p><strong>7-day</strong><br />Replacement</p>
        </div>
        <div className="feature-item">
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123" className="delivery" alt="" />
          <p><strong>Free Express</strong><br />Delivery*</p>
        </div>
        <div className="feature-item">
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123" className="gst" alt="" />
          <p><strong>GST</strong><br />Billing</p>
        </div>
      </div>
      <div>
        <h2 className='live_sale'>Sale <strong>Is Live</strong></h2>
        <ProductList />
      </div>
      <img src={saleImage} className='saleImage' />
      <div>
        <h2 className='live_sale'>New Year,<strong>New Deals</strong></h2>
        <ProductList />
      </div>
    </div>
  )
}

export default Home
