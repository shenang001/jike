import * as echarts from 'echarts';
import { useEffect ,useRef} from 'react';
const CricleChart=()=>{
    const chartRef = useRef(null)
useEffect(()=>{
    const chartDom = chartRef.current;
const myChart = echarts.init(chartDom);
const option = {
  title: {
    text: '使用满意度',

    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '截止到2024.04.30',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 889, name: 'Vue' },
        { value: 905, name: 'React' },
        { value: 667, name: 'Angular' },
        { value: 305, name: 'Other' },
       
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

option && myChart.setOption(option);

},[])
return (
    <div ref={chartRef} style={{width:'400px',height:'350px'}}></div>
 )
}
export default CricleChart