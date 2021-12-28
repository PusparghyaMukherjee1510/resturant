import React from 'react'

function Contact() {
    return (
        <div id='contact'>
            <h1>Order Now</h1>
            <form>
                <input type='text' placeholder='Your Full Name'/>
                <input type='email' placeholder='Your E-Mail'/>
                <input type='tel' placeholder='Your Mobile No.'/>
                <input type='text' placeholder='Item(s) Name'/>
                <textarea placeholder='Your Address'></textarea>
                <input type='submit' value='Order'/>
            </form>
        </div>
    )
}

export default Contact
