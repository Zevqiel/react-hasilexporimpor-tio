import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../styles/Home.css"
import { homeSection } from "../data/HomeSection"
import parse from "html-react-parser"
import { coursesSection } from "../data/CoursesSection"
import { tutorsList, tutorsSection } from "../data/TutorsSection"
import Tutors from "../components/Tutors"
import { partnersSection, partnerList } from "../data/PartnersSection"
import Partners from "../components/Partners"
import Contact from "../components/Contact"
import { contactSection } from "../data/ContactSection"

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* Home */}
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">
            {parse(homeSection.content)}
          </div>
        </section>

        {/* Online Course */}
        <section id="courses">
          <div className="kolom">
            {parse(coursesSection.content)}
          </div>
          <img src={coursesSection.image} />
        </section>

        {/* Tutors */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">
              {parse(tutorsSection.content)}
              <Tutors tutorsList={tutorsList} />
            </div>
          </div>
        </section>

        {/* Partners */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">
              {parse(partnersSection.content)}
              <Partners partnerList={partnerList} />
            </div>
          </div>
        </section>
      </div>
      <Contact contactSection={contactSection} />
      <Footer />
    </>
  )
}

export default Home
