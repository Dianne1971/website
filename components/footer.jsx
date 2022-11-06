import React from 'react'
import { BsFillPhoneVibrateFill } from 'react-icons/bs'
import { GiRotaryPhone } from 'react-icons/gi'
import { AiOutlineMail } from 'react-icons/ai'

export default function Footer() {
    return (
        <section className="text-white py-5" style={{backgroundColor: "black"}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <img src="/img/logos/DSB_logos_wh.svg" alt="adad" width="100%" />
                        <span>2022 DSB consulting © All rights reserved</span>
                    </div>
                    <div className="col-12 col-md-2 offset-md-3">
                        <ul className="d-flex flex-md-column" style={{ listStyle: "none" }}>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Legal Disclaimer</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4">
                        <ul style={{ listStyle: "none" }}>
                            <li>Contact</li>
                            <li><AiOutlineMail /> diannesheilabona@yahoo.com</li>
                            <li><BsFillPhoneVibrateFill /> +63 (0) 9178254525</li>
                            <li><GiRotaryPhone /> +63 (2) 7577-8040</li>

                        </ul>
                    </div>
                </div>
            </div>
        </section >
    )
}
