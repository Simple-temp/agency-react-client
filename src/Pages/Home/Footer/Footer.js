import React from 'react';
import "./Footer.css"

const Footer = () => {
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
                            <form action="">
                                <input name="email" type="email" placeholder='Your email address' className='w-100 d-block field' />
                                <input name="name" type="text" placeholder="Your name / company's name" className='w-100 d-block field' />
                                <textarea name="message" placeholder='Your email address' cols="30" rows="8" className='w-100 d-block field'></textarea>
                                <input type="submit" value="send" className='btn btn-dark mt-3' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center m-5'>Copyright {(new Date().getFullYear())} All Right Reserved</p>
        </footer>
    );
};

export default Footer;