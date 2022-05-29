import React from "react";
import "./Table.css";

function Table({ countries }) {
  return (
    <div className="table">
      <table>
        <tbody>
          {countries.map(({ country, cases }, idx) => (
            <tr key={idx}>
              <td>{country}</td>
              <td>
                {cases.toLocaleString("vi-VN", { maximumFractionDigits: 0 })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
