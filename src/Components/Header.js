import React from 'react'

function Header() {
    return (
        <div id='main'>
            <div className='header-heading'>
               <h3>It is Great to Visit Us</h3>
               <h1><span>WELCOME</span> To<br/>The RESTURANT Company</h1>
               <p className='details'>This is The BEST RESTURANT in the World.You Would NEVER go with better than this.</p>
               <div className='header-btns'>
                  <a href='#' className='header-btn'>Order Now</a>
               </div>
            </div>
        </div>
    )
}

export default Header
