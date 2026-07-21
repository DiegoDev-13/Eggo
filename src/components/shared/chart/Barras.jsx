import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// const labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];

// export const data = {
//   labels, 
//   datasets: [
//     {
//       label: 'Huevos diarios',
//       data: [1102, 1089, 1040, 1101, 1098, 1112, 1105],
//       backgroundColor: 'rgba(10, 110, 35, 0.788)',
//     },
//   ],
// };

export function Barras({data, text}) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: text,
            },
        },
    };

  return <Bar options={options} data={data} />;
}
