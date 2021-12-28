import React from 'react'
import Productbox from './Productbox'
import  pimage1 from "./images/indian_rcp.jpg";
import  pimage2 from "./images/indian_rcp1.jpg";
import pimage3 from "./images/indian_rcp2.jpg";

function Products() {
    return (
        <div id='products'>
            <h1>Choose Your Product</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo necessitatibus, mollitia repellendus modi iste. Voluptas, consequatur. Impedit cumque exercitationem qui quae voluptas? Pariatur rerum assumenda culpa corporis voluptatibus deserunt.
            </p>
            <div className='a-container'>
                <Productbox image={pimage1} title="Veg_Thali"/>
                <Productbox image={pimage2} title="Chicken_Soup"/>
                <Productbox image={pimage3} title="Mutton_Curry"/>
            </div>
        </div>
    )
}

export default Products
