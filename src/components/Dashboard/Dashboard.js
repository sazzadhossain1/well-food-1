import React from "react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="main-container">
      <h1>This is Dashboard</h1>

      <div className="parent-container">
        <div>
          <h1>MONTH WISH SELL</h1>
          <LineChart width={450} height={350} data={data}>
            <Line dataKey={"sell"}></Line>
            <Line dataKey={"revenue"}></Line>
            <Line dataKey={"investment"}></Line>

            <XAxis dataKey={"month"}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
          </LineChart>
        </div>

        <div>
          <h1>INVESTMENT VS REVENUE</h1>
          <BarChart width={450} height={350} data={data}>
            <Bar dataKey={"investment"}></Bar>
            <Bar dataKey={"sell"}></Bar>
            <Bar dataKey={"revenue"}></Bar>
            <XAxis dataKey={"month"}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
