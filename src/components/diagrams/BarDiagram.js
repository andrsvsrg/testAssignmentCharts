import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip, } from 'chart.js'
import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
)

const BarDiagram = ({ chartOptions, chartData, changeChartData, labelsX, valuesY, typeDiagram }) => {

  useEffect(() => {
    if (typeDiagram === 'bar') {
      changeChartData(labelsX,valuesY,'rgba(78,141,190,0.5)' );
    }
  }, [labelsX, valuesY, typeDiagram])   /// typeDiagram === "bar" будет ли так работать немного лучше ?

  return (
    <>
      <Bar data={ chartData } options={ chartOptions }/>
    </>
  );
};

export default BarDiagram;