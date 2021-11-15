import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../images/banner-2.jpg'
import banner2 from '../../images/banner-1.jpg'
import banner3 from '../../images/banner-3.jpg'
import './Home.css'

const Home = () => {
    const [books, setBook] = useState([]);
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        // const url = 'https://fast-dusk-28001.herokuapp.com/event';

        const url = 'https://hidden-basin-07858.herokuapp.com/books';
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data));
    }, []);

    useEffect(() => {
        const url = 'https://hidden-basin-07858.herokuapp.com/review'
        fetch(url)
            .then(res => res.json())
            .then(data => setReview(data));
    }, []);

    return (
        <div>
            {/* Slider */}
            <div className="container-fluid bg-light">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={banner1} className="d-block img-fluid image" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={banner2} className="d-block img-fluid image" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={banner3} className="d-block img-fluid image" alt="..." />
                        </div>
                    </div>
                </div>
            </div>

            {/* Collection Item */}
            <div className="container my-3 px-0">
                <h1 className="text-center p-3">Books Collections </h1>
                <div className="row row-cols-1 row-cols-lg-3 g-4">
                    {
                        books.slice(0, 6).map(book => <div className="col" key={book._id}>
                            <div className="card h-100 border-success">
                                <img src={book.img} className="card-img-top img-fluid images" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <h5 className="card-title">{book.author}</h5>
                                    <h5 className="card-title">{book.price}</h5>
                                    <Link to={`/bookDetails/${book._id}`}><button className="btn btn-secondary p-2 fw-bold text-white">Details</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            {/* Review */}
            <div className="container my-3 px-0">
                <h1 className="text-center p-3">See Our Reviews</h1>
                <div className="row row-cols-1 row-cols-lg-3 g-4">
                    {
                        reviews.slice(0, 6).map(review => <div className="col" key={review._id}>
                            <div className="card h-100 border-warning text-center p-3">
                                <h5 className="card-title p-2 bg-secondary rounded-pill">{review.userName}</h5>
                                <div className="card-body">
                                    <h5 className="card-title">{review.review}</h5>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            {/* FAQ */}
            <div className="container my-3 bg-light rounded shadow">
                <h1 className="text-center p-3">Ask Frequently Question</h1>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                "Are These Prices For Real?"
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                Yes! And here's how:

                                We are sellers of new bargain books purchased directly from various publishers. We purchased these books for amazing prices and sell them for up to 90% off publisher’s list price.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            How Do I Register?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                            Just fill out your name and email address on the account registration form to get started. When you place your first order you can fill in your address for billing/shipping and we’ll update your profile with your info.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            How Long Until I Receive My Order?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                            Delivery times for your orders vary greatly based on many factors. Shipping destination and size of your order will directly influence how long your order will take to arrive.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;