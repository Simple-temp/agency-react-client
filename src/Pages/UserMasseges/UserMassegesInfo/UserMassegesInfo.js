import React, { useEffect, useState } from 'react';

const UserMassegesInfo = () => {

    const [getmassege, setgetmassege] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/showusermassege`)
            .then(res => res.json())
            .then(data => setgetmassege(data))
    }, [])

    return (
        <div className='userOrder'>
            <div className="container">
                <div className="row">
                    <div className="order-head d-flex justify-content-between">
                        <h4>Massege</h4>
                        <p>Username</p>
                    </div>
                </div>
            </div>
            <div className="container pt-5 second">
                <div className="row">
                    <ShowMassege getmassege={getmassege}></ShowMassege>
                </div>
            </div>
        </div>
    );
};

function ShowMassege({getmassege}) {

    return (
        <>
            <table className='table table-borderless'>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getmassege.map((getmassege, index) =>
                            <tr>
                                <td>{getmassege.name}</td>
                                <td>{getmassege.email}</td>
                                <td>{getmassege.message}</td>
                            </tr>
                        )

                    }
                </tbody>
            </table>
        </>
    )
}

export default UserMassegesInfo;