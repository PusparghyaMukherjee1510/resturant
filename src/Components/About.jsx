import React from 'react'
import aboutimage from "./images/indian_rcp5.png";

function About() {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>Upcoming Product</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, harum et, libero dolorem omnis deserunt corrupti veniam ipsam voluptas optio sed. Mollitia laborum 
                    quisquam dolores obcaecati commodi iste. Amet, ex!
                    </p>
                    <button>Read More</button>
                    <div className='about-img'>
                         <img src={aboutimage} alt=''/>
                    </div>
            </div>
        </div>
    )
}

export default About
