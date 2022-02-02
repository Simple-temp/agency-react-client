import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../App';
import "./UserSidebarDetails.css"

const UserSidebarDetails = () => {

    const [loggedInuserInfo, setLoggedInuserInfo] = useContext(UserContext)
    const [info,setInfo] = useState({});
    const [file,setFile] = useState(null)

    const handleBlur = (e) =>{
        const newinfo = {...info}
        newinfo [e.target.name] = e.target.value;
        setInfo(newinfo);
    }

    const HandleChange = (e) =>{
        const newFiles = e.target.files[0]
        setFile(newFiles);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('company', info.company)
        formData.append('email', info.email)
        formData.append('subject', info.subject)
        formData.append('des', info.des)
        formData.append('price', info.price)
      
        fetch('http://localhost:4000/postuserorder', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          alert("order placed")
        })
        .catch(error => {
          console.error(error)
        })
        e.preventDefault()
    }

    return (
        <div className='userOrder'>
            <div className="container">
                <div className="row">
                    <div className="order-head d-flex justify-content-between">
                        <h4>Order</h4>
                        <p>Username</p>
                    </div>
                </div>
            </div>
            <div className="container pt-5 second">
                <div className="row">
                    <div className="col-lg-6">
                        <form action="" onSubmit={handleSubmit}>
                            <input onBlur={handleBlur} required name="company" type="text" placeholder='Your name/Company name' className='w-100 order' />
                            <input onBlur={handleBlur} required name="email" type="email" placeholder='Your email' className='w-100 order' />
                            <input onBlur={handleBlur} required name="subject" type="text" placeholder='Subject name' className='w-100 order' />
                            <textarea onBlur={handleBlur} required name="des" cols="30" rows="5" className='w-100 mt-3 order' placeholder='Project Details'></textarea>
                            <div className="filebox">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <input onBlur={handleBlur} required name="price" type="text" placeholder='Price' className='w-100 order' />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <input onChange={HandleChange} required name="file" type="file" className='file w-100 d-block order' />
                                    </div>
                                </div>
                            </div>
                            <input type="submit" value="Send" className='btn btn-dark mt-3' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSidebarDetails;

/**postuserorder */