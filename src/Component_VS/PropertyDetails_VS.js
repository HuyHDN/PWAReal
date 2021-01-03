import React, { Component } from 'react'

export default class PropertyDetails extends Component {
    render() {
        return (
            <div>
                <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>EstateAgency Bootstrap Template - Index</title>
        <meta content name="description" />
        <meta content name="keywords" />
        {/* Favicons */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet" />
        {/* Vendor CSS Files */}
        
        {/* Template Main CSS File */}
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
                    <label htmlFor="Type">Từ Khoá/label>
                    <input type="text" className="form-control form-control-lg form-control-a" placeholder="Keyword" />
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label htmlFor="Type">Tình Trạng</label>
                    <select className="form-control form-control-lg form-control-a" id="Type">
                      <option>Bất Kì</option>
                      <option>Cho Thuê</option>
                      <option>Rao Bán</option>
                      <option>Có Thể Tham Quan</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label htmlFor="city">Khu Vực</label>
                    <select className="form-control form-control-lg form-control-a" id="city">
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
                    <select className="form-control form-control-lg form-control-a" id="bedrooms">
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
                    <select className="form-control form-control-lg form-control-a" id="garages">
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
                    <select className="form-control form-control-lg form-control-a" id="bathrooms">
                      <option>Bất Kì</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label htmlFor="price">Giá Cả</label>
                    <select className="form-control form-control-lg form-control-a" id="price">
                      <option>Bất Kì</option>
                      <option>$50,000</option>
                      <option>$100,000</option>
                      <option>$150,000</option>
                      <option>$200,000</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-b">Tìm Kiếm</button>
                </div>
              </div>
            </form>
          </div>
        </div>{/* End Property Search Section */}
        {/* ======= Header/Navbar ======= */}
        
        <main id="main">
          {/* ======= Intro Single ======= */}
          <section className="intro-single">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="title-single-box">
                    <h1 className="title-single">304 Blaster Up</h1>
                    <span className="color-text-a">Chicago, IL 606543</span>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Trang Chủ</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="property-grid.html">Nhà Đất</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        304 Blaster Up
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>{/* End Intro Single*/}
          {/* ======= Property Single ======= */}
          <section className="property-single nav-arrow-b">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div id="property-single-carousel" className="owl-carousel owl-arrow gallery-property">
                    <div className="carousel-item-b">
                      <img src={require("../public/assets/img/slide-2.jpg")} alt="" />
                    </div>
                    <div className="carousel-item-b">
                      <img src={require("../public/assets/img/slide-3.jpg")} alt="" />
                    </div>
                    <div className="carousel-item-b">
                      <img src={require("../public/assets/img/slide-1.jpg")} alt="" />
                    </div>
                  </div>
                  <div className="row justify-content-between">
                    <div className="col-md-5 col-lg-4">
                      <div className="property-price d-flex justify-content-center foo">
                        <div className="card-header-c d-flex">
                          <div className="card-box-ico">
                            <span className="ion-money">$</span>
                          </div>
                          <div className="card-title-c align-self-center">
                            <h5 className="title-c">15000</h5>
                          </div>
                        </div>
                      </div>
                      <div className="property-summary">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="title-box-d section-t4">
                              <h3 className="title-d">Thông Tin Cơ Bản</h3>
                            </div>
                          </div>
                        </div>
                        <div className="summary-list">
                          <ul className="list">
                            <li className="d-flex justify-content-between">
                              <strong>Mã Đất:</strong>
                              <span>1134</span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Khu Vực</strong>
                              <span>Chicago, IL 606543</span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Loại:</strong>
                              <span>Nhà</span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Tình Trạng:</strong>
                              <span>Rao Bán</span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Diện Tích:</strong>
                              <span>340m
                                <sup>2</sup>
                              </span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Số Lượng Phòng Ngủ:</strong>
                              <span>4</span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Số Lượng Phòng Tắm:</strong>
                              <span>2</span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Số Lượng Gara:</strong>
                              <span>1</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 col-lg-7 section-md-t3">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="title-box-d">
                            <h3 className="title-d">Miêu Tả</h3>
                          </div>
                        </div>
                      </div>
                      <div className="property-description">
                        <p className="description color-text-a">
                          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
                          neque, auctor sit amet
                          aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta.
                          Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt
                          nibh pulvinar quam id dui posuere blandit.
                        </p>
                        <p className="description color-text-a no-margin">
                          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget
                          malesuada. Quisque velit nisi,
                          pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.
                        </p>
                      </div>
                      <div className="row section-t3">
                        <div className="col-sm-12">
                          <div className="title-box-d">
                            <h3 className="title-d">Tiện Nghi</h3>
                          </div>
                        </div>
                      </div>
                      <div className="amenities-list color-text-a">
                        <ul className="list-a no-margin">
                          <li>Balcony</li>
                          <li>Outdoor Kitchen</li>
                          <li>Cable Tv</li>
                          <li>Deck</li>
                          <li>Tennis Courts</li>
                          <li>Internet</li>
                          <li>Parking</li>
                          <li>Sun Room</li>
                          <li>Concrete Flooring</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-10 offset-md-1">
                  <ul className="nav nav-pills-a nav-pills mb-3 section-t3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="pills-video-tab" data-toggle="pill" href="#pills-video" role="tab" aria-controls="pills-video" aria-selected="true">Video</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="pills-plans-tab" data-toggle="pill" href="#pills-plans" role="tab" aria-controls="pills-plans" aria-selected="false">Floor Plans</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="pills-map-tab" data-toggle="pill" href="#pills-map" role="tab" aria-controls="pills-map" aria-selected="false">Ubication</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
                      <iframe src="https://player.vimeo.com/video/73221098" width="100%" height={460} frameBorder={0} webkitallowfullscreen mozallowfullscreen allowFullScreen />
                    </div>
                    <div className="tab-pane fade" id="pills-plans" role="tabpanel" aria-labelledby="pills-plans-tab">
                      <img src={require("../public/assets/img/plan2.jpg")} alt="" className="img-fluid" />
                    </div>
                    <div className="tab-pane fade" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834" width="100%" height={460} frameBorder={0} style={{border: 0}} allowFullScreen />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row section-t3">
                    <div className="col-sm-12">
                      <div className="title-box-d">
                        <h3 className="title-d">Thông Tin Liên Hệ</h3>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-lg-4">
                      <img src={require("../public/assets/img/agent-4.jpg")} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="property-agent">
                        <h4 className="title-agent">Anabella Geller</h4>
                        <p className="color-text-a">
                          Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                          dui. Quisque velit nisi,
                          pretium ut lacinia in, elementum id enim.
                        </p>
                        <ul className="list-unstyled">
                          <li className="d-flex justify-content-between">
                            <strong>Hotline:</strong>
                            <span className="color-text-a">(222) 4568932</span>
                          </li>
                          <li className="d-flex justify-content-between">
                            <strong>Số máy:</strong>
                            <span className="color-text-a">777 287 378 737</span>
                          </li>
                          <li className="d-flex justify-content-between">
                            <strong>Email:</strong>
                            <span className="color-text-a">annabella@example.com</span>
                          </li>
                          <li className="d-flex justify-content-between">
                            <strong>Skype:</strong>
                            <span className="color-text-a">Annabela.ge</span>
                          </li>
                        </ul>
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
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                      <div className="property-contact">
                        <form className="form-a">
                          <div className="row">
                            <div className="col-md-12 mb-1">
                              <div className="form-group">
                                <input type="text" className="form-control form-control-lg form-control-a" id="inputName" placeholder="Name *" required />
                              </div>
                            </div>
                            <div className="col-md-12 mb-1">
                              <div className="form-group">
                                <input type="email" className="form-control form-control-lg form-control-a" id="inputEmail1" placeholder="Email *" required />
                              </div>
                            </div>
                            <div className="col-md-12 mb-1">
                              <div className="form-group">
                                <textarea id="textMessage" className="form-control" placeholder="Comment *" name="message" cols={45} rows={8} required defaultValue={""} />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button type="submit" className="btn btn-a">Send Message</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Property Single*/}
        </main>{/* End #main */}

        <a href="#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
        <div id="preloader" />
        {/* Vendor JS Files */}
        {/* Template Main JS File */}
      </div>
            </div>
        )
    }
}
