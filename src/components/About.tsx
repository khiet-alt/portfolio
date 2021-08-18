import '../styles/about.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faCalendarCheck, faHome, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(fab)

export default function About() {
    return (
        <div className="about">
            <div className="leftAbout">
                <h4>MAPDEN.</h4>
                <div className="aboutme">
                    <h6 className="aboutcontact">{"ABOUT & CONTACT"}</h6>
                    <h1>Thanh Khiết</h1>
                    <i>{"Designer & developer"}</i>
                    <hr />
                    <div className="paragraph">
                        <span>
                        I'm a junior at University of Science, pursuing at computer science. Studying at school provides me a solid foundation in algorithm and logical
                         criticism thinking. In my leisure time, I frequently read technical articles or documents on programing to strengthen my expertise.
                          Furthermore, I have completed several Web Development courses in Coursera as well obtaining certificates, which have assisted me in
                           identifying my abilities
                        </span>
                    </div>
                    <h6 className="phone"><i>Phone: (+84) 365 849 472</i></h6>
                    <h6 className="phone"><i>Gmail: cs.thanhkhiet@gmail.com</i></h6>
                    <h6 className="phone"><i>Education: University of Science</i></h6>
                    <h6 className="phone"><i>Address: Hồ Chí Minh city</i></h6>
                </div>
                <div className="bottomIcon">
                    <a href="https://www.facebook.com/thanh.khiet.399/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </a>
                    <a href="https://www.instagram.com/th.khiet/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </a>
                </div>
            </div>

            <div className="rightAbout">
                <img src="assets/images/khiet.jpg" alt=" " />
            </div>
        </div>
    )
}
