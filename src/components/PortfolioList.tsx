import React from 'react'
import '../styles/portfolioList.scss'

type Prop = {
    title: string;
    id: string;
    selected: boolean;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export default function PortfolioList({title, id, selected, setSelected}: Prop) {
    return (
        <li className={"portfolioList " + (selected && "active")}
            onClick={() => setSelected(id)} >
            {title}
        </li>
    )
}
