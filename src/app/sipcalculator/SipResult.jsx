import React from "react";
import { NumericFormat } from "react-number-format";

const SipResult = ({ amount, returnRate, time }) => {
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
    <div>
      <table className="text-left text-sm text-gray-500 rtl:text-right">
        <tbody>
          <tr className="border-b bg-white">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium text-lg text-gray-900"
            >
              Monthly Investment
            </th>
            <td className="px-6 py-4 text-lg">
              <NumericFormat
                value={parseFloat(amount).toFixed(0)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
            </td>
          </tr>
          <tr className="border-b bg-white ">
            <th
              scope="row"
              className="whitespace-nowrap text-lg px-6 py-4 font-medium text-gray-900"
            >
              Invested Amount
            </th>
            <td className="px-6 py-4 text-lg">
              <NumericFormat
                value={(amount * time * returnRate).toFixed(0)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
            </td>
          </tr>
          <tr className="border-b bg-white">
            <th
              scope="row"
              className="whitespace-nowrap text-lg px-6 py-4 font-medium text-gray-900"
            >
              Est. Return
            </th>
            <td className="px-6 py-4 text-lg">
              <NumericFormat
                value={est_rtn.toFixed(0)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
            </td>
          </tr>
          <tr className="bg-white">
            <th
              scope="row"
              className="whitespace-nowrap text-lg px-6 py-4 font-medium text-gray-900"
            >
              Total Value
            </th>
            <td className="px-6 py-4 text-lg">
              <NumericFormat
                value={(amount * time * returnRate + est_rtn).toFixed(0)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SipResult;
