import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  is3D: true,
  chartArea: { left: "100", top: "40", width: "100%", height: "100%" },
  backgroundColor: "transparent",
};

const Pie = ({ amount, returnRate, time }) => {
  const monthlyRate = returnRate / 12 / 100;
  const months = time * 12;
  let futureValue = 0;
  futureValue =
    amount *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);
  let investment_amonut = amount * 12 * time;
  let est_rtn = futureValue - investment_amonut;
  const data = [
    ["Parameter", "Value"],
    ["Est return", est_rtn],
    ["Invested Amount", investment_amonut],
  ];
  return (
    <div className="mt-3 items-center rounded-lg">
      <Chart
        className="w-full"
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
      />
    </div>
  );
};

export default Pie;
