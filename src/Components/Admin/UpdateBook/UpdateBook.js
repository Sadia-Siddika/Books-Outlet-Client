import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateBook = () => {
    const [book, setBook] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `https://hidden-basin-07858.herokuapp.com/books/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [id]);

    const titleChange = e => {
        const updateTitle = e.target.value;
        const updateBook = { ...book };
        updateBook.title = updateTitle;
        setBook(updateBook);
    }
    const imgChange = e => {
        const updateImg = e.target.value;
        const updateBook = { ...book };
        updateBook.img = updateImg;
        setBook(updateBook);
    }
    const authorChange = e => {
        const updateAuthor = e.target.value;
        const updateBook = { ...book };
        updateBook.author = updateAuthor;
        setBook(updateBook);
    }
    const publisherChange = e => {
        const updatePublisher = e.target.value;
        const updateBook = { ...book };
        updateBook.publisher = updatePublisher;
        setBook(updateBook);
    }
    const priceChange = e => {
        const updatePrice = e.target.value;
        const updateBook = { ...book };
        updateBook.price = updatePrice;
        setBook(updateBook);
    }
    const descriptionChange = e => {
        const updateDescription = e.target.value;
        const updateBook = { ...book };
        updateBook.description = updateDescription;
        setBook(updateBook);
    }

    const handleUpdateBook = e => {
        const url = `https://hidden-basin-07858.herokuapp.com/books/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setBook({});
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div className="container my-5 shadow p-3">
            <h1 className="text-center fw-bold mb-5">UPDATE BOOK</h1>
            <div className="d-flex justify-content-center align-items-center">
                <form onSubmit={handleUpdateBook} className="container w-50">
                    <div className="row my-2">
                        <div className="input-group">
                            <div className="input-group-text fw-bold"><i className="fas fa-book"></i></div>
                            <input type="text" className="form-control" id="autoSizingInputGroup" onChange={titleChange} value={book.title || ''} />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="input-group">
                            <div className="input-group-text fw-bold"><i className="fas fa-image"></i></div>
                            <input type="text" className="form-control" id="autoSizingInputGroup" onChange={imgChange} value={book.img || ''} />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="input-group">
                            <div className="input-group-text fw-bold"><i className="fas fa-at"></i></div>
                            <input type="text" className="form-control" id="autoSizingInputGroup" onChange={authorChange} value={book.author || ''} />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="input-group">
                            <div className="input-group-text fw-bold"><i className="fas fa-copyright"></i></div>
                            <input type="text" className="form-control" id="autoSizingInputGroup" onChange={publisherChange} value={book.publisher || ''} />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="input-group">
                            <div className="input-group-text fw-bold"><i className="fas fa-hand-holding-usd"></i></div>
                            <input type="text" className="form-control" id="autoSizingInputGroup" onChange={priceChange} value={book.price || ''} />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="input-group">
                            <div className="input-group-text fw-bold"><i className="fas fa-paragraph"></i></div>
                            <textarea type="password" className="form-control" id="autoSizingInputGroup" onChange={descriptionChange} value={book.description || ''} />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-dark fw-bold">UPDATE Book</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBook;