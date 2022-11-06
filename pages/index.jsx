import Header from "../components/header";
import SEO from "../components/seo";
import { VscQuote } from "react-icons/vsc"
import { AiOutlineMail, AiTwotonePieChart } from "react-icons/ai"
import { FaUncharted, FaEye } from "react-icons/fa"
import Footer from "../components/footer";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";


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
            <div className="col-12 col-md-3">
              <img src="https://source.unsplash.com/random/?accounting" width="100%" alt="" />
              <h6>Tax Filing</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique velit magni esse numquam itaque molestiae animi sint harum! Adipisci numquam pariatur esse veritatis atque, sunt ex. Consectetur eum ad laboriosam!</p>
            </div>
            <div className="col-12 col-md-3">
              <img src="https://source.unsplash.com/random/?accounting" width="100%" alt="" />
              <h6>Tax Filing</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique velit magni esse numquam itaque molestiae animi sint harum! Adipisci numquam pariatur esse veritatis atque, sunt ex. Consectetur eum ad laboriosam!</p>
            </div>
            <div className="col-12 col-md-3">
              <img src="https://source.unsplash.com/random/?accounting" width="100%" alt="" />
              <h6>Tax Filing</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique velit magni esse numquam itaque molestiae animi sint harum! Adipisci numquam pariatur esse veritatis atque, sunt ex. Consectetur eum ad laboriosam!</p>
            </div>
            <div className="col-12 col-md-3">
              <img src="https://source.unsplash.com/random/?accounting" width="100%" alt="" />
              <h6>Tax Filing</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique velit magni esse numquam itaque molestiae animi sint harum! Adipisci numquam pariatur esse veritatis atque, sunt ex. Consectetur eum ad laboriosam!</p>
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
              <h6>Colaborate</h6>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus nam vero excepturi modi necessitatibus? Dolore nobis odio vero aspernatur ex adipisci quaerat laboriosam iste ratione aliquid nihil maxime, obcaecati neque.</p>
            </div>
            <div className="col-12 col-md-4">
              <h6>Colaborate</h6>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus nam vero excepturi modi necessitatibus? Dolore nobis odio vero aspernatur ex adipisci quaerat laboriosam iste ratione aliquid nihil maxime, obcaecati neque.</p>
            </div>
            <div className="col-12 col-md-4">
              <h6>Colaborate</h6>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus nam vero excepturi modi necessitatibus? Dolore nobis odio vero aspernatur ex adipisci quaerat laboriosam iste ratione aliquid nihil maxime, obcaecati neque.</p>
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
