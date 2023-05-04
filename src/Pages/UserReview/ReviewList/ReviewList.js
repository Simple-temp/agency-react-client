import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

const ReviewList = () => {

    const [loggedInuserInfo, setLoggedInuserInfo] = useContext(UserContext)

    const [reviewedInfo, setReviewInfo] = useState({})
    const [reviewedFile, setReviewedFile] = useState(null)

    const handleBlur = (e) => {
        const reviewInfo = { ...reviewedInfo }
        reviewInfo[e.target.name] = e.target.value
        setReviewInfo(reviewInfo)
    }

    const handleChange = (e) => {
        const reviewFile = e.target.files[0];
        setReviewedFile(reviewFile)
    }

    const submitReview = () => {

        const formData = new FormData()
        formData.append('file', reviewedFile)
        formData.append('title', reviewedInfo.title)
        formData.append('companyName', reviewedInfo.companyName)
        formData.append('des', reviewedInfo.des)

        fetch('https://agency-wmb7.onrender.com/userreview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert("review added")
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
                        <h4>Review</h4>
                        <b>{loggedInuserInfo.name}</b>
                    </div>
                </div>
            </div>
            <div className="container pt-5 second">
                <div className="row">
                    <div className="col-lg-6">
                        <form action="" onSubmit={submitReview}>
                            <input onBlur={handleBlur} name="title" required type="text" placeholder='Name' className='w-100 order' />
                            <input onBlur={handleBlur} name="companyName" required type="text" placeholder='Company name, Designation' className='w-100 order' />
                            <textarea onBlur={handleBlur} name="des" required cols="30" rows="5" className='w-100 mt-3 order' placeholder='Description'></textarea>
                            <div className="filebox">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <input onChange={handleChange} name="file" required type="file" className='file w-100 d-block order' />
                                    </div>
                                </div>
                            </div>
                            <input type="submit" value="Submit" className='btn btn-dark mt-3' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewList;