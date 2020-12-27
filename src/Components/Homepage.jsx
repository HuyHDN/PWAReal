import React, { Component } from 'react'
import '../style.css'
export default class Homepage extends Component {
    componentDidMount(){
        const script = document.createElement("script");
        script.src = "../js/main.js";
        script.async = true;
        document.body.appendChild(script);
    }
    render() {
        return (
            <div>
                <div>
  {/* ======= Property Search Section ======= */}
  <div className="click-closed" />
  {/*/ Form Search Star /*/}
  <div className="box-collapse">
    <div className="title-box-d">
      <h3 className="title-d">Search Property</h3>
    </div>
    <span className="close-box-collapse right-boxed ion-ios-close" />
    <div className="box-collapse-wrap form">
      <form className="form-a">
        <div className="row">
          <div className="col-md-12 mb-2">
            <div className="form-group">
              <label htmlFor="Type">Keyword</label>
              <input type="text" className="form-control form-control-lg form-control-a" placeholder="Keyword" />
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label htmlFor="Type">Type</label>
              <select className="form-control form-control-lg form-control-a" id="Type">
                <option>All Type</option>
                <option>For Rent</option>
                <option>For Sale</option>
                <option>Open House</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <select className="form-control form-control-lg form-control-a" id="city">
                <option>All City</option>
                <option>Alabama</option>
                <option>Arizona</option>
                <option>California</option>
                <option>Colorado</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label htmlFor="bedrooms">Bedrooms</label>
              <select className="form-control form-control-lg form-control-a" id="bedrooms">
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label htmlFor="garages">Garages</label>
              <select className="form-control form-control-lg form-control-a" id="garages">
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label htmlFor="bathrooms">Bathrooms</label>
              <select className="form-control form-control-lg form-control-a" id="bathrooms">
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label htmlFor="price">Min Price</label>
              <select className="form-control form-control-lg form-control-a" id="price">
                <option>Unlimite</option>
                <option>$50,000</option>
                <option>$100,000</option>
                <option>$150,000</option>
                <option>$200,000</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-b">Search Property</button>
          </div>
        </div>
      </form>
    </div>
  </div>{/* End Property Search Section */}&gt;
  {/* ======= Header/Navbar ======= */}
  <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
    <div className="container">
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span />
        <span />
        <span />
      </button>
      <a className="navbar-brand text-brand" href="index.html">Estate<span className="color-b">Agency</span></a>
      <button type="button" className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-expanded="false">
        <span className="fa fa-search" aria-hidden="true" />
      </button>
      <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="property-grid.html">Property</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="blog-grid.html">Blog</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Pages
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="property-single.html">Property Single</a>
              <a className="dropdown-item" href="blog-single.html">Blog Single</a>
              <a className="dropdown-item" href="agents-grid.html">Agents Grid</a>
              <a className="dropdown-item" href="agent-single.html">Agent Single</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
      <button type="button" className="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-expanded="false">
        <span className="fa fa-search" aria-hidden="true" />
      </button>
    </div>
  </nav>{/* End Header/Navbar */}
  {/* ======= Intro Section ======= */}
  <div className="intro intro-carousel">
    <div id="carousel" className="owl-carousel owl-theme">
      <div className="carousel-item-a intro-item bg-image" style={{backgroundImage: 'url(%PUBLIC_URL%/assets/img/slide-1.jpg)'}}>
        <div className="overlay overlay-a" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="intro-body">
                    <p className="intro-title-top">Doral, Florida
                      <br /> 78345</p>
                    <h1 className="intro-title mb-4">
                      <span className="color-b">204 </span> Mount
                      <br /> Olive Road Two</h1>
                    <p className="intro-subtitle intro-price">
                      <a href="#"><span className="price-a">rent | $ 12.000</span></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item-a intro-item bg-image" style={{backgroundImage: 'url(assets/img/slide-2.jpg)'}}>
        <div className="overlay overlay-a" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="intro-body">
                    <p className="intro-title-top">Doral, Florida
                      <br /> 78345</p>
                    <h1 className="intro-title mb-4">
                      <span className="color-b">204 </span> Rino
                      <br /> Venda Road Five</h1>
                    <p className="intro-subtitle intro-price">
                      <a href="#"><span className="price-a">rent | $ 12.000</span></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item-a intro-item bg-image" style={{backgroundImage: 'url(assets/img/slide-3.jpg)'}}>
        <div className="overlay overlay-a" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="intro-body">
                    <p className="intro-title-top">Doral, Florida
                      <br /> 78345</p>
                    <h1 className="intro-title mb-4">
                      <span className="color-b">204 </span> Alira
                      <br /> Roan Road One</h1>
                    <p className="intro-subtitle intro-price">
                      <a href="#"><span className="price-a">rent | $ 12.000</span></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{/* End Intro Section */}
  <main id="main">
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
    {/* ======= Latest Properties Section ======= */}
    
    <section className="section-property section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Latest Properties</h2>
              </div>
              <div className="title-link">
                <a href="property-grid.html">All Property
                  <span className="ion-ios-arrow-forward" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="property-carousel" className="owl-carousel owl-theme owl-loaded owl-drag">
          {/* <div className="owl-stage-outer">
          </div>
          <div className="owl-stage" style="transform: translate3d(-266px, 0px, 0px); transition: all 0s ease 0s; width: 1067px;">
            </div>
            <div className="owl-item cloned" style="width: 103.333px; margin-right: 30px;">
              </div> */}
          <div className="carousel-item-b">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img src="/assets/img/property-6.jpg" alt="" className="img-a img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="property-single.html">206 Mount
                        <br /> Olive Road Two</a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | $ 12.000</span>
                    </div>
                    <a href="#" className="link-a">Click here to view
                      <span className="ion-ios-arrow-forward" />
                    </a>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Area</h4>
                        <span>340m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Beds</h4>
                        <span>2</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Baths</h4>
                        <span>4</span>
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
          <div className="carousel-item-b">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img src="assets/img/property-3.jpg" alt="" className="img-a img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="property-single.html">157 West
                        <br /> Central Park</a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | $ 12.000</span>
                    </div>
                    <a href="property-single.html" className="link-a">Click here to view
                      <span className="ion-ios-arrow-forward" />
                    </a>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Area</h4>
                        <span>340m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Beds</h4>
                        <span>2</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Baths</h4>
                        <span>4</span>
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
          <div className="carousel-item-b">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img src="assets/img/property-7.jpg" alt="" className="img-a img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="property-single.html">245 Azabu
                        <br /> Nishi Park let</a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | $ 12.000</span>
                    </div>
                    <a href="property-single.html" className="link-a">Click here to view
                      <span className="ion-ios-arrow-forward" />
                    </a>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Area</h4>
                        <span>340m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Beds</h4>
                        <span>2</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Baths</h4>
                        <span>4</span>
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
          <div className="carousel-item-b">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img src="assets/img/property-10.jpg" alt="" className="img-a img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="property-single.html">204 Montal
                        <br /> South Bela Two</a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | $ 12.000</span>
                    </div>
                    <a href="property-single.html" className="link-a">Click here to view
                      <span className="ion-ios-arrow-forward" />
                    </a>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Area</h4>
                        <span>340m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Beds</h4>
                        <span>2</span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Baths</h4>
                        <span>4</span>
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
        </div>
      </div>
    </section>{/* End Latest Properties Section */}

    
    
    {/* ======= Agents Section ======= */}
    <section className="section-agents section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Best Agents</h2>
              </div>
              <div className="title-link">
                <a href="agents-grid.html">All Agents
                  <span className="ion-ios-arrow-forward" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img src="assets/img/agent-4.jpg" alt="" className="img-d img-fluid" />
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">Margaret Sotillo
                        <br /> Escala</a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> +54 356 945234</p>
                    <p>
                      <strong>Email: </strong> agents@example.com</p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="fa fa-pinterest-p" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="fa fa-dribbble" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img src="assets/img/agent-1.jpg" alt="" className="img-d img-fluid" />
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">Stiven Spilver
                        <br /> Darw</a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> +54 356 945234</p>
                    <p>
                      <strong>Email: </strong> agents@example.com</p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="fa fa-pinterest-p" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="fa fa-dribbble" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img src="assets/img/agent-5.jpg" alt="" className="img-d img-fluid" />
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="agent-single.html" className="link-two">Emma Toledo
                        <br /> Cascada</a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">
                    Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                  </p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> +54 356 945234</p>
                    <p>
                      <strong>Email: </strong> agents@example.com</p>
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="fa fa-pinterest-p" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="link-one">
                          <i className="fa fa-dribbble" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Agents Section */}
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
                <a href="blog-grid.html">All News
                  <span className="ion-ios-arrow-forward" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="new-carousel" className="owl-carousel owl-theme">
          <div className="carousel-item-c">
            <div className="card-box-b card-shadow news-box">
              <div className="img-box-b">
                <img src="assets/img/post-2.jpg" alt="" className="img-b img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-header-b">
                  <div className="card-category-b">
                    <a href="#" className="category-b">House</a>
                  </div>
                  <div className="card-title-b">
                    <h2 className="title-2">
                      <a href="blog-single.html">House is comming
                        <br /> new</a>
                    </h2>
                  </div>
                  <div className="card-date">
                    <span className="date-b">18 Sep. 2017</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item-c">
            <div className="card-box-b card-shadow news-box">
              <div className="img-box-b">
                <img src="assets/img/post-5.jpg" alt="" className="img-b img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-header-b">
                  <div className="card-category-b">
                    <a href="#" className="category-b">Travel</a>
                  </div>
                  <div className="card-title-b">
                    <h2 className="title-2">
                      <a href="blog-single.html">Travel is comming
                        <br /> new</a>
                    </h2>
                  </div>
                  <div className="card-date">
                    <span className="date-b">18 Sep. 2017</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item-c">
            <div className="card-box-b card-shadow news-box">
              <div className="img-box-b">
                <img src="assets/img/post-7.jpg" alt="" className="img-b img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-header-b">
                  <div className="card-category-b">
                    <a href="#" className="category-b">Park</a>
                  </div>
                  <div className="card-title-b">
                    <h2 className="title-2">
                      <a href="blog-single.html">Park is comming
                        <br /> new</a>
                    </h2>
                  </div>
                  <div className="card-date">
                    <span className="date-b">18 Sep. 2017</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item-c">
            <div className="card-box-b card-shadow news-box">
              <div className="img-box-b">
                <img src="assets/img/post-3.jpg" alt="" className="img-b img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-header-b">
                  <div className="card-category-b">
                    <a href="#" className="category-b">Travel</a>
                  </div>
                  <div className="card-title-b">
                    <h2 className="title-2">
                      <a href="#">Travel is comming
                        <br /> new</a>
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
    </section>{/* End Latest News Section */}
    {/* ======= Testimonials Section ======= */}
    <section className="section-testimonials section-t8 nav-arrow-a">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Testimonials</h2>
              </div>
            </div>
          </div>
        </div>
        <div id="testimonial-carousel" className="owl-carousel owl-arrow">
          <div className="carousel-item-a">
            <div className="testimonials-box">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="testimonial-img">
                    <img src="assets/img/testimonial-1.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="testimonial-ico">
                    <span className="ion-ios-quote" />
                  </div>
                  <div className="testimonials-content">
                    <p className="testimonial-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium
                      debitis hic ber quibusdam
                      voluptatibus officia expedita corpori.
                    </p>
                  </div>
                  <div className="testimonial-author-box">
                    <img src="assets/img/mini-testimonial-1.jpg" alt="" className="testimonial-avatar" />
                    <h5 className="testimonial-author">Albert &amp; Erika</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item-a">
            <div className="testimonials-box">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="testimonial-img">
                    <img src="assets/img/testimonial-2.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="testimonial-ico">
                    <span className="ion-ios-quote" />
                  </div>
                  <div className="testimonials-content">
                    <p className="testimonial-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium
                      debitis hic ber quibusdam
                      voluptatibus officia expedita corpori.
                    </p>
                  </div>
                  <div className="testimonial-author-box">
                    <img src="assets/img/mini-testimonial-2.jpg" alt="" className="testimonial-avatar" />
                    <h5 className="testimonial-author">Pablo &amp; Emma</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Testimonials Section */}
  </main>{/* End #main */}
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
                Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat duis
                sed aute irure.
              </p>
            </div>
            <div className="w-footer-a">
              <ul className="list-unstyled">
                <li className="color-a">
                  <span className="color-text-a">Phone .</span> contact@example.com</li>
                <li className="color-a">
                  <span className="color-text-a">Email .</span> +54 356 945234</li>
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
                    <i className="fa fa-angle-right" /> <a href="#">Site Map</a>
                  </li>
                  <li className="item-list-a">
                    <i className="fa fa-angle-right" /> <a href="#">Legal</a>
                  </li>
                  <li className="item-list-a">
                    <i className="fa fa-angle-right" /> <a href="#">Agent Admin</a>
                  </li>
                  <li className="item-list-a">
                    <i className="fa fa-angle-right" /> <a href="#">Careers</a>
                  </li>
                  <li className="item-list-a">
                    <i className="fa fa-angle-right" /> <a href="#">Affiliate</a>
                  </li>
                  <li className="item-list-a">
                    <i className="fa fa-angle-right" /> <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 section-md-t3">
          <div className="widget-a">
            <div className="w-header-a">
              <h3 className="w-title-a text-brand">International sites</h3>
            </div>
            <div className="w-body-a">
              <ul className="list-unstyled">
                <li className="item-list-a">
                  <i className="fa fa-angle-right" /> <a href="#">Venezuela</a>
                </li>
                <li className="item-list-a">
                  <i className="fa fa-angle-right" /> <a href="#">China</a>
                </li>
                <li className="item-list-a">
                  <i className="fa fa-angle-right" /> <a href="#">Hong Kong</a>
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
  <a href="#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
</div>

            </div>
        )
    }
}
