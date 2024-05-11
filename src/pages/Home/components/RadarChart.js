import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
const RadarChart = ()=>{
    const chartRef = useRef(null)
    useEffect(()=>{
        const chartDom = chartRef.current;
const myChart = echarts.init(chartDom);
const option = {
  title: {
    text: '雷达对比图',
    top:20
  },

  legend: {
    data: ['React', 'Vue','Angular','Others'],
    top:0
  },

  radar: {
    // shape: 'circle',
    // diameter: 200,
    radius:120,
    // center:['50%','50%'],
    name: {
      textStyle: {
          padding: [-10, -12]  // 控制文字padding
      }
  },
    indicator: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 }
    ],
  },
  series: [
    {
      name: 'React vs Vue vs Angular',
      type: 'radar',
      data: [
        {
          value: [4200, 13000, 26000, 35000, 50000, 18000],
          name: 'React'
        },
        {
          value: [5000, 14000, 28000, 26000, 48000, 21000],
          name: 'Vue'
        },
        {
          value: [4000, 3000, 21000, 21000, 32000, 22000],
          name: 'Angular'
        },
        {
            value: [2000, 2000, 13000, 31000, 35000, 12000],
            name: 'Others'
          }
      ]
    }
  ]
};

option && myChart.setOption(option);
    },[])
    return (
        <div ref={chartRef} style={{width:'400px',height:'320px'}}></div>
     )
}
export default RadarChart
