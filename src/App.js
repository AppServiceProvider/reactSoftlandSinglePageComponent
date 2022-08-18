
import Home from './component/Home';
import Hero from './component/Hero';
import Testimonial from './component/Testimonial';
import Cta from './component/Cta';
import Footer from './component/Footer';
import Header from './component/Header';
import "./assets/img/favicon.png";
import "./assets/img/apple-touch-icon.png";


import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
  <>
  <main id="main">
    <Header/>
    <Hero/>
    <Home/>
    <Testimonial/>
    <Cta/>
  </main>  
    <Footer/>
    </>
  )
}

export default App;