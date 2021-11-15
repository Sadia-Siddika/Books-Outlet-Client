import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Explore.css'

const Explore = () => {
    const [books, setBook] = useState([]);

    useEffect(() => {
        const url = 'https://hidden-basin-07858.herokuapp.com/books';
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data));
    }, []);
    return (
        <div className="container my-5 shadow p-3">
            <h1 className="text-center">All Collections</h1>
            <div className="row row-cols-1 row-cols-lg-3 g-4">
                {
                    books.map(book => <div className="col" key={book._id}>
                        <div className="card h-100 border-success">
                            <img src={book.img} className="card-img-top book-img img-fluid doctorsCard" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"><span className="fw-bold">Book Title: </span>{book.title}</h5>
                                <h5 className="card-title"><span className="fw-bold">Book Author: </span>{book.author}</h5>
                                <h5 className="card-title"><span className="fw-bold">Book Price: </span>{book.price} BDT</h5>
                                <Link to={`/bookDetails/${book._id}`}><button className="btn btn-secondary p-2 fw-bold text-white">Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Explore;