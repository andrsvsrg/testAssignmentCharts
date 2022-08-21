import React, { useState } from 'react';
import BarDiagram from './diagrams/BarDiagram'
import DoughnutDiagram from './diagrams/DoughnutDiagram'
import LineDiagram from './diagrams/LineDiagram'

import PolarAreaDiagram from './diagrams/PolarAreaDiagram'

const Chart = ({ labelsX, valuesY, typeDiagram }) => {

  const [chartData, setChartData] = useState({
    labels  : labelsX,
    datasets: [
      {
        label          : 'Dataset',
        data           : valuesY,
        backgroundColor: 'rgba(78,141,190,0.5)'
      },
    ]
  })

  const changeChartData = (labels, data, backgroundColor, borderColor, borderWidth) => {
    setChartData({
      labels,
      datasets: [
        {
          label: 'Dataset',
          data,
          backgroundColor,
          borderColor,
          borderWidth
        }
      ]
    })
  }

  const chartOptions = {
    responsive: true,
    plugins   : {
      legend: {
        position: 'top',
      },
      title : {
        display: true,
        text   : 'Chart.js',
      },
    },
  }

  const allCharts = {
    bar      : <BarDiagram chartOptions={ chartOptions } chartData={ chartData } changeChartData={ changeChartData }
                           labelsX={ labelsX } valuesY={ valuesY } typeDiagram={ typeDiagram }/>,
    line     : <LineDiagram chartOptions={ chartOptions } chartData={ chartData } changeChartData={ changeChartData }
                            labelsX={ labelsX } valuesY={ valuesY } typeDiagram={ typeDiagram }/>,
    doughnut : <DoughnutDiagram chartOptions={ chartOptions } chartData={ chartData }
                                changeChartData={ changeChartData }
                                labelsX={ labelsX } valuesY={ valuesY } typeDiagram={ typeDiagram }/>,
    polarArea: <PolarAreaDiagram chartOptions={ chartOptions } chartData={ chartData }
                                 changeChartData={ changeChartData }
                                 labelsX={ labelsX } valuesY={ valuesY } typeDiagram={ typeDiagram }/>
  }

  return (
    <div>
      { allCharts[typeDiagram] }
    </div>
  );
};

export default Chart;