import React from 'react'
import { BsArrowRight, BsClockFill, BsCoin, BsLightbulb } from 'react-icons/bs'
import { ImBooks } from 'react-icons/im'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { GiArchiveRegister } from 'react-icons/gi'
import Footer from '../components/footer'
import Header from '../components/header'
import SEO from '../components/seo'

export default function Services() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <SEO
                title="DSB | about us"
                desc="we help with Tax Filing, Book Keeping and Audit of different companies coming from several industries"
            />
            <Header />

            <section className="body bg-light" style={{ flex: 1 }}>

                <section className="container py-5">
                    <div className="row">
                        <div className="col-12 col-md-6 h-100">
                            <h2 style={{ fontSize: 40, fontWeight: 600 }}>We make your <br />  <span className="color1">  Business Interesting</span></h2>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-start align-items-start  ">
                            <span>Make your business ledger more clean and unique in the eyes of each of your customers to reach a wider market.
                                <br /><br />
                                At DSB consulting, we offer a broad suite of finance and accounting service for owners of small-and-medium businesses, accounting firms, CFOs of large corporations, and shared service centers around the world.
                                <br />
                                We are driven by our passion to help our clients simplify and improve their accounting and bookkeeping functions.
                            </span>
                        </div>
                    </div>
                </section>

                <section className=" py-5">
                    <img src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1652&q=100" alt="bookkeeping, tax-filing and others" width="100%" height={300} style={{ objectFit: "cover", objectPosition: "center" }} />
                </section>
                <section className="container ">
                    <hr />
                </section>
                <section className="container py-5">
                    <h2 className="text-center pb-5" style={{ fontSize: 40, fontWeight: 600 }}>An overview of our offer</h2>
                    <div className="row">
                        <div className="col-12 col-md-6 h-100">
                            <div className="bg-white p-3 shadow-sm">
                                <BsClockFill size={44} color="#ef233c" />
                                <h3 className="mt-3 fw-bold">Fast  <span className="color1">answer</span></h3>
                                <p>We provide you with answers in the short amount of time. We are reachable almost at any time of the day, and we try to provide you with answers within some minutes. </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 h-100">
                            <div className="bg-white p-3 shadow-sm">
                                <BsLightbulb size={44} color="#ef233c" />
                                <h3 className="mt-3 fw-bold">Expert in <span className="color1"> the Know-how </span>
                                </h3>
                                <p>It doesn’t matter if you want to learn how to account things, it is important that you have someone who can advise you the best possible way to remain compliant.</p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="container ">
                    <hr />
                </section>


                <section className="container py-md-5">
                    <div className="row pb-4">
                        <div className="col-12 col-md-6">
                            <h2 className="fw-bold">Our Offer is just <br /> <span className="color1"> complete</span></h2>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>We present you with the best financial service carried out professionally, fast and efficiently.</p>
                        </div>
                    </div>
                    <div className="row border-top border-bottom py-3">
                        <div className="col-3 col-md-2 d-flex flex-column justify-content-center">
                            <span className="color4" style={{ fontSize: 40, }}>01</span>
                        </div>
                        <div className="col-3 col-md-2 d-flex flex-column justify-content-center">
                            <BsCoin color="#d90429" size={40} />
                        </div>
                        <div className="col-5  d-flex flex-column justify-content-center">
                            <h6 className="color5" style={{fontSize: 20}}>Tax  Filing</h6>
                            <p>Call Experienced CPA&apos;s. Comply W/ Philippine Tax Law. Affordable & Hassle Free! Fast service.</p>
                        </div>
                        <div className="col-12 col-md-3  d-flex flex-column justify-content-center">
                            <button className="btn btn-outline-danger px-5 rounded-pill">Ask for help <BsArrowRight /></button>
                        </div>
                    </div>
                    <div className="row  border-bottom py-3">
                        <div className="col-3 col-md-2 d-flex flex-column justify-content-center">
                            <span className="color4" style={{ fontSize: 40, }}>02</span>
                        </div>
                        <div className="col-3 col-md-2 d-flex flex-column justify-content-center">
                            <ImBooks color="#d90429" size={40} />
                        </div>
                        <div className="col-5  d-flex flex-column justify-content-center">
                            <h6 className="color5" style={{fontSize: 20}}>Bookkeeping</h6>
                            <p>A bookkeeping service offers a three-tiered approach to developing and maintaining your company&apos;s overall financial processes and management.</p>
                        </div>
                        <div className="col-12 col-md-3  d-flex flex-column justify-content-center">
                            <button className="btn btn-outline-danger px-5 rounded-pill">Ask for help <BsArrowRight /></button>
                        </div>
                    </div>
                    <div className="row border-bottom py-3">
                        <div className="col-3 col-md-2 d-flex flex-column justify-content-center">
                            <span className="color4" style={{ fontSize: 40, }}>03</span>
                        </div>
                        <div className="col-3 col-md-2 d-flex flex-column justify-content-center">
                            <HiMagnifyingGlass color="#d90429" size={40} />
                        </div>
                        <div className="col-5  d-flex flex-column justify-content-center">
                            <h6 className="color5" style={{fontSize: 20}}>External Audit</h6>
                            <p>Our professional auditing service We offer a comprehensive set of auditing solutions to our clients, including: External audit services</p>
                        </div>
                        <div className="col-12 col-md-3  d-flex flex-column justify-content-center">
                            <button className="btn btn-outline-danger px-5 rounded-pill">Ask for help <BsArrowRight /></button>
                        </div>
                    </div>
                    <div className="row  py-3">
                        <div className="col-3 col-md-2 d-flex flex-column justify-content-center">
                            <span className="color4" style={{ fontSize: 40, }}>04</span>
                        </div>
                        <div className="col-3 col-md-2 d-flex flex-column justify-content-center">
                            <GiArchiveRegister color="#d90429" size={40} />
                        </div>
                        <div className="col-5  d-flex flex-column justify-content-center">
                            <h6 className="color5" style={{fontSize: 20}}>Registration & Retiring Gov. Agencies</h6>
                            <p>We help you with SEC, BIR, SSS, PHIC, Pag-Ibig, Business Permit, Mayor&apos;s clearance, etc… </p>
                        </div>
                        <div className="col-12 col-md-3  d-flex flex-column justify-content-center">
                            <button className="btn btn-outline-danger px-5 rounded-pill">Ask for help <BsArrowRight /></button>
                        </div>
                    </div>
                </section>

                <section className="bg-white container p-md-5 p-3 mb-5">
                    <h2 className="fw-bold text-center"> <span className="color1">Trusted</span> by:</h2>
                    <div className="d-flex justify-content-around align-items-center mt-5 flex-column flex-md-row">
                        <img width="100px" height={"100%"}  src="/img/services/taxhelp.jpg" alt="tax help dsb consulting" />
                        <img width="150px" height={"100%"}  src="/img/services/pcci.png" alt="pcci dsb consulting" />
                        <img width="100px" height={"100%"}  src="/img/services/picpa.jpeg" alt="picpa dsb consulting" />
                        <img width="150px" height={"100%"}  src="/img/services/RCLogo.png" alt="RCLogo dsb consulting" />
                    </div>
                </section>


                <section className="container ">
                    <hr />
                </section>

                <section className=" container p-md-5 p-3 mb-5 text-center">
                    <h2 className="fw-bold text-center">From our  <span className="color1">clients:</span></h2>
                    <p>DSB keeps our accounts clear and without any worry. <br /> Our contact usually replies within minutes <br/> and everything is done on time. </p>
                    <hr />
                    <span className="text-center"><b> Pedro Specter,</b> CEO & Founder - Nortb Inc.</span>
                </section>



                <section className=" bg4 py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h2>Have a question?<br />
                                    Our team is happy to assist you!</h2>
                            </div>
                            <div className="col-12 col-md-6">
                                <p>We believe it takes great people to achieve great innovation. That&apos;s why we work in the most professional way with the best companies. Wanna work with us? </p>
                                <a href="mailto:diannesheilabona@yahoo.com" className=""><u>Contact us today</u></a>
                            </div>
                        </div>
                    </div>
                </section>





            </section>

            <Footer />
        </div>
    )
}
