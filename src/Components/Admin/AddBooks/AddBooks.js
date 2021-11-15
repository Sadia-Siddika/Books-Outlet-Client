import React, { useRef } from 'react';

const AddBooks = () => {
    const titleRef = useRef();
    const imgRef = useRef();
    const authorRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();

    const handleBooks = e => {
        const title = titleRef.current.value;
        const img = imgRef.current.value;
        const author = authorRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;

        const newBook = { title, img, author, price, description };
        fetch('https://hidden-basin-07858.herokuapp.com/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Book Inserted Successfully.');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div className="container my-3 p-3">
            <h1 className="text-center fw-bold mb-2">ADD BOOKS</h1>
            <div className="d-flex justify-content-center align-items-center">
                <form onSubmit={handleBooks} className="container w-50">
                    <div className="row my-2">
                        <div className="input-group">
                            <div className="input-group-text fw-bold"><i className="fas fa-book"></i></div>
                            <input type="text" className="form-control" ref={titleRef} placeholder="Enter Book Name" />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="input-group">
                            <div className="input-group-text fw-bold"><i className="fas fa-image"></i></div>
                            <input type="text" className="form-control" ref={imgRef} placeholder="Enter Book Image URL" />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="input-group">
                            <div className="input-group-text fw-bold"><i className="fas fa-at"></i></div>
                            <input type="text" className="form-control" ref={authorRef} placeholder="Enter Author" />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="input-group">
                            <div className="input-group-text fw-bold"><i className="fas fa-hand-holding-usd"></i></div>
                            <input type="text" className="form-control" ref={priceRef} placeholder="Enter Price" />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="input-group">
                            <div className="input-group-text fw-bold"><i className="fas fa-paragraph"></i></div>
                            <textarea type="text" className="form-control" ref={descriptionRef} placeholder="Enter Description" />
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-dark fw-bold"><i className="fas fa-plus"></i> INSERT</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBooks;