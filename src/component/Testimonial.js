// import Slider from "react-slick/lib/slider";
import logo from "../assets/img/person_1.jpg";
import React from "react";
import Slider from "react-slick";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
        <>
{/* <!-- ======= Testimonials Section ======= --> */}
<section className="section border-top border-bottom">
  <div className="container">
    <div className="row justify-content-center text-center mb-5">
      <div className="col-md-4">
        <h2 className="section-heading">Review From Our Users</h2>
      </div>
    </div>
    <div className="row justify-content-center text-center">
      <div className="col-md-7">

        <div className="testimonials-slider" data-aos="fade-up" data-aos-delay="100">
          <div className="">
          <Slider {...settings}>
            <div className="">
              <div className="review text-center">
                <p className="stars">
                  <span className="bi bi-star-fill"></span>
                  <span className="bi bi-star-fill"></span>
                  <span className="bi bi-star-fill"></span>
                  <span className="bi bi-star-fill"></span>
                  <span className="bi bi-star-fill muted"></span>
                </p>
                <h3>Excellent App!</h3>
                <blockquote>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam
                    aperiam dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi,
                    provident voluptates consectetur maiores quos.</p>
                </blockquote>

                <p className="review-user">
                {/* assets/img/person_1.jpg */}
                  <img src={logo} alt="Image" className="img-fluid rounded-circle mb-3"/>
                  <span className="d-block">
                    <span className="text-black">Jean Doe</span>, ; App User
                  </span>
                </p>

              </div>
            </div>

            <div className="">
              <div className="review text-center">
                <p className="stars">
                  <span className="bi bi-star-fill"></span>
                  <span className="bi bi-star-fill"></span>
                  <span className="bi bi-star-fill"></span>
                  <span className="bi bi-star-fill"></span>
                  <span className="bi bi-star-fill muted"></span>
                </p>
                <h3>This App is easy to use!</h3>
                <blockquote>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam
                    aperiam dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi,
                    provident voluptates consectetur maiores quos.</p>
                </blockquote>

                <p className="review-user">
                  <img src={logo} alt="Image" className="img-fluid rounded-circle mb-3" />
                  <span className="d-block">
                    <span className="text-black">Johan Smith</span>, &mdash; App User
                  </span>
                </p>

              </div>
            </div>

            <div className="">
              <div className="review text-center">
                <p className="stars">
                  <span className="bi bi-star-fill"></span>
                  <span className="bi bi-star-fill"></span>
                  <span className="bi bi-star-fill"></span>
                  <span className="bi bi-star-fill"></span>
                  <span className="bi bi-star-fill muted"></span>
                </p>
                <h3>Awesome functionality!</h3>
                <blockquote>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam
                    aperiam dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi,
                    provident voluptates consectetur maiores quos.</p>
                </blockquote>

                <p className="review-user">
                  <img src={logo} alt="Image" className="img-fluid rounded-circle mb-3" />
                  <span className="d-block">
                    <span className="text-black">Jean Thunberg</span>, &mdash; App User
                  </span>
                </p>

              </div>
            </div>
        </Slider>
          </div>
          {/* <div className="pagination"></div> */}
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
  };
  
  export default Testimonial;
