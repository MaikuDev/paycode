import { useEffect, useRef } from 'react';
import { LineChartPropsType } from './LineChart.types';
import ApexCharts from 'apexcharts';

function LineChart({ revenue }: LineChartPropsType) {
  const container = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<InstanceType<typeof ApexCharts> | null>(null);

  useEffect(() => {
    if (container.current && !chartInstance.current) {
      const options = {
        chart: {
          type: 'line',
          height: '100%',
          toolbar: {
            show: false,
          },
        },
        grid: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        colors: ['#BFF2D6'],
        stroke: {
          width: 3,
        },
        series: [
          {
            name: 'Revenue',
            data: revenue,
          },
        ],
        yaxis: {
          labels: {
            show: false,
          },
        },
        xaxis: {
          labels: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      };

      const chart = new ApexCharts(container.current, options);
      chart.render();

      chartInstance.current = chart;
    }
  }, [revenue]);

  return <div ref={container}></div>;
}

export { LineChart };
