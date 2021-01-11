import React, { Component } from "react";

export default class Service extends Component {
    render() {
        return (
            <div>
            {/* ======= Services Section ======= */}
    <section className="section-services section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Our Services</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card-box-c foo">
              <div className="card-header-c d-flex">
                <div className="card-box-ico">
                  <span className="fa fa-gamepad" />
                </div>
                <div className="card-title-c align-self-center">
                  <h2 className="title-c">Lifestyle</h2>
                </div>
              </div>
              <div className="card-body-c">
                <p className="content-c">
                  Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                  convallis a pellentesque
                  nec, egestas non nisi.
                </p>
              </div>
              <div className="card-footer-c">
                <a href="#" className="link-c link-icon">Read more
                  <span className="ion-ios-arrow-forward" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-c foo">
              <div className="card-header-c d-flex">
                <div className="card-box-ico">
                  <span className="fa fa-usd" />
                </div>
                <div className="card-title-c align-self-center">
                  <h2 className="title-c">Loans</h2>
                </div>
              </div>
              <div className="card-body-c">
                <p className="content-c">
                  Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Mauris blandit
                  aliquet elit, eget tincidunt
                  nibh pulvinar a.
                </p>
              </div>
              <div className="card-footer-c">
                <a href="#" className="link-c link-icon">Read more
                  <span className="ion-ios-arrow-forward" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-c foo">
              <div className="card-header-c d-flex">
                <div className="card-box-ico">
                  <span className="fa fa-home" />
                </div>
                <div className="card-title-c align-self-center">
                  <h2 className="title-c">Sell</h2>
                </div>
              </div>
              <div className="card-body-c">
                <p className="content-c">
                  Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                  convallis a pellentesque
                  nec, egestas non nisi.
                </p>
              </div>
              <div className="card-footer-c">
                <a href="#" className="link-c link-icon">Read more
                  <span className="ion-ios-arrow-forward" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Services Section */}
    </div>

        );
    }
}