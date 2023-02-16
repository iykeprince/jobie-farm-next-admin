import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products/Products";
import { ProductsActions } from "../store/Products/ProductsSlice";
// import styles from "../styles/Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const colRef = collection(db, "products");
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      dispatch(ProductsActions.addProducts({ products: docs }));
    })();
  }, [dispatch]);
  return (
    <div>
      <main>
        {/*  */}
        <Header />
        {/*  */}
        {/* Banner */}
        <section className="banner" style={{ height: "580px" }}>
          <div className="banner-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="banner-slider-part"
                  style={{
                    backgroundImage:
                      "url(/assets/images/banner/bg-images/01.jpg)",
                  }}
                >
                  {/* <!-- <div className="overlay"></div> --> */}
                  <div className="container">
                    <div className="row flex-row-reverse justify-content-center align-items-center">
                      <div className="col-12">
                        <div className="banner-content">
                          <h1 className="banner-title">
                            <b className="d-lg-block">Fresh Killed Poultry </b>
                            Chickens Specialty Game Meats Eggs And More!!!{" "}
                          </h1>
                          <a href="#" className="lab-btn">
                            <span>DISCOVER NOW</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="banner-slider-part"
                  style={{
                    backgroundImage:
                      "url(../assets/images/banner/bg-images/02.jpg)",
                  }}
                >
                  {/* <!-- <div className="overlay"></div> --> */}
                  <div className="container">
                    <div className="row flex-row-reverse justify-content-center align-items-center">
                      <div className="col-12">
                        <div className="banner-content">
                          <h1 className="banner-title">
                            <b className="d-lg-block">Fresh Killed Poultry </b>
                            Chickens Specialty Game Meats Eggs And More!!!{" "}
                          </h1>
                          <a href="#" className="lab-btn">
                            <span>DISCOVER NOW</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="banner-slider-part"
                  style={{
                    backgroundImage:
                      "url(../assets/images/banner/bg-images/01.jpg)",
                  }}
                >
                  {/* <!-- <div className="overlay"></div> --> */}
                  <div className="container">
                    <div className="row flex-row-reverse justify-content-center align-items-center">
                      <div className="col-12">
                        <div className="banner-content">
                          <h1 className="banner-title">
                            <b className="d-lg-block">Fresh Killed Poultry </b>
                            Chickens Specialty Game Meats Eggs And More!!!{" "}
                          </h1>
                          <a href="#" className="lab-btn">
                            <span>DISCOVER NOW</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </section>
        {/* Banner */}
        {/* Little About */}
        <section className="about-section relative padding-tb bg-ash">
          <div className="container">
            <div className="row mb-15">
              <div className="col-xl-7 col-12">
                <div className="about-left-part">
                  <div className="about-item">
                    <div className="about-inner">
                      <div className="about-thumb">
                        <Image
                          width={100}
                          height={100}
                          src="/assets/images/about/05.jpg"
                          alt="about"
                        />
                      </div>
                      <div className="about-content">
                        <div className="ac-thumb">
                          <Image
                            width={100}
                            height={100}
                            src="/assets/images/about/icon/01.png"
                            alt="about Image"
                          />
                        </div>
                        <div className="ac-content">
                          <h6>Daily 700+ Collect</h6>
                          <p>Continually Aggregate web interfaces</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-item">
                    <div className="about-inner">
                      <div className="about-thumb">
                        <Image
                          width={100}
                          height={100}
                          src="/assets/images/about/06.jpg"
                          alt="about"
                        />
                      </div>
                      <div className="about-content">
                        <div className="ac-thumb">
                          <Image
                            width={100}
                            height={100}
                            src="/assets/images/about/icon/02.png"
                            alt="about Image"
                          />
                        </div>
                        <div className="ac-content">
                          <h6>500+ Chicken</h6>
                          <p>Continually Aggregate web interfaces</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-item">
                    <div className="about-inner">
                      <div className="about-thumb">
                        <Image
                          width={100}
                          height={100}
                          src="/assets/images/about/07.jpg"
                          alt="about"
                        />
                      </div>
                      <div className="about-content">
                        <div className="ac-thumb">
                          <Image
                            width={100}
                            height={100}
                            src="/assets/images/about/icon/03.png"
                            alt="about Image"
                          />
                        </div>
                        <div className="ac-content">
                          <h6>Daily 100kg+ Meet</h6>
                          <p>Continually Aggregate web interfaces</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-12">
                <div className="about-wrapper p-0">
                  <div className="about-title">
                    <h2>
                      <span className="d-lg-block">Welcome to Our Murgi</span>
                      <span className="d-lg-block"> And Egg Farm.</span>
                    </h2>
                  </div>
                  <div className="about-content">
                    <p>
                      Continually productize compelling quality for packed with
                      Elated productize compelling quality for packed with all
                      Elated Them Setting up to website and creating pages.{" "}
                    </p>
                    <ul className="lab-ul list-group mb-3">
                      <li className="list-group-item py-1 px-0 border-none">
                        <i className="icofont-tick-boxed mr-2 color-theme"></i>
                        We are providing different services
                      </li>
                      <li className="list-group-item py-1 px-0 border-none">
                        <i className="icofont-tick-boxed mr-2 color-theme"></i>
                        We are one of leading company{" "}
                      </li>
                      <li className="list-group-item py-1 px-0 border-none">
                        <i className="icofont-tick-boxed mr-2 color-theme"></i>
                        Profitability is the primary goal of all business
                      </li>
                      <li className="list-group-item py-1 px-0 border-none">
                        <i className="icofont-tick-boxed mr-2 color-theme"></i>
                        Learn how to grow your Business{" "}
                      </li>
                      <li className="list-group-item py-1 px-0 border-none">
                        <i className="icofont-tick-boxed mr-2 color-theme"></i>
                        Professional solutions for your business
                      </li>
                    </ul>
                    <a href="#" className="lab-btn mt-2">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Little About */}
        {/* Feature */}
        <section className="feature-section padding-tb">
          <div className="container">
            <div className="row text-center justify-content-center">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <Image
                        width={100}
                        height={100}
                        src="/assets/images/feature/05.png"
                        alt="Feature Image"
                      />
                    </div>
                    <div className="lab-content">
                      <h6>Natarual Feed</h6>
                      <p>
                        Continually aggregate friction web interfaces thout{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <Image
                        width={100}
                        height={100}
                        src="/assets/images/feature/06.png"
                        alt="Feature image"
                      />
                    </div>
                    <div className="lab-content">
                      <h6>Own Fields</h6>
                      <p>
                        Continually aggregate friction web interfaces thout{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <Image
                        width={100}
                        height={100}
                        src="/assets/images/feature/07.png"
                        alt="Feature image"
                      />
                    </div>
                    <div className="lab-content">
                      <h6>Modern Farm</h6>
                      <p>
                        Continually aggregate friction web interfaces thout{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <Image
                        width={100}
                        height={100}
                        src="/assets/images/feature/08.png"
                        alt="Feature image"
                      />
                    </div>
                    <div className="lab-content">
                      <h6>100% Organic</h6>
                      <p>
                        Continually aggregate friction web interfaces thout{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Feature */}
        {/* Products */}
        <section className="product-section relative padding-tb bg-ash">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-header">
                  <h3>Poultry Farm Products</h3>
                  <p>
                    Conveniently customize proactive web services for leveraged
                    interfaces without Globally{" "}
                  </p>
                </div>
              </div>
              <Products start={0} end={8} />
              <Button
                link={false}
                to="#"
                className="text-center mt-3 mb-2 lab-btn"
                onClick={() => router.push("/shop")}
              >
                Shop now
              </Button>
            </div>
          </div>
        </section>
        {/* Products */}
        {/* Poultry farm service */}
        <section className="service-section padding-tb">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-header">
                  <h3>Poultry Farm Services</h3>
                  <p>
                    Conveniently customize proactive web services for leveraged
                    interfaces without Globally{" "}
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className="service-content">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="lab-item service-item">
                        <div className="lab-inner p-4 mb-4 text-left">
                          <div className="service-top d-flex align-items-center mb-4">
                            <div className="st-thumb mr-3">
                              <Image
                                width={70}
                                height={70}
                                src="/assets/images/service/01.png"
                                alt="service image"
                              />
                            </div>
                            <div className="st-content mt-2">
                              <a href="#">
                                <h6>Alternative egg</h6>
                              </a>
                            </div>
                          </div>
                          <div className="service-bottom">
                            <p>
                              Continually aggregate frictionle enthusias
                              generate user friendly vortals empowered without
                              globally results.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="lab-item service-item">
                        <div className="lab-inner p-4 mb-4 text-left">
                          <div className="service-top d-flex align-items-center mb-4">
                            <div className="st-thumb mr-3">
                              <Image
                                width={70}
                                height={70}
                                src="/assets/images/service/02.png"
                                alt="service image"
                              />
                            </div>
                            <div className="st-content mt-2">
                              <a href="#">
                                <h6>Poultry Cages</h6>
                              </a>
                            </div>
                          </div>
                          <div className="service-bottom">
                            <p>
                              Continually aggregate frictionle enthusias
                              generate user friendly vortals empowered without
                              globally results.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="lab-item service-item">
                        <div className="lab-inner p-4 mb-4 text-left">
                          <div className="service-top d-flex align-items-center mb-4">
                            <div className="st-thumb mr-3">
                              <Image
                                width={70}
                                height={70}
                                src="/assets/images/service/03.png"
                                alt="service image"
                              />
                            </div>
                            <div className="st-content mt-2">
                              <a href="#">
                                <h6>Breeder Management</h6>
                              </a>
                            </div>
                          </div>
                          <div className="service-bottom">
                            <p>
                              Continually aggregate frictionle enthusias
                              generate user friendly vortals empowered without
                              globally results.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="lab-item service-item">
                        <div className="lab-inner p-4 mb-4 text-left">
                          <div className="service-top d-flex align-items-center mb-4">
                            <div className="st-thumb mr-3">
                              <Image
                                width={70}
                                height={70}
                                src="/assets/images/service/04.png"
                                alt="service image"
                              />
                            </div>
                            <div className="st-content mt-2">
                              <a href="#">
                                <h6>Poultry Climate</h6>
                              </a>
                            </div>
                          </div>
                          <div className="service-bottom">
                            <p>
                              Continually aggregate frictionle enthusias
                              generate user friendly vortals empowered without
                              globally results.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="lab-item service-item">
                        <div className="lab-inner p-4 mb-4 text-left">
                          <div className="service-top d-flex align-items-center mb-4">
                            <div className="st-thumb mr-3">
                              <Image
                                width={70}
                                height={70}
                                src="/assets/images/service/05.png"
                                alt="service image"
                              />
                            </div>
                            <div className="st-content mt-2">
                              <a href="#">
                                <h6>Residue Teatment</h6>
                              </a>
                            </div>
                          </div>
                          <div className="service-bottom">
                            <p>
                              Continually aggregate frictionle enthusias
                              generate user friendly vortals empowered without
                              globally results.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="lab-item service-item">
                        <div className="lab-inner p-4 mb-4 text-left">
                          <div className="service-top d-flex align-items-center mb-4">
                            <div className="st-thumb mr-3">
                              <Image
                                width={70}
                                height={70}
                                src="/assets/images/service/06.png"
                                alt="service image"
                              />
                            </div>
                            <div className="st-content mt-2">
                              <a href="#">
                                <h6>Exhaust air Treatment</h6>
                              </a>
                            </div>
                          </div>
                          <div className="service-bottom">
                            <p>
                              Continually aggregate frictionle enthusias
                              generate user friendly vortals empowered without
                              globally results.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* poultry farm service */}
        {/* poultry farm gallery */}
        <section className="gallery-section padding-tb bg-ash">
          <div className="container-fluid p-0 m-0">
            <div className="row">
              <div className="col-12">
                <div className="section-header">
                  <h3>Poultry Farm Gallery</h3>
                  <p>
                    Conveniently customize proactive web services for leveraged
                    interfaces without Globally{" "}
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className="gallery-content">
                  <div className="gallery-grid text-center">
                    <a
                      href="assets/images/gallery/01.jpg"
                      data-rel="lightcase:myCollection:slideshow"
                      className="grid-image"
                    >
                      <Image
                        width={250}
                        height={100}
                        src="/assets/images/gallery/01.jpg"
                        alt="gallery-image"
                      />
                    </a>
                    <a
                      href="assets/images/gallery/02.jpg"
                      data-rel="lightcase:myCollection:slideshow"
                      className="grid-image"
                    >
                      <Image
                        width={250}
                        height={100}
                        src="/assets/images/gallery/02.jpg"
                        alt="gallery-image"
                      />
                    </a>
                    <a
                      href="assets/images/gallery/03.jpg"
                      data-rel="lightcase:myCollection:slideshow"
                      className="grid-image"
                    >
                      <Image
                        width={250}
                        height={100}
                        src="/assets/images/gallery/03.jpg"
                        alt="gallery-image"
                      />
                    </a>
                    <a
                      href="assets/images/gallery/04.jpg"
                      data-rel="lightcase:myCollection:slideshow"
                      className="grid-image"
                    >
                      <Image
                        width={250}
                        height={100}
                        src="/assets/images/gallery/04.jpg"
                        alt="gallery-image"
                      />
                    </a>
                    <a
                      href="assets/images/gallery/05.jpg"
                      data-rel="lightcase:myCollection:slideshow"
                      className="grid-image"
                    >
                      <Image
                        width={250}
                        height={100}
                        src="/assets/images/gallery/05.jpg"
                        alt="gallery-image"
                      />
                    </a>
                    <a
                      href="assets/images/gallery/06.jpg"
                      data-rel="lightcase:myCollection:slideshow"
                      className="grid-image"
                    >
                      <Image
                        width={250}
                        height={100}
                        src="/assets/images/gallery/06.jpg"
                        alt="gallery-image"
                      />
                    </a>
                    <a
                      href="assets/images/gallery/07.jpg"
                      data-rel="lightcase:myCollection:slideshow"
                      className="grid-image"
                    >
                      <Image
                        width={250}
                        height={100}
                        src="/assets/images/gallery/07.jpg"
                        alt="gallery-image"
                      />
                    </a>
                    <a
                      href="assets/images/gallery/08.jpg"
                      data-rel="lightcase:myCollection:slideshow"
                      className="grid-image"
                    >
                      <Image
                        width={250}
                        height={100}
                        src="/assets/images/gallery/08.jpg"
                        alt="gallery-image"
                      />
                    </a>
                  </div>
                  <div className="gallery-btn text-center mt-5">
                    <a href="#" className="lab-btn">
                      <span>Load Gallery</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* poultry farm gallery */}
        {/* Testimonial */}
        <section className="testimonial-section padding-tb bg-ash">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-header">
                  <h3>What Client Say Our Poultry Farm</h3>
                  <p>
                    Conveniently customize proactive web services for leveraged
                    interfaces without Globally{" "}
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className="testimonial-content">
                  <div className="row">
                    <div className="col-lg-4 col-12">
                      <div className="lab-item testi-item-2 mb-3">
                        <div className="lab-inner">
                          <div className="testi-top">
                            <div className="testi-t-thumb">
                              <Image
                                width={80}
                                height={50}
                                src="/assets/images/testimonial/01.jpg"
                                alt="author-image"
                              />
                            </div>
                            <div className="testi-t-content">
                              <a href="#">
                                <h6>Jeson smith</h6>
                              </a>
                              <p>Founder & CEO</p>
                              <div className="rating">
                                <span>
                                  <a href="#">
                                    <i className="far fa-star"></i>
                                  </a>
                                </span>
                                <span>
                                  <a href="#">
                                    <i className="far fa-star"></i>
                                  </a>
                                </span>
                                <span>
                                  <a href="#">
                                    <i className="far fa-star"></i>
                                  </a>
                                </span>
                                <span>
                                  <a href="#">
                                    <i className="far fa-star"></i>
                                  </a>
                                </span>
                                <span>
                                  <a href="#">
                                    <i className="far fa-star"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="testi-bottom">
                            <p>
                              <Image
                                width={80}
                                height={50}
                                className="q1"
                                src="/assets/images/testimonial/q1.png"
                                alt=""
                              />
                              Continually Onceptualizef Technically invs
                              Professionally monetizeturkeyf Testingdu
                              Frofessionally oe-enablfunctaizede-come rce
                              Onceptualize Technically initiatives.
                              <Image
                                width={80}
                                height={50}
                                className="q2"
                                src="/assets/images/testimonial/q2.png"
                                alt='"'
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12">
                      <div className="lab-item testi-item-2 mb-3">
                        <div className="lab-inner">
                          <div className="testi-top">
                            <div className="testi-t-thumb">
                              <Image
                                width={80}
                                height={50}
                                src="/assets/images/testimonial/02.jpg"
                                alt="author-image"
                              />
                            </div>
                            <div className="testi-t-content">
                              <a href="#">
                                <h6>Sahjahan Sagor</h6>
                              </a>
                              <p>Founder & CEO</p>
                              <div className="rating">
                                <span>
                                  <a href="#">
                                    <i className="far fa-star"></i>
                                  </a>
                                </span>
                                <span>
                                  <a href="#">
                                    <i className="far fa-star"></i>
                                  </a>
                                </span>
                                <span>
                                  <a href="#">
                                    <i className="far fa-star"></i>
                                  </a>
                                </span>
                                <span>
                                  <a href="#">
                                    <i className="far fa-star"></i>
                                  </a>
                                </span>
                                <span>
                                  <a href="#">
                                    <i className="far fa-star"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="testi-bottom">
                            <p>
                              <Image
                                width={80}
                                height={50}
                                className="q1"
                                src="/assets/images/testimonial/q1.png"
                                alt='"'
                              />
                              Continually Onceptualizef Technically invs
                              Professionally monetizeturkeyf Testingdu
                              Frofessionally oe-enablfunctaizede-come rce
                              Onceptualize Technically initiatives.
                              <Image
                                width={80}
                                height={50}
                                className="q2"
                                src="/assets/images/testimonial/q2.png"
                                alt='"'
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12">
                      <div className="lab-item testi-item-2 mb-3">
                        <div className="lab-inner">
                          <div className="testi-top">
                            <div className="testi-t-thumb">
                              <Image
                                width={80}
                                height={50}
                                src="/assets/images/testimonial/03.jpg"
                                alt="author-image"
                              />
                            </div>
                            <div className="testi-t-content">
                              <a href="#">
                                <h6>Alisha Kabir</h6>
                              </a>
                              <p>Founder & CEO</p>
                              <div className="rating">
                                <span>
                                  <a href="#">
                                    <i className="far fa-star"></i>
                                  </a>
                                </span>
                                <span>
                                  <a href="#">
                                    <i className="far fa-star"></i>
                                  </a>
                                </span>
                                <span>
                                  <a href="#">
                                    <i className="far fa-star"></i>
                                  </a>
                                </span>
                                <span>
                                  <a href="#">
                                    <i className="far fa-star"></i>
                                  </a>
                                </span>
                                <span>
                                  <a href="#">
                                    <i className="far fa-star"></i>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="testi-bottom">
                            <p>
                              <Image
                                width={80}
                                height={50}
                                className="q1"
                                src="/assets/images/testimonial/q1.png"
                                alt='"'
                              />
                              Continually Onceptualizef Technically invs
                              Professionally monetizeturkeyf Testingdu
                              Frofessionally oe-enablfunctaizede-come rce
                              Onceptualize Technically initiatives.
                              <Image
                                width={80}
                                height={50}
                                className="q2"
                                src="/assets/images/testimonial/q2.png"
                                alt='"'
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ./Testimonial */}
        {/* Video Section */}
        <div className="video-section padding-tb bg-ash">
          <div className="container">
            <div className="video-section-wrapper mb-15">
              <div className="video-content">
                <Image
                  width={2500}
                  height={1000}
                  src="/assets/images/bg-images/video-bg.jpg"
                  alt="Video-background"
                />
                <a href="https://youtu.be/cvOx1uC1-oA" data-rel="lightcase">
                  <Image
                    width={70}
                    height={50}
                    src="/assets/images/bg-images/yt-icon.png"
                    alt="Play"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Video Section */}
        {/* Sponsor */}
        <div className="sponsor-section padding-tb">
          <div className="container">
            <div className="section-wrapper">
              <div className="sponsor-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="sponsor-item">
                      <div className="sponsor-thumb">
                        <a href="#">
                          <Image
                            width={150}
                            height={100}
                            src="/assets/images/sponsor/01.png"
                            alt="sponsor"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="sponsor-item">
                      <div className="sponsor-thumb">
                        <a href="#">
                          <Image
                            width={250}
                            height={100}
                            src="/assets/images/sponsor/02.png"
                            alt="sponsor"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="sponsor-item">
                      <div className="sponsor-thumb">
                        <a href="#">
                          <Image
                            width={250}
                            height={100}
                            src="/assets/images/sponsor/03.png"
                            alt="sponsor"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="sponsor-item">
                      <div className="sponsor-thumb">
                        <a href="#">
                          <Image
                            width={250}
                            height={100}
                            src="/assets/images/sponsor/04.png"
                            alt="sponsor"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="sponsor-item">
                      <div className="sponsor-thumb">
                        <a href="#">
                          <Image
                            width={250}
                            height={100}
                            src="/assets/images/sponsor/05.png"
                            alt="sponsor"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ./Sponsor */}
        {/* Footer */}
        <Footer />
        {/* ./Footer */}
      </main>
    </div>
  );
}
