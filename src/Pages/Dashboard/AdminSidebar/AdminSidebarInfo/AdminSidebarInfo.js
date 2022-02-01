import React, { useEffect, useState } from 'react';
import "./AdminSidebarInfo.css"

const AdminSidebarInfo = () => {

    const [alldata,setAlldata] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:4000/getalldata`)
        .then(res => res.json())
        .then(data=>setAlldata(data))
    },[])

    return (
        <div className='userOrder'>
            <div className="container">
                <div className="row">
                    <div className="order-head d-flex justify-content-between">
                        <h4>All Service</h4>
                        <p>Username</p>
                    </div>
                </div>
            </div>
            <div className="container pt-5 second">
                <div className="row">
                    <ShowTheData alldata={alldata}></ShowTheData>
                </div>
            </div>
        </div>
    );
};

function ShowTheData ({alldata}){
    return(
            <table className='table table-borderless'>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email Id</th>
                        <th scope='col'>Service</th>
                        <th scope='col'>Project Details</th>
                        <th scope='col'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alldata.map((alldata, index) =>
                            <tr>
                                <td>{alldata.company}</td>
                                <td>{alldata.email}</td>
                                <td>{alldata.subject}</td>
                                <td>{alldata.des}</td>
                                <td><button className='btn text-danger'>Pending</button></td>
                            </tr>
                        )

                    }
                </tbody>
            </table>
    )
}

export default AdminSidebarInfo;