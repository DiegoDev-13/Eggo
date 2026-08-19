import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export function Dona({isDark}) {

  const data = {
    labels: ['Grado A (Limpio)', 'Grado B (sucio / roto)',],
    datasets: [
      {
        label: 'Huevos',
        data: [1016, 89],
        // backgroundColor: isDark ? 'rgba(17, 189, 60, 0.788)' : 'rgba(10, 110, 35, 0.788)',
        backgroundColor: isDark ? [
          'rgba(17, 189, 60, 0.788)',
          'rgba(71, 241, 136, 0.37)',
        ] : [
          'rgba(10, 110, 35, 0.788)',
          'rgba(29, 143, 73, 0.322)',
        ],
        borderColor: isDark ? [
          '#071f0d',
          '#269417ad',
        ] : [
          '#0e4b2c',
          '#1a6111af',
        ],
        borderWidth: 1,
        hoverOffset: 16,
        offset: 10,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          // 🎨 Negro (#000000) en modo claro, Blanco (#ffffff) en modo oscuro
          color: isDark ? '#ffffff' : '#000000', 
          font: {
            size: 14,
          }
        }
      }
    }
  };

  return <Doughnut data={data} options={options} />;
}
