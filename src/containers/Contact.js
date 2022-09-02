import React from 'react'

const Contact = () => {
    return (
        <div className='contact-wrapper'>
            <div className="top-text-space"></div>
            <h1>Contact Me</h1>
            <hr className='hr' />
            <br />
            <p className='hr' style={{ color: 'white' }}>Want to connect? Reach out to me on <a href="">LinkedIn.</a> However, if you have any other requests or questions, fill out the form below and I'll get back to you as soon as I can.</p>

            <br />
            <div style={{ display: 'flex' }}>

                <div className="form-container">
                    <form action="" className='form'>
                        <div>
                            <input type="text" placeholder='Name' className='form-box' />
                            <input type="email" placeholder='E-mail' className='form-box' />
                        </div>
                        <input type="text" placeholder='Subject' className='form-box' />
                        <input type="text" placeholder='Message' className='form-box' />
                        <input type="submit" className='form-box' style={{ cursor: 'pointer' }} />
                    </form>
                </div>

            </div>



        </div>
    )
}

export default Contact