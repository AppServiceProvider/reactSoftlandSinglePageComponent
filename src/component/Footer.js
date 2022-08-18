import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter ,FaLevelUpAlt} from "react-icons/fa";
import * as React from "react";
// import ScrollToTop from "react-scroll-to-top";

const Footer=()=>{
    return(
        <>
          {/* <!-- ======= Footer ======= --> */}
  <footer className="footer" role="contentinfo">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4 mb-md-0">
          <h3>About SoftLand</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam aperiam
            dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi.</p>
          <p className="social">
            
            {/* <a href="#"><TwiterAlice/></a> */}
            
            <a href="www.twitter.com"><span className=""><FaTwitter/></span></a>
            <a href="#"><span className="bi bi-facebook"><FaFacebook/></span></a>
            <a href="#"><span className="bi bi-instagram"><FaInstagram/></span></a>
            <a href="#"><span className="bi bi-linkedin"><FaLinkedin/></span></a>
          </p>
        </div>
        <div className="col-md-7 ms-auto">
          <div className="row site-section pt-0">
            <div className="col-md-4 mb-4 mb-md-0">
              <h3>Navigation</h3>
              <ul className="list-unstyled">
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h3>Services</h3>
              <ul className="list-unstyled">
                <li><a href="#">Team</a></li>
                <li><a href="#">Collaboration</a></li>
                <li><a href="#">Todos</a></li>
                <li><a href="#">Events</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h3>Downloads</h3>
              <ul className="list-unstyled">
                <li><a href="#">Get from the App Store</a></li>
                <li><a href="#">Get from the Play Store</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center text-center">
        <div className="col-md-7">
          <p className="copyright">&copy; Copyright SoftLand. All Rights Reserved</p>
          <div className="credits">
            All the links in the footer should remain intact.
            You can delete the links only if you purchased the pro version.
            Licensing information: https://bootstrapmade.com/license/
            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=SoftLand
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </div>

    </div>
  </footer>
  {/* <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"><FaLevelUpAlt/></i></a> */}

  {/* <div style={{ marginTop: "150vh" }} />
      <ScrollToTop smooth /> */}
        </>
    )
}
export default Footer;