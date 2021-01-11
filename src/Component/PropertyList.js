import React, { Component } from "react";

export default class PropertyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch("http://realesteapi.somee.com/Property/GetAllProperty")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          data: result.data,
        });
      });
  }
  render() {
    let { data } = this.state;

    return (
      <div>
        <div>
          <main id="main">
            {/* ======= Intro Single ======= */}
            <section className="intro-single">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-lg-8">
                    <div className="title-single-box">
                      <h1 className="title-single">Our Amazing Properties</h1>
                      <span className="color-text-a">Grid Properties</span>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                    <nav
                      aria-label="breadcrumb"
                      className="breadcrumb-box d-flex justify-content-lg-end"
                    >
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Home</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Properties Grid
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </section>
            {/* End Intro Single*/}
            {/* ======= Property Grid ======= */}
            <section className="property-grid grid">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="grid-option">
                      <form>
                        <select className="custom-select">
                          <option selected>All</option>
                          <option value={1}>New to Old</option>
                          <option value={2}>For Rent</option>
                          <option value={3}>For Sale</option>
                        </select>
                      </form>
                    </div>
                  </div>

                  {/* Property List Space Here */}
                  {data.map((item) => (
                    <div className="col-md-4" key={item.id}>
                      <div className="card-box-a card-shadow">
                        <div className="img-box-a">
                          <img
                            src="assets/img/property-1.jpg"
                            alt=""
                            className="img-a img-fluid"
                          />
                        </div>
                        <div className="card-overlay">
                          <div className="card-overlay-a-content">
                            <div className="card-header-a">
                              <h2 className="card-title-a">
                                <a href="#">
                                  204 Mount
                                  <br /> {item.title}
                                </a>
                              </h2>
                            </div>
                            <div className="card-body-a">
                              <div className="price-box d-flex">
                                <span className="price-a">
                                  rent | {item.priceFrom}
                                </span>
                              </div>
                              <a href="property-single.html" className="link-a">
                                Click here to view
                                <span className="ion-ios-arrow-forward" />
                              </a>
                            </div>
                            <div className="card-footer-a">
                              <ul className="card-info d-flex justify-content-around">
                                <li>
                                  <h4 className="card-info-title">Area</h4>
                                  <span>
                                    {item.width * item.length}
                                    <sup>2</sup>
                                  </span>
                                </li>
                                <li>
                                  <h4 className="card-info-title">Beds</h4>
                                  <span>{item.noOfRooms}</span>
                                </li>
                                <li>
                                  <h4 className="card-info-title">Baths</h4>
                                  <span>{item.noOfToilets}</span>
                                </li>
                                <li>
                                  <h4 className="card-info-title">Garages</h4>
                                  <span>1</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Property List Space Ends */}
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <nav className="pagination-a">
                      <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabIndex={-1}>
                            <span className="ion-ios-arrow-back" />
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item next">
                          <a className="page-link" href="#">
                            <span className="ion-ios-arrow-forward" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </section>
            {/* End Property Grid Single*/}
          </main>
          {/* End #main */}
          {/* ======= Footer ======= */}
          <section className="section-footer">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <div className="widget-a">
                    <div className="w-header-a">
                      <h3 className="w-title-a text-brand">EstateAgency</h3>
                    </div>
                    <div className="w-body-a">
                      <p className="w-text-a color-text-a">
                        Enim minim veniam quis nostrud exercitation ullamco
                        laboris nisi ut aliquip exea commodo consequat duis sed
                        aute irure.
                      </p>
                    </div>
                    <div className="w-footer-a">
                      <ul className="list-unstyled">
                        <li className="color-a">
                          <span className="color-text-a">Phone .</span>{" "}
                          contact@example.com
                        </li>
                        <li className="color-a">
                          <span className="color-text-a">Email .</span> +54 356
                          945234
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 section-md-t3">
                  <div className="widget-a">
                    <div className="w-header-a">
                      <h3 className="w-title-a text-brand">The Company</h3>
                    </div>
                    <div className="w-body-a">
                      <div className="w-body-a">
                        <ul className="list-unstyled">
                          <li className="item-list-a">
                            <i className="fa fa-angle-right" />{" "}
                            <a href="#">Site Map</a>
                          </li>
                          <li className="item-list-a">
                            <i className="fa fa-angle-right" />{" "}
                            <a href="#">Legal</a>
                          </li>
                          <li className="item-list-a">
                            <i className="fa fa-angle-right" />{" "}
                            <a href="#">Agent Admin</a>
                          </li>
                          <li className="item-list-a">
                            <i className="fa fa-angle-right" />{" "}
                            <a href="#">Careers</a>
                          </li>
                          <li className="item-list-a">
                            <i className="fa fa-angle-right" />{" "}
                            <a href="#">Affiliate</a>
                          </li>
                          <li className="item-list-a">
                            <i className="fa fa-angle-right" />{" "}
                            <a href="#">Privacy Policy</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 section-md-t3">
                  <div className="widget-a">
                    <div className="w-header-a">
                      <h3 className="w-title-a text-brand">
                        International sites
                      </h3>
                    </div>
                    <div className="w-body-a">
                      <ul className="list-unstyled">
                        <li className="item-list-a">
                          <i className="fa fa-angle-right" />{" "}
                          <a href="#">Venezuela</a>
                        </li>
                        <li className="item-list-a">
                          <i className="fa fa-angle-right" />{" "}
                          <a href="#">China</a>
                        </li>
                        <li className="item-list-a">
                          <i className="fa fa-angle-right" />{" "}
                          <a href="#">Hong Kong</a>
                        </li>
                        <li className="item-list-a">
                          <i className="fa fa-angle-right" />{" "}
                          <a href="#">Argentina</a>
                        </li>
                        <li className="item-list-a">
                          <i className="fa fa-angle-right" />{" "}
                          <a href="#">Singapore</a>
                        </li>
                        <li className="item-list-a">
                          <i className="fa fa-angle-right" />{" "}
                          <a href="#">Philippines</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <nav className="nav-footer">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">About</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Property</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Blog</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="socials-a">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-pinterest-p" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-dribbble" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="copyright-footer">
                    <p className="copyright color-text-a">
                      © Copyright
                      <span className="color-a">EstateAgency</span> All Rights
                      Reserved.
                    </p>
                  </div>
                  <div className="credits">
                    {/*
      All the links in the footer should remain intact.
      You can delete the links only if you purchased the pro version.
      Licensing information: https://bootstrapmade.com/license/
      Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=EstateAgency
    */}
                    Designed by{" "}
                    <a href="https://bootstrapmade.com/">BootstrapMade</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* End  Footer */}
        </div>
      </div>
    );
  }
}
