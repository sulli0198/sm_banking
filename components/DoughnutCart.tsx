'use client';
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutCart = ({accounts} : DoughnutChartProps ) => {
  const accountNames = accounts.map((a) => a.name );
  const balances = accounts.map((a) => a.currentBalance);

  const data = {
    datasets: [
      {
      label:'Banks',
      data: balances,
      backgroundColor: ['#00e9ff','#08a0d7','#0067b1'],
      borderWidth: 0, 
      }
    ],
      labels: accountNames
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
