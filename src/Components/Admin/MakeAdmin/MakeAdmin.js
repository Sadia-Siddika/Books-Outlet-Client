import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdmin = e => {
        const user = { email };
        fetch('https://hidden-basin-07858.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setEmail('')
            })
        e.preventDefault();
    }
    return (
        <div>
            <h1 className="text-center fw-bold mb-5">MAKE AN ADMIN</h1>
            <div className="d-flex justify-content-center align-items-center">
                <form onSubmit={handleAdmin} className="container w-50">
                    <div className="row my-2">
                        <div className="input-group">
                            <div className="input-group-text fw-bold"><i className="fas fa-envelope"></i></div>
                            <input type="email" className="form-control" id="autoSizingInputGroup" onBlur={handleOnBlur} placeholder="Enter Email" />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-dark fw-bold"><i className="fas fa-users-cog"></i> MAKE ADMIN</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default MakeAdmin;