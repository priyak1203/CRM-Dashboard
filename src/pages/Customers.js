import React from "react";
import Table from "../components/Table/Table";

import customerList from "../assets/commonData/customers_list.json";

// ================== Customers Table Headers =========== /
const customerTableHead = [
  "",
  "name",
  "email",
  "phone",
  "total orders",
  "total spend",
  "location",
];

/* =============== Function to Render Customer Table Head ===================== */
const renderCustomerTableHead = (item, index) => <th key={index}>{item}</th>;

/* =============== Function to Render Customer Table Body ===================== */
const renderCustomerTableBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
);

const Custormers = () => {
  return (
    <section>
      <h2 className="page-header">Customers</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <Table
              limit="5"
              headData={customerTableHead}
              renderHead={(item, index) => renderCustomerTableHead(item, index)}
              bodyData={customerList}
              renderBody={(item, index) => renderCustomerTableBody(item, index)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Custormers;
