
import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/seo"

export default function AboutUs() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <SEO
                title="DSB | about us"
                desc="we help with Tax Filing, Book Keeping and Audit of different companies coming from several industries"
            />
            <Header />

            <section className="body" style={{ flex: 1 }}>

                <section className="container py-5">
                    <div className="row">
                        <div className="col-12 col-md-6 h-100">
                            <h2 style={{ fontSize: 40, fontWeight: 600 }}>We prepare taxes and<br /> all legal matters <span className="color1"> for companies <br /> to stay healthy.</span></h2>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-start align-items-end  ">
                            <span>Providing Tax Filing, Bookkeeping and Audit of different companies coming from several industries such as Real Estate, Leasing, Construction, Hotel & Restaurants , Trading, Manufacturing , Insurance , Non Stock & Non Profit Corporations and Foundations.
                            </span>
                        </div>
                    </div>
                </section>

                <section className=" py-5">
                    <img src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=100" alt="bookkeeping, tax-filing and others" width="100%" height={350} style={{ objectFit: "cover", objectPosition: "top" }} />
                </section>
                <section className="container ">
                    <hr />
                </section>
                <section className="container py-5">
                    <div className="row">
                        <div className="col-12 col-md-6 h-100">
                            <h2 style={{ fontSize: 40, fontWeight: 600 }}>Together we <br /> are strong</h2>
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column justify-content-start align-items-start  ">
                            <p style={{ fontWeight: 500, fontSize: 20 }}>Our crew is always getting bigger, but we all work toward one goal: to make accounting not only lean and clean but compliant for every client that works with us.</p>
                            <p>DSB Consulting provides outsourced service covering the full scope of the financial reporting and accounting process – from recording transactions and maintaining books of accounts to preparing statutory reports, financial statements, and other management reports, so our Clients can focus on the operations of their business.</p>
                        </div>
                    </div>
                </section>
                <section className="container ">
                    <hr />
                </section>

                <section>
                    <div className="container pb-5">
                        {/* <h2 className="text-center">Our Core <span className="color1"> Values</span></h2> */}
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <h2>Speed</h2>
                            </div>
                            <div className="col-12 col-md-4">
                                <h2>Efficiency</h2>
                            </div>
                            <div className="col-12 col-md-4">
                                <h2>Transparency</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container bg-light p-5 mb-3">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h2>Meet our <br />amazing team</h2>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12 col-md-4 text-center">
                                <div className="border p-3">
                                    <h5>Diane Sheila Bonna</h5>
                                    <p>Senior Accounting Officer</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 text-center">
                                <div className="border p-3">
                                    <h5>Marilyn Reyes</h5>
                                    <p>Senior Accounting Officer</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 text-center">
                                <div className="border p-3">
                                    <h5>Rodmer Galvez</h5>
                                    <p>Junior Accounting Officer</p>
                                </div>

                            </div>
                            <div className="col-12 col-md-4 offset-md-2 mt-3 text-center">
                                <div className="border p-3">
                                    <h5>Rodel Brutas</h5>
                                    <p>Encoder and Liason Officer</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mt-3 text-center">
                                <div className="border p-3">
                                    <h5>Aldwin Nobleza</h5>
                                    <p>Encoder and Liason Officer</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h2>Join our team</h2>
                            </div>
                            <div className="col-12 col-md-6">
                                <p>We believe it takes great people to make a great roduct. That&apos;s why we hire not only the perfect professional fits, but people who embody our company values. </p>
                                <a href="mailto:diannesheilabona@yahoo.com" className=""><u>Contact us today</u></a>
                            </div>
                        </div>
                    </div>
                </section>

            </section>

            <Footer />
        </div>
    )
};