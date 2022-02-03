import React, { useState } from 'react';

const AdminReviewItem = () => {

    const [services, setServices] = useState({})

    const [servicesFile, setservicesFile] = useState(null)


    const handleBlur = (e) => {
        const servicesInfo = { ...services }
        servicesInfo[e.target.name] = e.target.value
        setServices(servicesInfo)
    }

    const handleChange = (e) => {
        const servicesFileInfo = e.target.files[0]
        setservicesFile(servicesFileInfo)
    }

    const handleServiceForm = () => {
        const formData = new FormData()
        formData.append('file', servicesFile)
        formData.append('title', services.title)
        formData.append('des', services.des)

        fetch('https://agency-serve-node.herokuapp.com/addnewservices', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert("added services")
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className='userOrder'>
            <div className="container">
                <div className="row">
                    <div className="order-head d-flex justify-content-between">
                        <h4>Add a service</h4>
                        <p>Username</p>
                    </div>
                </div>
            </div>
            <div className="container pt-5 second">
                <div className="row">
                    <form action="" onSubmit={handleServiceForm}>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <h6 className='mt-1'>Title</h6>
                                <input onBlur={handleBlur} name="title" required type="text" placeholder='Enter title' className='w-100 order' />
                                <h6 className='mt-1'>Description</h6>
                                <textarea onBlur={handleBlur} name="des" required cols="30" rows="5" className='w-100 mt-3 order' placeholder='Description'></textarea>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <h6 className='mt-1'>Icon</h6>
                                <input onChange={handleChange} name="file" required type="file" className='file w-75 d-block order' />
                            </div>
                        </div>
                        <input type="submit" value="Submit" className='btn btn-dark mt-3' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminReviewItem;

/*
addnewservices
*/