import React, { Component } from 'react'

export default class FooterPage extends Component {
    render() {
        return (
            <div>
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
                      Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat duis
                      sed aute irure.
                    </p>
                  </div>
                  <div className="w-footer-a">
                    <ul className="list-unstyled">
                      <li className="color-a">
                        <span className="color-text-a">Email .</span> contact@example.com</li>
                      <li className="color-a">
                        <span className="color-text-a">Liên Hệ .</span> +54 356 945234</li>
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
                          <i className="fa fa-angle-right" /> <a href="#">Website</a>
                        </li>
                        <li className="item-list-a">
                          <i className="fa fa-angle-right" /> <a href="#">Chứng Nhận</a>
                        </li>
                        <li className="item-list-a">
                          <i className="fa fa-angle-right" /> <a href="#">Quản Trị</a>
                        </li>
                        <li className="item-list-a">
                          <i className="fa fa-angle-right" /> <a href="#">Chức Vụ</a>
                        </li>
                        <li className="item-list-a">
                          <i className="fa fa-angle-right" /> <a href="#">Chi Nhánh</a>
                        </li>
                        <li className="item-list-a">
                          <i className="fa fa-angle-right" /> <a href="#">Điều Khoản</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 section-md-t3">
                <div className="widget-a">
                  <div className="w-header-a">
                    <h3 className="w-title-a text-brand">Chí Nhánh Quốc Tế</h3>
                  </div>
                  <div className="w-body-a">
                    <ul className="list-unstyled">
                      <li className="item-list-a">
                        <i className="fa fa-angle-right" /> <a href="#">Venezuela</a>
                      </li>
                      <li className="item-list-a">
                        <i className="fa fa-angle-right" /> <a href="#">Trung Quốc</a>
                      </li>
                      <li className="item-list-a">
                        <i className="fa fa-angle-right" /> <a href="#">Hồng Kông</a>
                      </li>
                      <li className="item-list-a">
                        <i className="fa fa-angle-right" /> <a href="#">Argentina</a>
                      </li>
                      <li className="item-list-a">
                        <i className="fa fa-angle-right" /> <a href="#">Singapore</a>
                      </li>
                      <li className="item-list-a">
                        <i className="fa fa-angle-right" /> <a href="#">Philippines</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav className="nav-footer">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="/">Trang Chủ</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/about">Thông Tin</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/property-grid">Nhà Đất</a>
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
                    <span className="color-a">EstateAgency</span> All Rights Reserved.
                  </p>
                </div>
                <div className="credits">
                  {/*
            All the links in the footer should remain intact.
            You can delete the links only if you purchased the pro version.
            Licensing information: https://bootstrapmade.com/license/
            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=EstateAgency
          */}
                  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
            </div>
          </div>
        </footer>{/* End  Footer */}
        </footer>
            </div>
        )
    }
}
