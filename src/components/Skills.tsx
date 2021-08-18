import '../styles/skills.scss'
import React from 'react'
import { Link } from 'react-router-dom'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAward, faCheck, faDatabase, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
// data
import { data } from '../dummyData/skillData'

library.add(fab)

type Prop = {
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export default function Skills({setSelected}: Prop) {

    return (
        <div className="skills">
            <h2>Skills Overview</h2>
            <p>As well as studying at school, I have been self-learning more about building Web Application 
                in my leisure time. Below is a quick overview of my main technical skills sets and tools,
                which I acquired through a variety of courses. Want to know more about my experience?
            </p>
            <a href="#" className="checkout"><i>Check out my resume</i></a>

            <div className="skillWrapper">
                { data.map(item => (
                    <div className="skillItem">
                        <div className="skillLogo">
                            <FontAwesomeIcon icon={faAward} />
                        </div>
                        <div className="skillInfor">
                            <h4>{item.name}</h4>
                            <div className="skillLine">
                                {item.line.map(item => (
                                    <div className="line">
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Link to="/portfolio" className="arrowdown" onClick={() => setSelected('portfolio')}>
                <img src="assets/images/down.png" alt="" />
            </Link>
            <p className="pBlink" onClick={() => setSelected('portfolio')} >
                <Link to="/portfolio">
                    View full Projects
                </Link>
            </p>

        </div>
    )
}
