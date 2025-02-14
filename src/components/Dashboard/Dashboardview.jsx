import React from "react";
import { Search, User, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import "./Dashboard-styles/dashboardView.css";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, ScatterChart, BarChart, Scatter, Tooltip, Legend, Bar } from 'recharts';
import { ArrowUp, ArrowDown } from "lucide-react";

const salesData = [
  { title: "Daily Sales", value: "$249.95", percentage: "50%", increase: true },
  { title: "Monthly Sales", value: "$2,942.32", percentage: "36%", increase: false },
  { title: "Yearly Sales", value: "$8,638.32", percentage: "70%", increase: true },
];

const pieData = [
  { name: 'Group A', value: 70 },
  { name: 'Group B', value: 50 },
  { name: 'Group C', value: 80 },
  { name: 'Group D', value: 40 },
];

const lineData = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const scatterData = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const barData = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${value}%`}
      </text>
    );
  };
  
  function Dashboardview() {
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <h2>Dashboard</h2>
        <div className="srch">
          <div className="search-input">
            <input type="text" placeholder="Search products..." />
            <button className="search-button">
              <Search size={15} />
            </button>
            <div className="user-actions">
            <Link to="/account" className="icon-button">
              <User size={20} />
            </Link>
            <Link to="/wishlist" className="icon-button">
              <Heart size={20} />
              <span className="badge">0</span>
            </Link>
            <Link to="/cart" className="icon-button">
              <ShoppingCart size={20} />
              <span className="badge">0</span>
            </Link>
          </div>
          </div>
        </div>
        </div> 

        <div className="sales-container">
  {salesData.map((data, index) => (
    <div key={index} className="sales-card">
      <h3 className="sales-title">{data.title}</h3>
      <div className="sales-info">
        {data.increase ? (
          <ArrowUp className="icon-up" />
        ) : (
          <ArrowDown className="icon-down" />
        )}
        <span className="sales-value">{data.value}</span>
        <span className="sales-percentage">{data.percentage}</span>
      </div>
      <div className="progress-bar">
        <div
          className={`progress-fill ${
            data.increase ? "increase" : "decrease"
          }`}
          style={{ width: data.percentage }}
        ></div>
      </div>
    </div>
  ))}
</div>
        
         
        <div className="chart-container">

        <div className="linechart">
         <h3>Customers aquisition</h3>
          <div style={{ width: '50%', height: '300px' }}>
            <ResponsiveContainer width="80%" height="100%">
              <LineChart data={lineData} margin={{ top: 10, right: 25 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
         </div>


        <div className="piechart">
          <h3>Product Sold</h3>
          <div style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          </div>
        
          
         <div className="scartterchart">
         <h3>Total spent</h3>
          <div style={{ width: '50%', height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart>
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="A school" data={scatterData} fill="#8884d8">
                  {scatterData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
         </div>

         <div className="barchart">
        <h3>Total income </h3>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={barData} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
          
  
        </div>
      </div>
    );
  }
export default Dashboardview;
