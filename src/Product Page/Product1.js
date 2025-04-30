import React from 'react'
import './Product1.css'
import Navbar from '../Component/Navbar/Navbar'

const Product1 = () => {

    let rows = 5;
    let pattern = "";
    for (let n = 1; n <= rows; n++) {
        for (let space = 1; space <= rows - n; space++) {
            pattern += " ";
        }
        for (let num = 1; num <= 2 * n - 1; num++) {
            pattern += "*";
        }
        pattern += "\n";
    }

    console.log(pattern)


    return (
        <div className='Product1'>
            <div className="top_discount">
                <p>Get 5% Off on First Order | Code: WELCOME5 | Shop Now!</p>
            </div>
            <Navbar />
            <div className='route'>
                <p>Home &gt; Wireless Earbuds &gt; Long Playback Ear... &gt; Airdopes 800</p>
            </div>
            {pattern}
        </div>
    )
}

export default Product1
