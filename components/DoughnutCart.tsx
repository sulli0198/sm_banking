'use client';
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutCart = ({accounts} : DoughnutChartProps ) => {
  const data = {
    datasets: [
      {
      label:'Banks',
      data: [1250, 2222, 3327],
      backgroundColor: ['#00e9ff','#08a0d7','#0067b1'],
      borderWidth: 0, 
      }
    ],
      labels: ['bank 1','bank 2','bank 3']
    }
    
    const options = {
      cutout: '60%',
      plugins: {
        legend: {
          display: false,
        },
      },
    };
    
    return <Doughnut 
    data={data}
    options={options}
    />
  }
  


export default DoughnutCart
