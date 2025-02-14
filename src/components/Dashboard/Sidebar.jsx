import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { FaHome, FaShoppingCart, FaBlogger, FaCommentAlt } from "react-icons/fa";
import { LiaWindowRestoreSolid } from "react-icons/lia";
import { IoMdContact } from "react-icons/io";
import "./Dashboard-styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Botiga</h1>
      </div>
      <ul className="sidebar-menu">
        <li><Link to="/Dashboardview"><MdDashboard /> Dashboard</Link></li>
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/Shop"><FaShoppingCart /> Shop</Link></li>
        <li><Link to="/vendors"><LiaWindowRestoreSolid /> Vendors</Link></li>
        <li><Link to="/blog"><FaBlogger /> Blogs</Link></li>
        <li><Link to="/contact"><IoMdContact /> Contact</Link></li>
        <li><Link to="/HomeProduct"><FaCommentAlt /> Comments</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
