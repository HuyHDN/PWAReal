import React, { Component } from 'react'

export default class PropertyList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  render() {
    return (
      <div>
        <div>
          <meta charSet="utf-8" />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />
          <title>EstateAgency Bootstrap Template - Index</title>
          <meta content name="descriptison" />
          <meta content name="keywords" />
          {/* Favicons */}
          <link href="assets/img/favicon.png" rel="icon" />
          <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
            rel="stylesheet"
          />
          
          {/* =======================================================
  * Template Name: EstateAgency - v2.1.0
  * Template URL: https://bootstrapmade.com/real-estate-agency-bootstrap-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
          {/* ======= Property Search Section ======= */}
          <div className="click-closed" />
          {/*/ Form Search Star /*/}
          <div className="box-collapse">
            <div className="title-box-d">
              <h3 className="title-d">Tìm Kiếm</h3>
            </div>
            <span className="close-box-collapse right-boxed ion-ios-close" />
            <div className="box-collapse-wrap form">
              <form className="form-a">
                <div className="row">
                  <div className="col-md-12 mb-2">
                    <div className="form-group">
                      <label htmlFor="Type">Từ Khoá</label>
                      <input
                        type="text"
                        className="form-control form-control-lg form-control-a"
                        placeholder="Keyword"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="form-group">
                      <label htmlFor="Type">Tình Trạng</label>
                      <select
                        className="form-control form-control-lg form-control-a"
                        id="Type"
                      >
                        <option>Bất Kì</option>
                        <option>Cho Thuê</option>
                        <option>Rao Bán</option>
                        <option>Có Thể Tham quan</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="form-group">
                      <label htmlFor="city">Thành Phố</label>
                      <select
                        className="form-control form-control-lg form-control-a"
                        id="city"
                      >
                        <option>Bất Kì</option>
                        <option>Alabama</option>
                        <option>Arizona</option>
                        <option>California</option>
                        <option>Colorado</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="form-group">
                      <label htmlFor="bedrooms">Số Lượng Phòng Ngủ</label>
                      <select
                        className="form-control form-control-lg form-control-a"
                        id="bedrooms"
                      >
                        <option>Bất Kì</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="form-group">
                      <label htmlFor="garages">Số Lượng Gara</label>
                      <select
                        className="form-control form-control-lg form-control-a"
                        id="garages"
                      >
                        <option>Bất Kì</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="form-group">
                      <label htmlFor="bathrooms">Số Lượng Phòng Tắm</label>
                      <select
                        className="form-control form-control-lg form-control-a"
                        id="bathrooms"
                      >
                        <option>Bất Kì</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="form-group">
                      <label htmlFor="price">Giá Tối Thiểu</label>
                      <select
                        className="form-control form-control-lg form-control-a"
                        id="price"
                      >
                        <option>Bất Kì</option>
                        <option>$50,000</option>
                        <option>$100,000</option>
                        <option>$150,000</option>
                        <option>$200,000</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="btn btn-b">
                      Tìm Kiếm
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* End Property Search Section */}&gt;
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
              <a className="navbar-brand text-brand" href="index.html">
                Estate<span className="color-b">Đại Lý</span>
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
                    <a className="nav-link active" href="index.html">
                      Trang Chủ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      Thông Tin
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="property-grid.html">
                      Nhà Đất
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog-grid.html">
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
                      Trang 
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="property-single.html">
                        Thông Tin Nhà Đất
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Blog 
                      </a>
                      <a className="dropdown-item" href="agents-grid.html">
                        Mạng Lưới Đại Lý
                      </a>
                      <a className="dropdown-item" href="agent-single.html">
                        Thông Tin Đại Lý
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Liên Hệ
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
              >
                <span className="fa fa-search" aria-hidden="true" />
              </button>
            </div>
          </nav>
          {/* End Header/Navbar */}
          <main id="main">
            {/* ======= Intro Single ======= */}
            <section className="intro-single">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-lg-8">
                    <div className="title-single-box">
                      <h1 className="title-single">Lựa Chọn Hấp Dẫn</h1>
                      <span className="color-text-a">Mạng Lưới Nhà Đất</span>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                    <nav
                      aria-label="breadcrumb"
                      className="breadcrumb-box d-flex justify-content-lg-end"
                    >
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Trang Chủ</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Mạng Lưới Nhà Đất
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
                          <option selected>Bất Kì</option>
                          <option value={1}>Mới Nhất</option>
                          <option value={2}>Cho Thuê</option>
                          <option value={3}>Rao Bán</option>
                        </select>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-box-a card-shadow">
                      <div className="img-box-a">
                        <img
                          src={require("../public/assets/img/property-1.jpg")}
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
                                <br /> Olive Road Two
                              </a>
                            </h2>
                          </div>
                          <div className="card-body-a">
                            <div className="price-box d-flex">
                              <span className="price-a">Giá Thuê | $ 12.000</span>
                            </div>
                            <a href="property-single.html" className="link-a">
                              Nhấn Để Xem Tiếp
                              <span className="ion-ios-arrow-forward" />
                            </a>
                          </div>
                          <div className="card-footer-a">
                            <ul className="card-info d-flex justify-content-around">
                              <li>
                                <h4 className="card-info-title">Diện Tích</h4>
                                <span>
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Số Lượng Phòng Ngủ</h4>
                                <span>2</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Số Lượng Phòng Tắm</h4>
                                <span>4</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Số Lượng Gara</h4>
                                <span>1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-box-a card-shadow">
                      <div className="img-box-a">
                        <img
                          src={require("../public/assets/img/property-3.jpg")}
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
                                <br /> Olive Road Two
                              </a>
                            </h2>
                          </div>
                          <div className="card-body-a">
                            <div className="price-box d-flex">
                              <span className="price-a">Giá Thuê | $ 12.000</span>
                            </div>
                            <a href="property-single.html" className="link-a">
                              Nhấn Để Xem Tiếp
                              <span className="ion-ios-arrow-forward" />
                            </a>
                          </div>
                          <div className="card-footer-a">
                            <ul className="card-info d-flex justify-content-around">
                              <li>
                                <h4 className="card-info-title">Diện Tích</h4>
                                <span>
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Số Lượng Phòng Ngủ</h4>
                                <span>2</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Số Lượng Phòng Tắm</h4>
                                <span>4</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Số Lượng Gara</h4>
                                <span>1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-box-a card-shadow">
                      <div className="img-box-a">
                        <img
                          src={require("../public/assets/img/property-6.jpg")}
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
                                <br /> Olive Road Two
                              </a>
                            </h2>
                          </div>
                          <div className="card-body-a">
                            <div className="price-box d-flex">
                              <span className="price-a">Giá Thuê | $ 12.000</span>
                            </div>
                            <a href="property-single.html" className="link-a">
                            Nhấn Để Xem Tiếp
                              <span className="ion-ios-arrow-forward" />
                            </a>
                          </div>
                          <div className="card-footer-a">
                            <ul className="card-info d-flex justify-content-around">
                              <li>
                                <h4 className="card-info-title">Diện Tích</h4>
                                <span>
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Số Lượng Phòng Ngủ</h4>
                                <span>2</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Số Lượng Phòng Tắm</h4>
                                <span>4</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Số Lượng Gara</h4>
                                <span>1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-box-a card-shadow">
                      <div className="img-box-a">
                        <img
                          src={require("../public/assets/img/property-7.jpg")}
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
                                <br /> Olive Road Two
                              </a>
                            </h2>
                          </div>
                          <div className="card-body-a">
                            <div className="price-box d-flex">
                              <span className="price-a">rent | $ 12.000</span>
                            </div>
                            <a href="property-single.html" className="link-a">
                            Nhấn Để Xem Tiếp
                              <span className="ion-ios-arrow-forward" />
                            </a>
                          </div>
                          <div className="card-footer-a">
                            <ul className="card-info d-flex justify-content-around">
                              <li>
                                <h4 className="card-info-title">Diện Tích</h4>
                                <span>
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Số Lượng Phòng Ngủ</h4>
                                <span>2</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Số Lượng Phòng Tắm</h4>
                                <span>4</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Số Lượng Gara</h4>
                                <span>1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-box-a card-shadow">
                      <div className="img-box-a">
                        <img
                          src={require("../public/assets/img/property-8.jpg")}
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
                                <br /> Olive Road Two
                              </a>
                            </h2>
                          </div>
                          <div className="card-body-a">
                            <div className="price-box d-flex">
                              <span className="price-a">rent | $ 12.000</span>
                            </div>
                            <a href="property-single.html" className="link-a">
                            Nhấn Để Xem Tiếp
                              <span className="ion-ios-arrow-forward" />
                            </a>
                          </div>
                          <div className="card-footer-a">
                            <ul className="card-info d-flex justify-content-around">
                              <li>
                                <h4 className="card-info-title">Diện Tích</h4>
                                <span>
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Số Lượng Phòng Ngủ</h4>
                                <span>2</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Số Lượng Phòng Tắm</h4>
                                <span>4</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Số Lượng Gara</h4>
                                <span>1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-box-a card-shadow">
                      <div className="img-box-a">
                        <img
                          src={require("../public/assets/img/property-10.jpg")}
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
                                <br /> Olive Road Two
                              </a>
                            </h2>
                          </div>
                          <div className="card-body-a">
                            <div className="price-box d-flex">
                              <span className="price-a">rent | $ 12.000</span>
                            </div>
                            <a href="property-single.html" className="link-a">
                            Nhấn Để Xem Tiếp
                              <span className="ion-ios-arrow-forward" />
                            </a>
                          </div>
                          <div className="card-footer-a">
                            <ul className="card-info d-flex justify-content-around">
                              <li>
                                <h4 className="card-info-title">Diện Tíc</h4>
                                <span>
                                  340m
                                  <sup>2</sup>
                                </span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Số Lượng Phòng Ngủ</h4>
                                <span>2</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Số Lượng Phòng Tắm</h4>
                                <span>4</span>
                              </li>
                              <li>
                                <h4 className="card-info-title">Số Lượng Gara</h4>
                                <span>1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                          <span className="color-text-a">Email .</span>{" "}
                          contact@example.com
                        </li>
                        <li className="color-a">
                          <span className="color-text-a">Liên Hệ .</span> +54 356
                          945234
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 section-md-t3">
                  <div className="widget-a">
                    <div className="w-header-a">
                      <h3 className="w-title-a text-brand">Công Ty</h3>
                    </div>
                    <div className="w-body-a">
                      <div className="w-body-a">
                        <ul className="list-unstyled">
                          <li className="item-list-a">
                            <i className="fa fa-angle-right" />{" "}
                            <a href="#">Website</a>
                          </li>
                          <li className="item-list-a">
                            <i className="fa fa-angle-right" />{" "}
                            <a href="#">Chứng Nhận</a>
                          </li>
                          <li className="item-list-a">
                            <i className="fa fa-angle-right" />{" "}
                            <a href="#">Quản Trị</a>
                          </li>
                          <li className="item-list-a">
                            <i className="fa fa-angle-right" />{" "}
                            <a href="#">Chức Vụ</a>
                          </li>
                          <li className="item-list-a">
                            <i className="fa fa-angle-right" />{" "}
                            <a href="#">Chi Nhánh</a>
                          </li>
                          <li className="item-list-a">
                            <i className="fa fa-angle-right" />{" "}
                            <a href="#">Điều Khoản</a>
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
                        Chi Nhánh Quốc Tế
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
                          <a href="#">Trung Quốc</a>
                        </li>
                        <li className="item-list-a">
                          <i className="fa fa-angle-right" />{" "}
                          <a href="#">Hồng Kông</a>
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
                        <a href="#">Trang Chủ</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Thông Tin</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Nhà Đất</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Blog</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Liên Hệ</a>
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
          <a href="#" className="back-to-top">
            <i className="fa fa-chevron-up" />
          </a>
          <div id="preloader" />
          {/* Vendor JS Files */}
          {/* Template Main JS File */}
        </div>
      </div>
    );
  }
}
