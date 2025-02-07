import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface GraphProps {
  graphData: number[][];
  WordsPerMinute: number;
  accuracy: number;
}

const Graph = ({ graphData, WordsPerMinute, accuracy }: GraphProps) => {
  console.log(accuracy);
  const theme = useSelector((state: RootState) => state.theme);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Typing Performance',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time', // X-axis title
        },
        grid: {
          display: false, // Remove grid lines for the x-axis
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value', // Y-axis title
        },
        grid: {
          display: false, // Remove grid lines for the y-axis
        },
      },
    },
  };

  return (
    <div className="h-[250px] w-[800px]">
      <Line
        options={options}
        data={{
          labels: graphData.map((array) => array[0]),
          datasets: [
            {
              data: graphData.map((array) => array[1]),
              label: 'WPM',
              borderColor: theme.primary,
              tension: 0.1,
              backgroundColor: `${theme.primary}33`, // Use theme.secondary with 20% opacity for the fill color
              borderWidth: 2, // Line width
              fill: true, // Fill area under the line
            },
          ],
        }}
      />
    </div>
  );
};

export default Graph;
