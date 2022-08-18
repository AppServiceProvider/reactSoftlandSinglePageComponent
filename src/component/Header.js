const Header = ()=>{
    return (
        <>
          <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex justify-content-between align-items-center">

      <div className="logo">
        <h1><a href="index.html">SoftLand</a></h1>
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="active " href="index.html">Home</a></li>
          <li>
            {/* <a href={FeatureMain}>Features</a> */}
            {/* <Link to="/aaa">Home</Link> */}
          </li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>
        </>
    )
}
export default Header;