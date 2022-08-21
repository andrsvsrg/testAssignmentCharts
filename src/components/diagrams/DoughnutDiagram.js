import React, { useEffect } from 'react';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import generateRandomColorArr from '../../auxiliaryFunction/randomColorArr'

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutDiagram = ({ chartOptions, chartData, changeChartData, labelsX, valuesY, typeDiagram }) => {

  useEffect(() => {
    if(typeDiagram === 'doughnut') {
      let colorsArr = []
      if (labelsX) {
        colorsArr = labelsX.map((_, index) => randomColorBackgroundArr[index])
      }
      changeChartData(labelsX, valuesY, colorsArr, undefined, 1)
    }
  }, [labelsX, valuesY, typeDiagram])

  return (
    <>
      <Doughnut options={ chartOptions } data={ chartData }/>
    </>
  );
};

export default DoughnutDiagram;

const randomColorBackgroundArr = generateRandomColorArr(25,0.2);

