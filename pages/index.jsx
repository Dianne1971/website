import Header from "../components/header";
import SEO from "../components/seo";
import { VscQuote } from "react-icons/vsc"
import { AiOutlineMail, AiTwotonePieChart } from "react-icons/ai"
import { BiCollapse, BiTargetLock } from "react-icons/bi";
import { BsFillEyeFill, BsFillPhoneVibrateFill } from "react-icons/bs";
import { FaUncharted, FaEye } from "react-icons/fa"
import { GiRotaryPhone } from "react-icons/gi";
import Footer from "../components/footer";


export default function Home() {
  return (
    <div className="">
      <SEO
        title="DSB Financial Services"
      />
      <Header />
      <div className=" bg-light" >
        <div className="container ">
          <div className="row">
            <div className="col-12 col-md-6  d-flex flex-column justify-content-end pb-5">
              <h1 className="d-flex flex-column ">
                <VscQuote color={"#d90429"} />
                <span>Expert <span className="color1">Business Advisory</span></span>
                <span>Services Provider</span>
              </h1>
              <p>We Help companies With Their Accounting needs, Payroll Management & Tax Compliance are a piece of cake to us.</p>
            </div>
            <div className="col-12 col-md-6">
              <img src="/img/missSheila3.png" className="" alt="dbs accounting" width={"100%"} style={{ maxHeight: 500, objectFit: "cover", objectPosition: "top", transform: "translateY(20px)" }} />
            </div>
          </div>
          <div className="row bg-white border p-3  shadow" style={{ transform: "translateY(20px)" }}>
            <div className="col-12 col-md-4 p-3 d-flex">
              <AiTwotonePieChart size={80} color="#d90429" />
              <div className="ps-3">
                <h6 className="text-uppercase"> Projection</h6>
                <p>The best way to project the future is to make it your own reality.</p>
              </div>
            </div>
            <div className="col-12 col-md-4 p-3 d-flex">
              <FaUncharted size={80} color="#d90429" />
              <div className="ps-3">
                <h6 className="text-uppercase">Planning</h6>
                <p>There are dreamers and there are planners; the planners make their dreams come true.</p>
              </div>
            </div>
            <div className="col-12 col-md-4 p-3 d-flex">
              <FaEye size={80} color="#d90429" />
              <div className="ps-3">
                <h6 className="text-uppercase">Vision</h6>
                <p>Vision is the art of seeing what is invisible to others.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="py-5 mt-md-5">
        <div className="container text-center">
          <span className="fw-light pt-md-5" style={{ fontSize: 24 }}>OUR OFFER</span><br />
          <h2 className="text-center fw-bold color5">Accounting Services</h2>
          <p className="pt-3 pb-5">Seamlessly comply with regulation and keep up a good ledger.</p>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 text-start">
              <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=100" width="100%" alt="tax filing dsb consuintg" height={180} style={{ objectFit: "cover" }} />
              <h5 className="mt-3 fw-bold">Tax <span className="color1"> Filing</span></h5>
              <p>Our team will assist corporations and individuals in the preparation and filing of accurate and timely tax returns with the Bureau of Internal Revenue (BIR) to ensure full compliance with tax laws and reporting requirements. We also provide recommendations for proper tax planning to improve tax efficiency of our clients.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-6 text-start">
              <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=100" width="100%" alt="tax filing dsb consuintg" height={180} style={{ objectFit: "cover" }} />
              <h5 className="mt-3 fw-bold">Book<span className="color1">keeping</span></h5>
              <p>Keep your ledgers up to date with the best oversight of a certified CPA. Bookkeeping is essential for any business since it is required by law. Proper bookkeeping allows as well audit clearance in case your company gets audited. <br />We help you controlling the things are accounted properly in every account.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-6 text-start">
              <img src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=100" width="100%" alt="tax filing dsb consuintg" height={180} style={{ objectFit: "cover" }} />
              <h5 className="mt-3 fw-bold">External<span className="color1"> Audit</span></h5>
              <p>The external auditor&apos;s responsability is to audit the books prepared by the management and document issues found on them. It is the duty of the external auditor to find irregularities and suggest alternatives to correct them. <br />Any business activity in the philippines needs to be compliant both with BIR and SEC regulations.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-6 text-start">
              <img src="/img/homepage/aa.jpg" width="100%" alt="tax filing dsb consuintg" height={180} style={{ objectFit: "cover" }} />
              <h5 className="mt-3 fw-bold">Company<span className="color1"> Registration</span></h5>
              <p>We help you forming,building and registering your business together with the SEC and obtain the Barangay and Mayors Permit in order to operate. After that, we help you as well maintaining the documents with the BIR, SSS, Pag-IBIG and Philippine Health Insurance Corporation (PHIC). We also help with company retirement. </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-light">
        <div className="container py-md-5 py-3">
          <h2 className="text-center fw-bold" style={{ fontSize: '3rem' }}>Synergize <span className="color1">resources</span></h2>
          <p className="text-center">We assist Small & Medium Size Entities (SME&apos;s) in setting up a business , <br /> tax compliance and maintaining accounting records.</p>
          <div className="row py-5">
            <div className="col-12 col-md-4">
              <h5 className=""><BiCollapse color="#ef233c" size={52} /> Collaborate</h5>
              <p>Alone we can do so little; together we can do so much.</p>
            </div>
            <div className="col-12 col-md-4">
              <h5 className=""><BsFillEyeFill color="#ef233c" size={52} /> Envision</h5>
              <p>If you don&apos;t imagine, it will never happen. The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it, as long as you really believe 100 percent.</p>
            </div>
            <div className="col-12 col-md-4">
              <h5 className=""><BiTargetLock color="#ef233c" size={52}/> Achieve</h5>
              <p>Nothing stops the man who desires to achieve. Let us help you on your journey.</p>
            </div>

          </div>
        </div>

      </section>


      <section className="bg4">
        <div className="container py-5 text-center">
          <h2 className="fw-bold" >Need <span className="color1"> help?</span></h2>
          <p>Contact us today!</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><AiOutlineMail /> diannesheilabona@yahoo.com</li>
            <li><BsFillPhoneVibrateFill /> +63 (0) 9178254525</li>
            <li><GiRotaryPhone /> +63 (2) 7577-8040</li>
          </ul>
        </div>
      </section>








      <Footer />


    </div>
  )
}
