import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
const BarChart=({title,xdata})=>{
    const chartRef = useRef(null)
useEffect(() =>{
    const chartDom = chartRef.current
    const myChart = echarts.init(chartDom);
    const value = 20
            const option = {
                title:{
                    text:title
                },
                tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    type: 'shadow'
                  }
                },
                grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
                },
                // axisLabel:{
                //     interval:0
                // },
                xAxis: [
                  {
                    type:'category',
                    data: xdata,
                    axisTick: {
                      alignWithLabel: true
                    }
                  }
                ],
                yAxis: [
                  {
                    type: 'value'
                  }
                ],
                series: [
                  {
                    name: 'Direct',
                    type: 'bar',
                    barWidth: '60%',
                    data: [22, value, 25,9]
                  }
                ]
              };
              option && myChart.setOption(option);
        },[title,xdata])
        return (
           <div ref={chartRef} style={{width:'400px',height:'300px'}}></div>
        )
    }
    export default BarChart