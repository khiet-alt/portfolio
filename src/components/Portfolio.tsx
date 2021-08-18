import React from 'react'
import '../styles/portfolio.scss'
//data
import { portfolioList } from '../dummyData/portfolioList'
import PortfolioList from './PortfolioList'
import { featuredPorfolio, frontendPortfolio, backendPortfolio,
    designPortfolio,
    othersPortfolio } from '../dummyData/portfolioList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookDead } from '@fortawesome/free-solid-svg-icons'

type Prop = {
    id: number;
    title: string;
    img: string;
}

export default function Portfolio() {
    
    const [ selected, setSelected ] = React.useState('featured')
    const [ data, setData ] = React.useState([] as Prop[])

    React.useEffect(() => {
        switch(selected){
            case "featured":
                setData(featuredPorfolio)
                break;
            case "backend":
                setData(backendPortfolio)
                break;
            case "frontend":
                setData(frontendPortfolio)
                break;
            case "design":
                setData(designPortfolio)
                break;
            case "other":
                setData(othersPortfolio)
                break;
        }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h2>PORTFOLIO</h2>
            <ul>
                { portfolioList.map(item => (
                     <PortfolioList 
                        title={item.title}
                        id={item.id}
                        selected={selected === item.id}
                        setSelected={setSelected}    
                    />   
                    ))}
            </ul>

            <div className="wrapperPortfolio">
                { data.map(item => (
                    <div className="item">
                        <img src={item.img} alt="" />
                        <div className="viewSource">
                            <h5>{item.title}</h5>
                            <FontAwesomeIcon icon={faBookDead} />
                            <a href="#">Source</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
