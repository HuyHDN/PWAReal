import React, { Component } from 'react'

export default class LatestNews extends Component {
    render() {
        return (
          <div>
            {/* ======= Latest News Section ======= */}
            <section className="section-news section-t8">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="title-wrap d-flex justify-content-between">
                      <div className="title-box">
                        <h2 className="title-a">Latest News</h2>
                      </div>
                      <div className="title-link">
                        <a href="blog-grid.html">
                          All News
                          <span className="ion-ios-arrow-forward" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="owl-item cloned"
                    style={{ width: "500px", marginRight: "10px" }}
                  >
                    <div className="carousel-item-c">
                      <div className="card-box-b card-shadow news-box">
                        <div className="img-box-b">
                          <img
                            src="assets/img/post-2.jpg"
                            alt=""
                            className="img-b img-fluid"
                          />
                        </div>
                        <div className="card-overlay">
                          <div className="card-header-b">
                            <div className="card-category-b">
                              <a href="#" className="category-b">
                                House
                              </a>
                            </div>
                            <div className="card-title-b">
                              <h2 className="title-2">
                                <a href="blog-single.html">
                                  House is comming
                                  <br /> new
                                </a>
                              </h2>
                            </div>
                            <div className="card-date">
                              <span className="date-b">18 Sep. 2017</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: "500px", marginRight: "10px" }}
                  >
                    <div className="carousel-item-c">
                      <div className="card-box-b card-shadow news-box">
                        <div className="img-box-b">
                          <img
                            src="assets/img/post-5.jpg"
                            alt=""
                            className="img-b img-fluid"
                          />
                        </div>
                        <div className="card-overlay">
                          <div className="card-header-b">
                            <div className="card-category-b">
                              <a href="#" className="category-b">
                                Travel
                              </a>
                            </div>
                            <div className="card-title-b">
                              <h2 className="title-2">
                                <a href="blog-single.html">
                                  Travel is comming
                                  <br /> new
                                </a>
                              </h2>
                            </div>
                            <div className="card-date">
                              <span className="date-b">18 Sep. 2017</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: "500px", marginRight: "10px" }}
                  >
                    <div className="carousel-item-c">
                      <div className="card-box-b card-shadow news-box">
                        <div className="img-box-b">
                          <img
                            src="assets/img/post-7.jpg"
                            alt=""
                            className="img-b img-fluid"
                          />
                        </div>
                        <div className="card-overlay">
                          <div className="card-header-b">
                            <div className="card-category-b">
                              <a href="#" className="category-b">
                                Park
                              </a>
                            </div>
                            <div className="card-title-b">
                              <h2 className="title-2">
                                <a href="blog-single.html">
                                  Park is comming
                                  <br /> new
                                </a>
                              </h2>
                            </div>
                            <div className="card-date">
                              <span className="date-b">18 Sep. 2017</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: "500px", marginRight: "10px" }}
                  >
                    <div className="carousel-item-c">
                      <div className="card-box-b card-shadow news-box">
                        <div className="img-box-b">
                          <img
                            src="assets/img/post-3.jpg"
                            alt=""
                            className="img-b img-fluid"
                          />
                        </div>
                        <div className="card-overlay">
                          <div className="card-header-b">
                            <div className="card-category-b">
                              <a href="#" className="category-b">
                                Travel
                              </a>
                            </div>
                            <div className="card-title-b">
                              <h2 className="title-2">
                                <a href="#">
                                  Travel is comming
                                  <br /> new
                                </a>
                              </h2>
                            </div>
                            <div className="card-date">
                              <span className="date-b">18 Sep. 2017</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Latest News Section */}
          </div>
        );
    }
}
