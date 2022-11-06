import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Header() {


    const [isVisible, setIsVisible] = useState(0)



    return (
        [<section className="bg-light border-bottom " key={0}>
            <div className="container">
                <header className="d-flex justify-content-between align-items-center w-100 py-1  ">
                    <div className="d-flex justify-content-between  align-items-center w-100">
                        <img src="/img/logos/DSB_logos.png" alt="DSB consulting services" width="250px" />
                        <div className="d-flex d-md-none pointer">
                            <GiHamburgerMenu size={40} onClick={() => setIsVisible(1)} />
                        </div>
                    </div>

                    <ul className="menuHeader">
                        <li className="nav-item"><Link href="/" className="nav-link text-dark" aria-current="page">Home</Link></li>
                        <li className="nav-item"><Link href="/services" className="nav-link text-dark">Services</Link></li>
                        <li className="nav-item"><Link href="/about" className="nav-link text-dark">About us</Link></li>
                        <li className="nav-item"><Link href="/contact" className="nav-link text-dark">Contact</Link></li>
                        {/* <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li> */}
                        {/* <li className="nav-item"><a href="#" className="nav-link">Insights</a></li> */}
                    </ul>
                </header>
            </div>
        </section>,
        isVisible === 1 &&
        <ul className="sidebar" key={1}>
            <li className="nav-item"><Link href="/" className="nav-link text-dark" aria-current="page">Home</Link></li>
            <li className="nav-item"><Link href="/" className="nav-link text-dark">Services</Link></li>
            <li className="nav-item"><Link href="/" className="nav-link text-dark">About us</Link></li>
            <li className="nav-item"><Link href="/" className="nav-link text-dark">Contact</Link></li>
            <li className="nav-item" onClick={() => setIsVisible(0)}>Close</li>
        </ul>
        ]
    )
}
