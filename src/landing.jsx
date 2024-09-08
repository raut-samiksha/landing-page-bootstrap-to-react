import React from 'react'

const landing = () => {
  return (
    <div>
    <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#"> <span className="text-warning">Build</span>Con</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
                            
            </ul>
            
          </div>
        </div>
      </nav>

      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="building.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Your Dream House</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed laborum consequuntur corrupti quas adipisci libero?</p>
              <p><a href="#" className="btn btn-warning mt-3">Learn More</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="building 1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Always Dedicated</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed laborum consequuntur corrupti quas adipisci libero?</p>
              <p><a href="#" className="btn btn-warning mt-3">Learn More</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="building 2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>True Construction</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed laborum consequuntur corrupti quas adipisci libero?</p>
              <p><a href="#" className="btn btn-warning mt-3">Learn More</a></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* <!-- about section--> */}
     <section id="about" className="about-section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-12">
                    <div className="about-img">
                        <img src="image.webp" alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                    <div className="about-text">
                        <h2>We Provide Best Quality<br>
                        Services Ever</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officiis ad aliquam quasi nostrum animi nihil ipsum nobis quo perferendis, quaerat doloribus a expedita enim accusantium, velit soluta excepturi! Aspernatur? </p>
                        <a href="#" className="btn btn-warning">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
     </section>

     {/* <!-- Services section --> */}
     <section id="services" className="services section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <h2>Our Services</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur <br> adipisicing elit. Iste, aut.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-4">
                    <div className="card text-white text-center bg-dark pb-2">
                        <div className="card-body">
                            <i className="bi bi-subtract"></i>
                            <h3 className="card-title">Best Quality</h3>
                            <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur atque similique vitae! Cupiditate totam eligendi amet tempora ducimus porro consectetur, ad similique, accusantium, cum adipisci!
                            </p>
                            <button className="btn btn-warning text-dark">Read More</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-12 col-lg-4">
                    <div className="card text-white text-center bg-dark pb-2">
                        <div className="card-body">
                            <i className="bi bi-slack"></i>
                            <h3 className="card-title">Sunstainability</h3>
                            <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur atque similique vitae! Cupiditate totam eligendi amet tempora ducimus porro consectetur, ad similique, accusantium, cum adipisci!
                            </p>
                            <button className="btn btn-warning text-dark">Read More</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-12 col-lg-4">
                    <div className="card text-white text-center bg-dark pb-2">
                        <div className="card-body">
                            <i className="bi bi-playstation"></i>
                            <h3 className="card-title">Integrity</h3>
                            <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur atque similique vitae! Cupiditate totam eligendi amet tempora ducimus porro consectetur, ad similique, accusantium, cum adipisci!
                            </p>
                            <button className="btn btn-warning text-dark">Read More</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     </section>

     {/* <!-- portfolio section--> */}

     <section id="portfolio" className="portfolio section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <h2>Our Projects</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur <br> adipisicing elit. Iste, aut.</p>
                    </div>
                </div>
            </div> 

            <div className="row">
                <div className="col-12 col-md-12 col-lg-4">
                   <div className="card text-center bg-white pb-2">
                    <div className="card-body text-dark">
                        <div className="img-area mb-4">
                            <img src="image 1.jpg" alt="" className="img-fluid" />
                        </div>

                        <h3 className="card-title">Building Make</h3>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste alias deleniti illum minus nesciunt nostrum odit deserunt beatae praesentium!
                        </p>

                        <button className="btn bg-warning text-dark">
                            Learn More
                        </button>
                    </div>
                   </div>
                </div>

                <div className="col-12 col-md-12 col-lg-4">
                    <div className="card text-center bg-white pb-2">
                     <div className="card-body text-dark">
                         <div className="img-area mb-4">
                             <img src="image 2.webp" alt="" className="img-fluid" />
                         </div>
 
                         <h3 className="card-title">Building Make</h3>
                         <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste alias deleniti illum minus nesciunt nostrum odit deserunt beatae praesentium!
                         </p>
 
                         <button className="btn bg-warning text-dark">
                             Learn More
                         </button>
                     </div>
                    </div>
                 </div>

                 <div className="col-12 col-md-12 col-lg-4">
                    <div className="card text-center bg-white pb-2">
                     <div className="card-body text-dark">
                         <div className="img-area mb-4">
                             <img src="image 3.webp" alt="" className="img-fluid" />
                         </div>
 
                         <h3 className="card-title">Building Make</h3>
                         <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste alias deleniti illum minus nesciunt nostrum odit deserunt beatae praesentium!
                         </p>
 
                         <button className="btn bg-warning text-dark">
                             Learn More
                         </button>
                     </div>
                    </div>
                 </div>
            </div>
        </div>
     </section>

     {/* <!-- team section --> */}
     <section id="team" className="team section-padding">
        <div className="cotainer">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <h2>Our Team</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur <br> adipisicing elit. Iste, aut.</p>
                    </div>
                </div>
            </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <img src="girl 1.avif" alt="" className="img-fluid rounded-circle" />
                                <h3 className="card-title p-2">Jack Wilsom</h3>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam placeat saepe perferendis reiciendis cum. Voluptatem?
                                </p>
                                <p className="socials">
                                    <i className="bi bi-twitter text-dark mx-1"></i>
                                    <i className="bi bi-facebook text-dark mx-1"></i>
                                    <i className="bi bi-linkedin text-dark mx-1"></i>
                                    <i className="bi bi-instagram text-dark mx-1"></i>

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <img src="Boy.jpg" alt="" className="img-fluid rounded-circle" />
                                <h3 className="card-title p-2">Jack Wilsom</h3>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam placeat saepe perferendis reiciendis cum. Voluptatem?
                                </p>
                                <p className="socials">
                                    <i className="bi bi-twitter text-dark mx-1"></i>
                                    <i className="bi bi-facebook text-dark mx-1"></i>
                                    <i className="bi bi-linkedin text-dark mx-1"></i>
                                    <i className="bi bi-instagram text-dark mx-1"></i>

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <img src="girl.avif" alt="" className="img-fluid rounded-circle">
                                <h3 className="card-title p-2">Jack Wilsom</h3>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam placeat saepe perferendis reiciendis cum. Voluptatem?
                                </p>
                                <p className="socials">
                                    <i className="bi bi-twitter text-dark mx-1"></i>
                                    <i className="bi bi-facebook text-dark mx-1"></i>
                                    <i className="bi bi-linkedin text-dark mx-1"></i>
                                    <i className="bi bi-instagram text-dark mx-1"></i>

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <img src="Boy 1.webp" alt="" className="img-fluid rounded-circle">
                                <h3 className="card-title p-2">Jack Wilsom</h3>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam placeat saepe perferendis reiciendis cum. Voluptatem?
                                </p>
                                <p className="socials">
                                    <i className="bi bi-twitter text-dark mx-1"></i>
                                    <i className="bi bi-facebook text-dark mx-1"></i>
                                    <i className="bi bi-linkedin text-dark mx-1"></i>
                                    <i className="bi bi-instagram text-dark mx-1"></i>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
     </section>

     {/* <!-- contact section--> */}

     <section id="contact" className="contact section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <h2>Contact Us</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur <br> adipisicing elit. Iste, aut.</p>
                    </div>
                </div>
            </div>

            <div className="row m-0">
                <div className="col-md-12 p-0 pt-4 ">
                    <form action="#" className="bg-light p-4.m-auto">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <input type="text" className="form-control" required placeholder="Your Full name" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <input type="email" className="form-control" required placeholder="Your Email here" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <textarea rows="3" required className="form-control" placeholder="Your Query Here"></textarea>
                                </div>
                            </div>
                            <button className="btn btn-warning btn-lg btn-block mt-3">
                                Send Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     </section>

     {/* <!-- Footer section--> */}

     <footer className="bg-dark p-2 text-center">
        <div className="container">
            <p className="text-white">All Right Reserved @----</p>
        </div>
     </footer>
     </body>
    </div>
  )
}

export default landing;