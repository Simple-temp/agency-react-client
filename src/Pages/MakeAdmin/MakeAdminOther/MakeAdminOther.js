import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import "./MakeAdminOther.css"

const MakeAdminOther = () => {

    const [loggedInuserInfo, setLoggedInuserInfo] = useContext(UserContext)
    const [admin,setAdmin] = useState({})

    const handleAdmin =(e)=>{
        const newAdmin = {...admin}
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin)
    }

    const submitAdmin =()=>{

        fetch(`https://agency-serve-node.herokuapp.com/makenewadmin`,{
            method: 'POST',
            body: JSON.stringify(admin),
            headers: {'Content-type': 'application/json'}
    })
        .then(res => res.json())
        .then(data=>setAdmin(data))

    }

    return (
        <div className='userOrder'>
            <div className="container">
                <div className="row">
                    <div className="order-head d-flex justify-content-between">
                        <h4>Make a admin</h4>
                        <b>{loggedInuserInfo.name}</b>
                    </div>
                </div>
            </div>
            <div className="container pt-5 second">
                <div className="row">
                    <div className="col-lg-7">
                        <form action="" onSubmit={submitAdmin}>
                            <h6>Email</h6>
                            <input onBlur={handleAdmin} name="email" type="email" placeholder='valid@gmail.com' className='w-75 order adm' />
                            <input type="submit" value="Submit" className='btn btn-success' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdminOther;