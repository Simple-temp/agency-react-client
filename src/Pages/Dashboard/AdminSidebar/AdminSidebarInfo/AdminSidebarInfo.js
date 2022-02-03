import React, { useContext, useEffect, useState } from 'react';
import "./AdminSidebarInfo.css"
import loading from "../../../../img/loading.gif"
import { UserContext } from '../../../../App';

const AdminSidebarInfo = () => {

    const [loggedInuserInfo, setLoggedInuserInfo] = useContext(UserContext)

    const [alldata,setAlldata] = useState([])

    useEffect(()=>{
        fetch(`https://agency-serve-node.herokuapp.com/getalldata`)
        .then(res => res.json())
        .then(data=>setAlldata(data))
    },[])

    return (
        <div className='userOrder'>
            <div className="container">
                <div className="row">
                    <div className="order-head d-flex justify-content-between">
                        <h4>All Service</h4>
                        <b>{loggedInuserInfo.name}</b>
                    </div>
                </div>
            </div>
            <div className="container pt-5 second">
                <div className="row">
                    {
                        alldata.length === 0 ? <img src={loading} style={{width:"500px"}} className='mx-auto' alt="" /> :
                        <ShowTheData alldata={alldata}></ShowTheData>
                    }
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Service</th>
                        <th>Details</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alldata.map((alldata, index) =>
                            <tr>
                                <td data-label="Name">{alldata.company}</td>
                                <td data-label="Email">{alldata.email}</td>
                                <td data-label="Service">{alldata.subject}</td>
                                <td data-label="Details">{alldata.des}</td>
                                <td data-label="Status"><button className='btn text-danger'>Pending</button></td>
                            </tr>
                        )

                    }
                </tbody>
            </table>
    )
}

export default AdminSidebarInfo;