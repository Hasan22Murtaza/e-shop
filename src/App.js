/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import Header from "./Components/header";

function App() {
  return (
<>
<>
  {/* MENU BAR */}
    <Header/>
  {/* HERO */}
  <section className="hero hero-bg d-flex justify-content-center align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
          <div className="hero-text">
            <h1 className="text-white" data-aos="fade-up">
              We Teck Enable Your Business
            </h1>
            <a
              href="contact.html"
              className="custom-btn btn-bg btn mt-3"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Let us discuss together!
            </a>
            <strong
              className="d-block py-3 pl-5 text-white"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <i className="fa fa-phone mr-2" /> +92 311 7082234
            </strong>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="hero-image" data-aos="fade-up" data-aos-delay={300}>
            <img
              src="assets/images/working-girl.png"
              className="img-fluid"
              alt="workinggirl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ABOUT */}
  <section className="about section-padding pb-0" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 mx-auto col-md-10 col-12">
          <div className="about-info">
            <h2 className="mb-4" data-aos="fade-up">
              the best <strong>Riemann System agency</strong> in Faisalabad
            </h2>
            <p className="mb-0" data-aos="fade-up">
              Total 5 HTML pages are included in this template from TemplateMo
              website. Please check 2 <a href="blog.html">blog</a> pages,{" "}
              <a href="project-detail.html">project</a> page, and{" "}
              <a href="contact.html">contact</a> page.
              <br />
              <br />
              You are <strong>allowed</strong> to use this template for
              commercial or non-commercial purpose. You are NOT allowed to
              redistribute the template ZIP file on template collection
              websites.
            </p>
          </div>
          <div className="about-image" data-aos="fade-up" data-aos-delay={200}>
            <img src="assets/images/office.png" className="img-fluid" alt="office" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* PROJECT */}
  <section className="project section-padding" id="project">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 col-12">
          <h2 className="mb-5 text-center" data-aos="fade-up">
            Please take a look through our
            <strong>featured Digital Trends</strong>
          </h2>
          <div className="owl-carousel owl-theme" id="project-slide">
            <div
              className="item project-wrapper"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <img
                src="assets/images/project/project-image01.jpg"
                className="img-fluid"
                alt="projectimage"
              />
              <div className="project-info">
                <small>Marketing</small>
                <h3>
                  <a href="project-detail.html">
                    <span>Sweet Go Agency</span>
                    <i className="fa fa-angle-right project-icon" />
                  </a>
                </h3>
              </div>
            </div>
            <div className="item project-wrapper" data-aos="fade-up">
              <img
                src="assets/images/project/project-image02.jpg"
                className="img-fluid"
                alt="projectimage"
              />
              <div className="project-info">
                <small>Website</small>
                <h3>
                  <a href="project-detail.html">
                    <span>Smart Ladies</span>
                    <i className="fa fa-angle-right project-icon" />
                  </a>
                </h3>
              </div>
            </div>
            <div className="item project-wrapper" data-aos="fade-up">
              <img
                src="assets/images/project/project-image03.jpg"
                className="img-fluid"
                alt="projectimage"
              />
              <div className="project-info">
                <small>Branding</small>
                <h3>
                  <a href="project-detail.html">
                    <span>Shoes factory</span>
                    <i className="fa fa-angle-right project-icon" />
                  </a>
                </h3>
              </div>
            </div>
            <div className="item project-wrapper" data-aos="fade-up">
              <img
                src="assets/images/project/project-image04.jpg"
                className="img-fluid"
                alt="projectimage"
              />
              <div className="project-info">
                <small>Social Media</small>
                <h3>
                  <a href="project-detail.html">
                    <span>Race Bicycle</span>
                    <i className="fa fa-angle-right project-icon" />
                  </a>
                </h3>
              </div>
            </div>
            <div className="item project-wrapper" data-aos="fade-up">
              <img
                src="assets/images/project/project-image05.jpg"
                className="img-fluid"
                alt="projectimage"
              />
              <div className="project-info">
                <small>Video</small>
                <h3>
                  <a href="project-detail.html">
                    <span>Ultimate HealthCare</span>
                    <i className="fa fa-angle-right project-icon" />
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* TESTIMONIAL */}
  <section className="testimonial section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-5 col-12">
          <div className="contact-image" data-aos="fade-up">
            <img
              src="assets/images/female-avatar.png"
              className="img-fluid"
              alt="website"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-7 col-12">
          <h4 className="my-5 pt-3" data-aos="fade-up" data-aos-delay={100}>
            Client Testimonials
          </h4>
          <div className="quote" data-aos="fade-up" data-aos-delay={200} />
          <h2 className="mb-4" data-aos="fade-up" data-aos-delay={300}>
            Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt
            mollit id et sit proident dolor nulla sed commodo.
          </h2>
          <p data-aos="fade-up" data-aos-delay={400}>
            <strong>Mary Zoe</strong>
            <span className="mx-1">/</span>
            <small>Digital Agency (CEO)</small>
          </p>
        </div>
      </div>
    </div>
  </section>

</>

</>
  );
}

export default App;
