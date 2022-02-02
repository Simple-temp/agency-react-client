import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import "./UserList.css"

const UserList = () => {

    const [loggedInuserInfo, setLoggedInuserInfo] = useContext(UserContext)

    const [order, setOrder] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/getorderedservices?email=`+loggedInuserInfo.email)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    return (
        <div className='userOrder'>
            <div className="container">
                <div className="row">
                    <div className="order-head d-flex justify-content-between">
                        <h4>Service</h4>
                        <p>Username</p>
                    </div>
                </div>
            </div>
            <div className="container pt-5 second">
                <div className="row">
                    {
                        order.map(showOrder => <ShowUserList showList={showOrder} key={showOrder._id}></ShowUserList>)
                    }
                </div>
            </div>
        </div>
    );
};

function ShowUserList(props) {

    const { img, des, subject,image } = props.showList

    return (
        <>
            <div className="col-lg-5 col-md-5 col-12">
                <div className="s-u-list">
                    <div className="s-list-body">
                        {
                            image ? <img src={`data:image/png;base64,${image.img}`} style={{ width: "100px" }} ></img>:
                            <img src={`http://localhost:4000/${img}`} style={{ width: "100px" }} alt="" />
                        }
                        <span className='btn status-btn'>Pending</span>
                    </div>
                    <div className="s-list-body">
                        <h5 className='mt-3'>{subject}</h5>
                        <p>{des}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserList;

/**getorderedservices */