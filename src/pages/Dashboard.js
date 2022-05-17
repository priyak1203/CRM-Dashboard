import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//===== Data ======/
import statusCardData from "../../src/assets/commonData/status_card_data.json";
import { chartOptions, colorOptions } from "../assets/commonData/ChartValues";
import {
  latestOrders,
  orderStatus,
  topCustomers,
} from "../assets/commonData/CustomerInfo";

//========= Components =========/
import StatusCard from "../components/Statuscard/StatusCard";
import Table from "../components/Table/Table";
import Badge from "../components/Badge/Badge";

/* =============== Function to Render Customer Table Head ===================== */
const renderCustomerHead = (item, index) => <th key={index}>{item}</th>;

/* =============== Function to Render Customer Table Body ===================== */
const renderCustomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

/* =============== Function to Render Order Table Head ===================== */
const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

/* =============== Function to Render Order Table Body ===================== */
const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

const Dashboard = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);
  // const themeReducer = useSelector((state) => state);
  return (
    <section>
      <h2 className="page-header">Dashboard</h2>
      {/* Main Layout */}
      <div className="row">
        {/* Status Cards */}
        <div className="col-6">
          <div className="row">
            {statusCardData
              ? statusCardData.map((item, index) => (
                  <div className="col-6" key={index}>
                    <StatusCard {...item} />
                  </div>
                ))
              : ""}
          </div>
        </div>
        {/* Chart */}
        <div className="col-6">
          <div className="card full-height">
            <Chart
              options={
                themeReducer.mode === "theme-mode-dark"
                  ? {
                      ...chartOptions.options,
                      theme: { mode: "dark" },
                      colors: colorOptions[themeReducer.color],
                    }
                  : {
                      ...chartOptions.options,
                      theme: { mode: "light" },
                      colors: colorOptions[themeReducer.color],
                    }
              }
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>
        {/* Top Customers Table */}
        <div className="col-4">
          <div className="card">
            <div className="card-header">
              <h3>Top Customers</h3>
            </div>
            <div className="card-body">
              <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCustomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCustomerBody(item, index)}
              />
            </div>
            <div className="card-footer">
              <Link to="/">View All</Link>
            </div>
          </div>
        </div>
        {/* Latest Orders Table */}
        <div className="col-8">
          <div className="card">
            <div className="card-header">
              <h3>Latest Orders</h3>
            </div>
            <div className="card-body">
              <Table
                headData={latestOrders.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className="card-footer">
              <Link to="/">View All</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
