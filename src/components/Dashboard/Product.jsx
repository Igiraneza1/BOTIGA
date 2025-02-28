import React from "react";
import "./Dashboard-styles/product.css";

const tableData = [
  { id: 1, name: "Dody Lotion", sold: 83, total: 100 },
  { id: 2, name: "Sports", sold: 43, total: 80 },
  { id: 3, name: "Computer", sold: 63, total: 120 },
  { id: 4, name: "Bottle", sold: 37, total: 50 },
  { id: 5, name: "Headset", sold: 43, total: 60 },
  { id: 6, name: "T-shirt", sold: 79, total: 100 },
  { id: 7, name: "Pant", sold: 51, total: 90 },
  { id: 8, name: "Electronic", sold: 9, total: 30 },
];

const ProductTable = () => {
  return (
    <div className="container1">
      <table className="tables">
        <thead>
          <tr>
            <th>Name</th>
            <th>Sold Out</th>
            <th>Remaining</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td className="sold-out">{item.sold}</td>
              <td className="remaining">{item.total - item.sold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
