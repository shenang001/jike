import BarChart from "./components/BarChart"
import CricleChart from "./components/CircleChart"
import StackChart from "./components/StackChart"
import RadarChart from "./components/RadarChart"
import './index.scss'
const Home = ()=>{

    return (
        <div className="row">
        <BarChart title={'使用频率'} 
        xdata={['Vue', 'Angular', 'React','Other']} />
        
        <CricleChart/>
        <StackChart/>
        <RadarChart />
        </div>
    )
    }
    export default Home