import React from 'react';
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    Link,
    // useParams,
    useRouteMatch
} from "react-router-dom";
import AddBooks from './AddBooks/AddBooks';
import AllBooks from './AllBooks/AllBooks';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrder from './ManageOrder/ManageOrder';
import Review from './Review/Review';

const Admin = () => {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <div className="container my-5 shadow p-3 rounded">
                <div className="container">
                    <div className="row g-2">
                        <div className="col-3 g-2">
                            <div className="p-3 border bg-light">
                                <Link to={`${url}/allBooks`} className="text-decoration-none fw-bold"><i class="fas fa-eye"></i> All Books</Link>
                            </div>
                            <div className="p-3 border bg-light">
                                <Link to={`${url}/makeAdmin`} className="text-decoration-none fw-bold"><i className="fas fa-users-cog"></i> Make Admin</Link>
                            </div>
                            <div className="p-3 border bg-light">
                                <Link to={`${url}/addBooks`} className="text-decoration-none fw-bold"><i className="fas fa-plus"></i> Add Books</Link>
                            </div>
                            <div className="p-3 border bg-light">
                                <Link to={`${url}/manageOrder`} className="text-decoration-none fw-bold"><i className="fas fa-tasks"></i> Manage Orders</Link>
                            </div>
                            <div className="p-3 border bg-light">
                                <Link to={`${url}/review`} className="text-decoration-none fw-bold"><i class="fas fa-pen"></i> Review</Link>
                            </div>
                        </div>
                        <div className="col-9">
                            <Switch>
                                <Route exact path={path}>
                                    <AllBooks></AllBooks>
                                </Route>
                                <Route path={`${path}/allBooks`}>
                                    <AllBooks></AllBooks>
                                </Route>
                                <Route path={`${path}/makeAdmin`}>
                                    <MakeAdmin></MakeAdmin>
                                </Route>
                                <Route path={`${path}/addBooks`}>
                                    <AddBooks></AddBooks>
                                </Route>
                                <Route path={`${path}/manageOrder`}>
                                    <ManageOrder></ManageOrder>
                                </Route>
                                <Route path={`${path}/review`}>
                                    <Review></Review>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Admin;