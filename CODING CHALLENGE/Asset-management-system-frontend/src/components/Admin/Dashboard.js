import React, { useEffect, useState } from "react";
import DateBanner from "../Employee/DateBanner";
import WelcomeBanner from "./WelcomeBanner";
import SummaryCard from "./SummaryCard";
import API from "../../services/api";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalAssets: 0,
    totalEmployees: 0,
    serviceRequests: 0,
    pendingRequests: 0,
  });

  const admin = JSON.parse(localStorage.getItem("loggedInUser")) || {
    name: "Admin",
    email: "admin@example.com",
  };

  const fetchDashboardStats = async () => {
    try {
      const res = await API.get("/admin/dashboard");
      setStats(res.data);
    } catch (err) {
      console.error("Failed to fetch dashboard stats", err);
    }
  };

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  return (
    <div style={{ backgroundColor: "#f5f3ff", minHeight: "100vh", padding: "20px" }}>
      <DateBanner />
      <WelcomeBanner name={admin.name} />

      <div className="summary-cards" style={{ display: 'flex', gap: '20px', marginTop: '30px', flexWrap: 'wrap' }}>
        <SummaryCard title="Total Assets" count={stats.totalAssets} color="#7e22ce" />
        <SummaryCard title="Total Employees" count={stats.totalEmployees} color="#6b21a8" />
        <SummaryCard title="Service Requests" count={stats.serviceRequests} color="#5b21b6" />
        <SummaryCard title="Pending Requests" count={stats.pendingRequests} color="#4c1d95" />
      </div>
    </div>
  );
};

export default Dashboard;
