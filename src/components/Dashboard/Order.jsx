import React from "react";
import "./Dashboard-styles/order.css";

const tableData = [
  { id: 1, name: "Dody Lotion", progress: 70, status: "Delivered", sold:"83" },
  { id: 2, name: "Sports", progress: 50, status: "Paid", sold:"43"},
  { id: 3, name: "Computer", progress: 80, status: "Delivered", sold:"63" },
  { id: 4, name: "Bottle", progress: 40, status: "Ordered", sold:"37" },
  { id: 5, name: "Headset", progress: 65, status: "Delivered", sold:"43" },
  { id: 6, name: "T-shirt", progress: 70, status: "Delivered", sold:"79" },
  { id: 7, name: "Pant", progress: 60, status: "Paid", sold:"51" },
  { id: 8, name: "Electronic", progress: 30, status: "Ordered", sold:"9" },
];

const Order = () => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Progress</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((id) => (
            <tr key={id.id}>
              <td>{id.id}</td>
              <td>{id.name}</td>
              <td>
                <div className="progress-container">
                  <div
                    className="progress-bar bg-blue"
                    style={{ width: `${id.progress}%` }}
                  ></div>
                </div>
              </td>


              <td>
                <span
                  className={`status ${
                    id.status === "Delivered"
                      ? "status-delivered"
                      : id.status === "Paid"
                      ? "status-paid"
                      : "status-ordered"
                  }`}
                >
                  {id.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
