import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const OrderList = () => {
    const { user } = useAuth();
    const [orders, setOrder] = useState([]);
    const [items, setItem] = useState([]);

    useEffect(() => {
        const url = `https://hidden-basin-07858.herokuapp.com/user/order?userEmail=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [user.email]);

    // DELETE AN BOOK
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://hidden-basin-07858.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        window.location.reload();
                        const remainingBook = items.filter(item => item._id !== id);
                        setItem(remainingBook);
                    }
                });
        }
    }

    return (
        <div>
            <div className="container rounded">
                <div className="container">
                    <div className="row g-2">
                        <div className="col-12">
                            <h1 className="text-center">ORDER LIST</h1>
                            <div className="border bg-light">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Book Name</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    {
                                        orders.map(order => <tbody key={order._id}>
                                            <tr className="text-start">
                                                <td className="fw-bold">{order.userName}</td>
                                                <td className="fw-bold">{order.userEmail}</td>
                                                <td className="fw-bold">{order.title}</td>
                                                <td className="fw-bold">{order.phone}</td>
                                                <td className="fw-bold">{order.address}</td>
                                                <td>
                                                    <Link to={`/updateBook/${order._id}`}><button type="button" className="btn btn-outline-warning fw-bold text-dark mx-2"><i className="fas fa-edit"></i></button></Link>

                                                    <button onClick={() => handleDeleteOrder(order._id)} type="button" className="btn btn-outline-danger fw-bold text-dark"><i className="fas fa-trash-alt"></i></button>

                                                </td>
                                            </tr>
                                        </tbody>)
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;