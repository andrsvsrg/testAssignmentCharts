import { ArcElement, Chart as ChartJS, Legend, RadialLinearScale, Tooltip, } from 'chart.js';
import React, { useEffect } from 'react';
import { PolarArea } from 'react-chartjs-2';

import generateRandomColorArr from '../../auxiliaryFunction/randomColorArr'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarAreaDiagram = ({ chartOptions, chartData, changeChartData, labelsX, valuesY, typeDiagram }) => {

  useEffect(() => {
    if(typeDiagram === 'polarArea'){
      let colorsArr = []
      if (labelsX) {
        colorsArr = labelsX.map((_, index) => randomColorBackgroundArr[index])
      }
      changeChartData(labelsX, valuesY, colorsArr, undefined, 1)
    }
  }, [labelsX, valuesY, typeDiagram])

  return (
    <>
      <PolarArea data={ chartData } options={ chartOptions }/>
    </>
  );
};

export default PolarAreaDiagram;


const randomColorBackgroundArr = generateRandomColorArr(25, 0.4);
