import React from "react";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 w-100">
      <a className="navbar-brand" href="#">
        🍕 Pizzería Mamma Mía
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  🔓 Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  🔒 Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  🔐 Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  🔐 Register
                </a>
              </li>
            </>
          )}
          <li className="nav-item">
            <a className="nav-link" href="#">
              🛒 Total: ${total.toLocaleString()}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
