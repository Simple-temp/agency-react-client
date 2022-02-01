import React from 'react';
import "./MakeAdminOther.css"

const MakeAdminOther = () => {
    return (
        <div className='userOrder'>
            <div className="container">
                <div className="row">
                    <div className="order-head d-flex justify-content-between">
                        <h4>Make a admin</h4>
                        <p>Username</p>
                    </div>
                </div>
            </div>
            <div className="container pt-5 second">
                <div className="row">
                    <div className="col-lg-7">
                        <form action="">
                            <h6>Email</h6>
                            <input type="text" id="" placeholder='valid@gmail.com' className='w-75 order adm' />
                            <input type="submit" value="Submit" className='btn btn-success' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdminOther;