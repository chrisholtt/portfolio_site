import React from 'react'
import ContactBox from './ContactBox'

const Contact = () => {
    return (
        <div className='contact-wrapper'>
            <h1>Like what ya see ya fucking weeb?</h1>
            <h2>Get in touch!</h2>

            <div style={{ display: 'flex' }}>
                <ContactBox details={"💩 LinkedIn"} />
                <ContactBox details={"🍣 GitHub"} />
                <ContactBox details={"💌Email"} />
            </div>



        </div>
    )
}

export default Contact