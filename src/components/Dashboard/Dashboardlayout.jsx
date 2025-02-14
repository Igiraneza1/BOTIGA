import React from "react";
import Sidebar from "./Sidebar";
import Dashboardview from "./Dashboardview";
import { Outlet } from "react-router-dom";
function Dashboardlayout(){
    return(
        <div>
        <Sidebar/>
        <Dashboardview/>
        </div>
    );}
export default Dashboardlayout;