import BarChart from "./components/BarChart"
import CricleChart from "./components/CircleChart"

import './index.scss'
const Home = ()=>{

    return (
        <div>
        <BarChart title={'使用频率'} 
        Xdata={['Vue', 'Angular', 'React','Other']} />
        
        <CricleChart/>
        </div>
    )
    }
    export default Home