import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
  const { user, admin, logOut } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <p className="navbar-brand fw-bold text-secondary fst-italic">Books Outlet</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link className="fw-bold mx-2 text-decoration-none" to="/home">HOME</Link>
            <Link className="fw-bold mx-2 text-decoration-none" to="/explore">EXPLORE</Link>
            <Link className="fw-bold mx-2 text-decoration-none" to="/dashboard">DASHBOARD</Link>
            {admin && <Link className="fw-bold mx-2 text-decoration-none" to="/admin">ADMIN</Link>}
          </div>
          <div className="d-flex">
            {
              user?.email ?
                <div>
                  <span className="navbar-text fw-bold text-white bg-secondary p-2 rounded-pill">
                    {/* PROFILE NAME */}
                    {user?.displayName}
                  </span>
                  <button onClick={logOut} type="submit" className="btn btn-outline-secondary text-dark fw-bold mx-1"> LOG OUT</button>
                </div>
                :
                <Link to="/login"><button type="submit" className="btn btn-outline-secondary text-dark fw-bold mx-1"> LOG IN</button></Link>
            }

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;