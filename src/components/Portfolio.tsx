import React from 'react'
import '../styles/portfolio.scss'
//data
import { portfolioList } from '../dummyData/portfolioList'
import PortfolioList from './PortfolioList'
import { featuredPorfolio, webPortfolio, mobilePortfolio,
    designPortfolio,
    contentPortfolio } from '../dummyData/portfolioList'

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
                setData(webPortfolio)
                break;
            case "frontend":
                setData(mobilePortfolio)
                break;
            case "design":
                setData(designPortfolio)
                break;
            case "other":
                setData(contentPortfolio)
                break;
        }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h2>Portfolio</h2>
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
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
