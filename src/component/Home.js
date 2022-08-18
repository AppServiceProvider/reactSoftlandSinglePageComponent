//import logo "/src/assets/img/undraw_svg_1.svg" 
import logo from "../undraw_svg_1.svg";
// import logotwo from "../undraw_svg_4.svg";
import { BsPeople, BsBarChart,BsFillBrightnessHighFill } from "react-icons/bs";
const Home = () => {
    return (
        <>
<section className="section">
<div className="container">

  <div className="row justify-content-center text-center mb-5">
    <div className="col-md-5" data-aos="fade-up">
      <h2 className="section-heading">Save your time to using SoftLand</h2>
    </div>
  </div>

  <div className="row">
    <div className="col-md-4" data-aos="fade-up" data-aos-delay="">
      <div className="feature-1 text-center">
        <div className="wrap-icon icon-1">
          <i className="bi bi-people"><BsPeople/></i>
        </div>
        <h3 className="mb-3">Explore Your Team</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
      </div>
    </div>
    <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
      <div className="feature-1 text-center">
        <div className="wrap-icon icon-1">
          <i className="bi bi-brightness-high">
            <BsFillBrightnessHighFill/>
          </i>
        </div>
        <h3 className="mb-3">Digital Whiteboard</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
      </div>
    </div>
    <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
      <div className="feature-1 text-center">
        <div className="wrap-icon icon-1">
          <i className="bi bi-bar-chart">
            <BsBarChart/>
          </i>
        </div>
        <h3 className="mb-3">Design To Development</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
      </div>
    </div>
  </div>

</div>
</section>

<section className="section">

<div className="container">
  <div className="row justify-content-center text-center mb-5" data-aos="fade">
    <div className="col-md-6 mb-5">
      <img src={require('../undraw_svg_1.svg').default} alt="Image" className="img-fluid" />
    </div>
  </div>

  <div className="row">
    <div className="col-md-4">
      <div className="step">
        <span className="number">01</span>
        <h3>Sign Up</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="step">
        <span className="number">02</span>
        <h3>Create Profile</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="step">
        <span className="number">03</span>
        <h3>Enjoy the app</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
      </div>
    </div>
  </div>
</div>

</section>

<section className="section">
<div className="container">
  <div className="row align-items-center">
    <div className="col-md-4 me-auto">
      <h2 className="mb-4">Seamlessly Communicate</h2>
      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio,
        laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt
        dolore mollitia esse natus beatae.</p>
      <p><a href="#" className="btn btn-primary">Download Now</a></p>
    </div>
    <div className="col-md-6" data-aos="fade-left">
    {/* <img src="https://images.pexels.com/photos/12572721/pexels-photo-12572721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image" className="img-fluid" /> */}

      <img src={logo} alt="Image" className="img-fluid" />
    </div>
  </div>
</div>
</section>

<section className="section">
<div className="container">
  <div className="row align-items-center">
    <div className="col-md-4 ms-auto order-2">
      <h2 className="mb-4">Gather Feedback</h2>
      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio,
        laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt
        dolore mollitia esse natus beatae.</p>
      <p><a href="" className="btn btn-primary">Download Now</a></p>
    </div>
    <div className="col-md-6" data-aos="fade-right">
      <img src={logo} alt="Image" className="img-fluid" />
    </div>
  </div>
</div>
</section>
        </>
    )
  };
  
  export default Home;