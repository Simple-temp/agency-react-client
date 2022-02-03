import React, { useState } from 'react';
import "./Footer.css"

const Footer = () => {

    const [massege, setMassege] = useState({})

    const handleBlur = (e) => {
        const newMassege = { ...massege }
        newMassege[e.target.name] = e.target.value;
        setMassege(newMassege)
    }

    const handleMassege = (e) => {

        fetch('http://localhost:4000/postmassege', {
            method: 'POST',
            body: JSON.stringify(massege),
            headers: {'Content-type': 'application/json'}
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                alert("Massege sent successfully")
            });
            
        e.preventDefault()
    }

    return (
        <footer className='footer'>
            <div className="container inner-container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="left-side">
                            <h3>Let us handle your <br /> project, professionally</h3>
                            <p className='w-75 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta error eligendi maxime magnam adipisci quos ipsum expedita corporis.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="right-side">
                            <form action="" onSubmit={handleMassege}>
                                <input required onBlur={handleBlur} name="email" type="email" placeholder='Your email address' className='w-100 d-block field' />
                                <input required onBlur={handleBlur} name="name" type="text" placeholder="Your name / company's name" className='w-100 d-block field' />
                                <textarea required onBlur={handleBlur} name="message" placeholder='Your Massege' cols="30" rows="8" className='w-100 d-block field'></textarea>
                                <input type="submit" value="send" className='btn btn-dark mt-3' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center mt-5 pb-3 fp'>Copyright {(new Date().getFullYear())} All Right Reserved</p>
        </footer>
    );
};

export default Footer;