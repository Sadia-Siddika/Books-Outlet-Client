import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllBooks = () => {
    const [books, setBook] = useState([]);
    const [items, setItem] = useState([]);
    useEffect(() => {
        const url = 'https://hidden-basin-07858.herokuapp.com/books';
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data));
    }, []);

    // DELETE AN BOOK
    const handleDeleteBook = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://hidden-basin-07858.herokuapp.com/books/${id}`;
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
        <div className="container rounded">
            <h1 className="text-center fw-bold">ALL BOOKS</h1>
            <div className="container">
                <div className="row g-2">
                    <div className="col-12">
                        <div className="border bg-light">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Author</th>
                                        <th scope="col">Publisher</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                {
                                    books.map(book => <tbody key={book._id}>
                                        <tr className="text-start">
                                            <td className="fw-bold">{book.title}</td>
                                            <td className="fw-bold">{book.author}</td>
                                            <td className="fw-bold">{book.publisher}</td>
                                            <td className="fw-bold">{book.price}</td>
                                            <td>
                                                <Link to={`/updateBook/${book._id}`}><button type="button" className="btn btn-outline-warning fw-bold text-dark mx-2"><i className="fas fa-edit"></i></button></Link>

                                                <button onClick={() => handleDeleteBook(book._id)} type="button" className="btn btn-outline-danger fw-bold text-dark"><i className="fas fa-trash-alt"></i></button>

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
    );
};

export default AllBooks;