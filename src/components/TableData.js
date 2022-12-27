import React from "react";
import { Table } from "antd";
import { CheckOutlined } from "@ant-design/icons";
const TableData = () => {
  const dataSource = [
    {
      key: "1",
      date: "7/2/2021, 2:05:07 PM",
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "2",
      date: "7/2/2021, 2:05:07 PM",
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "3",

      date: "7/2/2021, 2:05:07 PM",
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "4",

      date: "7/2/2021, 2:05:07 PM",
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "12",

      date: "7/2/2021, 2:05:07 PM",
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "5",

      date: "7/2/2021, 2:05:07 PM",
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "6",

      date: "7/2/2021, 2:05:07 PM",
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "7",

      date: "7/2/2021, 2:05:07 PM",
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "8",

      date: "7/2/2021, 2:05:07 PM",
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "9",

      date: "7/2/2021, 2:05:07 PM",
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "10",

      date: "7/2/2021, 2:05:07 PM",
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "11",

      date: "7/2/2021, 2:05:07 PM",
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
  ];

  const columns = [
    {
      title: "Date/Time",
      dataIndex: "date",
      key: "date",

      sorter: {
        compare: (a, b) => a.date - b.date,
        multiple: 3,
      },
      sortDirections: ["descend", "ascend"],
      showOnResponse: true,
      showOnDesktop: true,
      render: (text) => <div style={{ fontWeight: "bolder" }}>{text}</div>,
    },
    {
      title: "Voltage(V)",
      dataIndex: "voltage",
      key: "voltage",

      sortDirections: ["descend", "ascend"],
      sorter: {
        compare: (a, b) => a.voltage.length - b.voltage.length,
        multiple: 3,
      },
      responsive: ["sm"],
      sortDirections: ["descend", "ascend"],

      showOnResponse: true,
      showOnDesktop: true,
      render: (text) => (
        <div style={{ color: "red", fontWeight: "bolder" }}>{text}</div>
      ),
    },
    {
      title: "Current(Amp)",
      dataIndex: "current",
      key: "current",

      sorter: {
        compare: (a, b) => a.current.length - b.current.length,
        multiple: 3,
      },

      sortDirections: ["descend", "ascend"],
      showOnResponse: true,
      showOnDesktop: true,
      render: (text) => (
        <div style={{ color: "blue", fontWeight: "bolder" }}>{text}</div>
      ),
    },
    {
      title: "Radiance",
      dataIndex: "raid",
      key: "raid",
      sorter: {
        compare: (a, b) => a.raid.length - b.raid.length,
        multiple: 3,
      },
      showOnResponse: true,
      showOnDesktop: true,
      render: (text) => (
        <div style={{ color: "orange", fontWeight: "bolder" }}>{text}</div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      sorter: {
        compare: (a, b) => a.status.length - b.status.length,
        multiple: 3,
      },
      responsive: ["sm"],
      showOnResponse: true,
      sortDirections: ["descend", "ascend"],
      showOnDesktop: true,
      render: () => (
        <div style={{ color: "green", fontWeight: "bolder" }}>
          <CheckOutlined />
        </div>
      ),
    },
  ];
  return (
    <div className="table">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default TableData;
