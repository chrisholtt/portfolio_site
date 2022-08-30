import React from 'react'
import ContactBox from './ContactBox'

const Contact = () => {
    return (
        <div className='contact-wrapper'>
            <h1>Contact Me</h1>
            <hr className='hr' />

            <div style={{ display: 'flex' }}>
                <ContactBox details={"💩 LinkedIn"} />
                <ContactBox details={"🍣 GitHub"} />
                <ContactBox details={"💌Email"} />
            </div>



        </div>
    )
}

export default Contact