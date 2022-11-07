import React from 'react'
import { BsArrowRight, BsClockFill, BsCoin } from 'react-icons/bs'
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
                                At DSB consulting, we offer a broad suite of finance and accounting services for owners of small-and-medium businesses, accounting firms, CFOs of large corporations, and shared services centers around the world.
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
                                <BsClockFill />
                                <h3>Fast answer</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, praesentium ad nesciunt sed doloribus eaque similique quidem blanditiis placeat voluptates totam dolore officia alias nemo et fugit explicabo ratione beatae.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 h-100">
                            <div className="bg-white p-3 shadow-sm">
                                <BsClockFill />
                                <h3>Fast answer</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, praesentium ad nesciunt sed doloribus eaque similique quidem blanditiis placeat voluptates totam dolore officia alias nemo et fugit explicabo ratione beatae.</p>
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
                            <p>We present you with the best financial services carried out professionally, fast and efficiently.</p>
                        </div>
                    </div>
                    <div className="row border-top border-bottom py-3">
                        <div className="col-3 col-md-2">
                            01
                        </div>
                        <div className="col-3 col-md-2">
                            <BsCoin />
                        </div>
                        <div className="col-5 ">
                            Tax  Filing
                        </div>
                        <div className="col-12 col-md-3 ">
                            <button className="btn btn-outline-danger px-5 rounded-pill">Ask for help <BsArrowRight /></button>
                        </div>
                    </div>
                    <div className="row  border-bottom py-3">
                        <div className="col-3 col-md-2">
                            01
                        </div>
                        <div className="col-3 col-md-2">
                            <BsCoin />
                        </div>
                        <div className="col-5 ">
                            Tax  Filing
                        </div>
                        <div className="col-12 col-md-3 ">
                            <button className="btn btn-outline-danger px-5 rounded-pill">Ask for help <BsArrowRight /></button>
                        </div>
                    </div>
                    <div className="row border-bottom py-3">
                        <div className="col-3 col-md-2">
                            01
                        </div>
                        <div className="col-3 col-md-2">
                            <BsCoin />
                        </div>
                        <div className="col-5 ">
                            Tax  Filing
                        </div>
                        <div className="col-12 col-md-3 ">
                            <button className="btn btn-outline-danger px-5 rounded-pill">Ask for help <BsArrowRight /></button>
                        </div>
                    </div>
                    <div className="row  py-3">
                        <div className="col-3 col-md-2">
                            01
                        </div>
                        <div className="col-3 col-md-2">
                            <BsCoin />
                        </div>
                        <div className="col-5 ">
                            Tax  Filing
                        </div>
                        <div className="col-12 col-md-3 ">
                            <button className="btn btn-outline-danger px-5 rounded-pill">Ask for help <BsArrowRight /></button>
                        </div>
                    </div>
                </section>

                <section className="bg-white container p-md-5 p-3 mb-5">
                    <h2 className="fw-bold text-center"> <span className="color1">Trusted</span> by:</h2>
                </section>


                <section className="container ">
                    <hr />
                </section>

                <section className=" container p-md-5 p-3 mb-5 text-center">
                    <h2 className="fw-bold text-center">Frou our  <span className="color1">clients:</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam velit quaerat expedita? Accusamus possimus, sed tempora nulla facilis repudiandae! Praesentium cupiditate minus tempora vero animi exercitationem ipsa neque placeat unde.</p>
                    <hr />
                    <span className="text-center">Pedro Specter, CEO & Founder - Nortb Inc.</span>
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
