import phoneOne from "../assets/img/phone_1.png";
import phoneTwo from "../assets/img/phone_2.png";

const Hero =(props)=>{
    return(
        <>

<section class="hero-section" id="hero">
    <div class="wave">
      {/* <svg width="100%" height="355px" viewBox="0 0 1920 355" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Apple-TV" transform="translate(0.000000, -402.000000)" fill="#FFFFFF">
            <path d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z" id="Path"></path>
          </g>
        </g>
      </svg> */}
        <svg height={355} viewBox="0 0 1920 355" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 37.134c175.04 25.759 327.944 38.638 458.71 38.638 196.15 0 411.935-35.14 747.273-67.58 223.558-21.626 461.564.9 714.017 67.58V355H0V37.134Z" fill="#FFF" fillRule="evenodd"/>
        </svg>
    </div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 hero-text-image">
          <div class="row">
            <div class="col-lg-8 text-center text-lg-start">
              <h1 data-aos="fade-right">Promote Your App with SoftLand</h1>
              <p class="mb-5" data-aos="fade-right" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.</p>
              <p data-aos="fade-right" data-aos-delay="200" data-aos-offset="-500"><a href="#" class="btn btn-outline-white">Get started</a></p>
            </div>
            <div class="col-lg-4 iphone-wrap">
              <img src={phoneOne} alt="Image" class="phone-1" data-aos="fade-right" />
              <img src={phoneTwo} alt="Image" class="phone-2" data-aos="fade-right" data-aos-delay="200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}
export default Hero; 