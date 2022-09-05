import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setForm((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ydqm47d', 'template_d5cd8yk', e.target, 'd8EgZbzkjGW0XaOeG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        alert(`Success! Thank you for the inquiry, I'll get back to you as soon as I can. 😃`)

        setForm({
            name: '',
            email: '',
            subject: '',
            message: ''
        })

    }


    return (
        <div className='contact-wrapper'>
            <div className="top-text-space"></div>
            <h1>Contact Me</h1>
            <hr className='hr' />
            <br />
            <p className='hr' style={{ color: 'white' }}>Want to connect? Reach out to me on <a href="https://www.linkedin.com/in/chrisphilholt/" target='_blank'>LinkedIn.</a> However, if you have any other requests or inquiries, fill out the form below and I'll get back to you quickly.</p>

            <br />
            <div style={{ display: 'flex' }}>

                <div className="form-container">
                    <form onSubmit={handleSubmit} className='form'>
                        <div>
                            <input type="text" placeholder='Name' className='form-box' name='name' onChange={handleChange} value={form.name} />
                            <input type="email" placeholder='E-mail' className='form-box' name='email' onChange={handleChange} value={form.email} />
                        </div>
                        <input type="text" placeholder='Subject' className='form-box' name='subject' onChange={handleChange} value={form.subject} />
                        <input type="text" placeholder='Message' className='form-box' name='message' onChange={handleChange} value={form.message} />
                        <input type="submit" className='form-box' style={{ cursor: 'pointer' }} />
                    </form>
                </div>

            </div>




        </div>
    )
}

export default Contact