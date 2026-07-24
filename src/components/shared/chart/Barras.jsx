import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Barras({data, text, isDark}) {

    const options = {
        responsive: true,
        plugins: {
            legend: {
            labels: {
              // 🎨 Negro (#000000) en modo claro, Blanco (#ffffff) en modo oscuro
              color: isDark ? '#ffffff' : '#000000', 
              font: {
                size: 14,
              }
            }
          },
            title: {
                display: true,
                text: text,
                color: isDark ? '#ffffff' : '#858fa1', 
            },
        },
    };

  return <Bar options={options} data={data} />;
}
