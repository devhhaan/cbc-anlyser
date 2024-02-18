// src/components/CBCChart.js
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto"; // Import Chart from 'chart.js/auto'
import "chartjs-adapter-moment";

const CBCRbcChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((entry) => entry.date),
        datasets: [
          {
            label: "RBC Level",
            data: data.map((entry) => entry.rbc),
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: "time",
            time: {
              unit: "day",
            },
            title: {
              display: true,
              text: "Date",
            },
          },
          y: {
            title: {
              display: true,
              text: "RBC Level",
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} style={{ backgroundColor: "#dbb2af" }} />;
};

export default CBCRbcChart;
