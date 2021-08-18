import React from 'react'
import '../styles/leftbar.scss'
import { Link } from 'react-router-dom'

type Prop = {
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>
}

export default function LeftBar({selected, setSelected}: Prop) {

    return (
        <div className="leftbar">
            <div className="imgContainer">
            </div>
            
            <div className="navbar">
                <ul>
                    <li className={"" + (selected === 'home' && 'active')}
                        onClick={() => setSelected('home')} >
                        <Link to="/intro">Home</Link>
                    </li>
                    <li className={"" + (selected === 'about' && 'active')}
                        onClick={() => setSelected('about')} >
                        <Link to="/about">About</Link>
                    </li>
                    <li className={"" + (selected === 'skills' && 'active')}
                        onClick={() => setSelected('skills')} >
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li className={"" + (selected === 'portfolio' && 'active')}
                        onClick={() => setSelected('portfolio')} >
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
