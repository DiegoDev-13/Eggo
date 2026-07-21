import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Grade A (Celan)', 'Grade B (Dirty/Broken)',],
  datasets: [
    {
      label: 'Huevos',
      data: [1016, 89],
      backgroundColor: [
        'rgba(10, 110, 35, 0.788)',
        'rgba(29, 143, 73, 0.322)',
      ],
      borderColor: [
        '#0e4b2c',
        '#1a6111af',
      ],
      borderWidth: 1,
      hoverOffset: 16,
      offset: 10,
    },
  ],
};

export function Dona() {
  return <Doughnut data={data} />;
}
