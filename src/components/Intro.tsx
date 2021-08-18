import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/intro.scss'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, text } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
//
import { init } from 'ityped'


library.add(fab)

type Prop = {
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export default function Intro({setSelected}: Prop) {
    const textRef = React.useRef<HTMLSpanElement>(null)

    React.useEffect(() => {
        if (textRef.current !== null)
            init(textRef.current, {
                showCursor: true,
                backDelay: 1500,
                backSpeed: 60,
                strings: ["Developer", "Creative Director", "Designer", "Researcher"]
            })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="imgContainer">

            </div>
            <div className="wrapperText">
                <div className="nameIntro">
                    <h5>Hi there, I'm Developer</h5>
                    <h2>Thanh Khiết</h2>
                </div>
                <h3><span ref={textRef}></span></h3>
                <div>
                    <a href="https://www.facebook.com/thanh.khiet.399/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </a>
                    <a href="https://github.com/khiet-alt" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                    <a href="https://www.instagram.com/th.khiet/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </a>
                    <a href="https://www.linkedin.com/in/khi%E1%BA%BFt-cao-a4a9021ab/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                </div>
                <div className="buttonClick">
                    <Link to="/skills" className="buttonLink"
                        onClick={() => setSelected('skills')} >
                            Overview Skills</Link>
                    <Link to="/" className="buttonLink">Download CV</Link>
                </div>
            </div>
        </div>
    )
}
