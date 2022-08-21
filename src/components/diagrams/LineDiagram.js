import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const LineDiagram = ({ chartOptions, chartData, changeChartData, labelsX, valuesY, typeDiagram }) => {

  useEffect(() => {
    if (typeDiagram === 'line') {
      changeChartData(labelsX,valuesY, 'rgba(255, 99, 132, 0.5)', 'rgb(255, 99, 132)');
    }
  }, [typeDiagram, labelsX, valuesY])

  return (
    <>
      <Line data={ chartData } options={ chartOptions }/>
    </>
  );
};

export default LineDiagram;