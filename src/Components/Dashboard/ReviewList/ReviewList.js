import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const ReviewList = () => {
    const { user } = useAuth();
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        const url = `https://hidden-basin-07858.herokuapp.com/review?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setReview(data));
    }, [user.email]);

    return (
        <div>
            <div className="container rounded">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-lg-12 col-12">
                            {
                                reviews.map(review => <div key={review._id} className="card-body">
                                    <h5 className="card-title"><span className="fw-bold">Name:</span> {review.userName}</h5>
                                    <h5 className="card-title"><span className="fw-bold">Email:</span> {review.userEmail}</h5>
                                    <h5 className="card-title"><span className="fw-bold">Review:</span> {review.review}</h5>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewList;