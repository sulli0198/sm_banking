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
      backgroundColor: ['#0747b6','#2265d8','#2f91fa'],
      }
    ],
      labels: ['bank 1','bank 2','bank 3']
    }
    
    return <Doughnut data={data} />
  }
  


export default DoughnutCart
