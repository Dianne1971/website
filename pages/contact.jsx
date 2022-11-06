import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPhoneVibrateFill } from 'react-icons/bs'
import { GiRotaryPhone } from 'react-icons/gi'
import Footer from '../components/footer'
import Header from '../components/header'
import SEO from '../components/seo'

export default function Contact() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
            <SEO
                title="DSB | contact us"
                desc="Contact us to get the best advise about consulting and financial planning " />
            <Header />
            <div className="h-100" style={{ flex: 1 }}>
                <div className="container">
                    <h1 className="py-5" style={{ fontWeight: 600 }}>Love to hear from you,
                        <br />get in <b className="color1">touch</b> &#128075;</h1>
                    <p>You can reach us through one of these channels:</p>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li><AiOutlineMail /> diannesheilabona@yahoo.com</li>
                        <li><BsFillPhoneVibrateFill /> +63 (0) 9178254525</li>
                        <li><GiRotaryPhone /> +63 (2) 7577-8040</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}
