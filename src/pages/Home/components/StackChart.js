import * as echarts from 'echarts';
import { useRef,useEffect } from 'react';
const StackChart = ()=>{
  const chartRef = useRef(null)
useEffect(() =>{
  const chartDom = chartRef.current;
const myChart = echarts.init(chartDom);
const option = {
  title: {
    text: '使用趋势',
    left:10,
    top:20
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Angular', 'React', 'Vue', 'Others']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2018', '2019', '2020', '2021', '2022', '2023', '2024']
  },
  yAxis: {
    type: 'category',

  },
  series: [
    {
      name: 'Angular',
      type: 'line',
      stack: 'Total',
      data: [160, 176, 155, 165, 150, 140, 120]
    },
    {
      name: 'React',
      type: 'line',
      stack: 'Total',
      data: [176, 190, 220, 244, 240, 235, 245]
    },
    {
      name: 'Vue',
      type: 'line',
      stack: 'Total',
      data: [155, 170, 240, 244, 250, 251, 255]
    },
    {
      name: 'Others',
      type: 'line',
      stack: 'Total',
      data: [165, 220, 200, 190, 170, 150, 120]
    },
  ]
};

option && myChart.setOption(option);
},[])

return (
  <div ref={chartRef} style={{width:'400px',height:'300px'}}></div>
)
}

export default StackChart