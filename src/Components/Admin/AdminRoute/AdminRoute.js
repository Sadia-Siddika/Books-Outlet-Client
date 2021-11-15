import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth()

    if (isLoading) {
        return "loading"
    }

    return (
        <div>

            <Route
                {...rest}

                render={({ location }) => user.email && admin ? (children) : (<Redirect
                    to={{
                        pathname: "/",
                        state: { from: location }
                    }}
                ></Redirect>)}
            >

            </Route>

        </div>
    );
};

export default AdminRoute;