import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
          <div>
            {/* ======= Header/Navbar ======= */}
            <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
              <div className="container">
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarDefault"
                  aria-controls="navbarDefault"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span />
                  <span />
                  <span />
                </button>

                <a className="navbar-brand text-brand" href="/">
                  Estate<span className="color-b">Agency</span>
                </a>
                <button
                  type="button"
                  className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none"
                  data-toggle="collapse"
                  data-target="#navbarTogglerDemo01"
                  aria-expanded="false"
                >
                  <span className="fa fa-search" aria-hidden="true" />
                </button>
                <div
                  className="navbar-collapse collapse justify-content-center"
                  id="navbarDefault"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" href="/">
                        Home
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="property-grid">
                        Property
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog-grid">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a
                          className="dropdown-item"
                          href="property-single.html"
                        >
                          Property Single
                        </a>
                        <a className="dropdown-item" href="blog-single.html">
                          Blog Single
                        </a>
                        <a className="dropdown-item" href="agents-grid.html">
                          Agents Grid
                        </a>
                        <a className="dropdown-item" href="agent-single.html">
                          Agent Single
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  className="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block"
                  data-toggle="collapse"
                  data-target="#navbarTogglerDemo01"
                  aria-expanded="false"
                ><a href="login">Login</a>
                </button>
              </div>
            </nav>
            {/* End Header/Navbar */}
          </div>
        );
    }
}
