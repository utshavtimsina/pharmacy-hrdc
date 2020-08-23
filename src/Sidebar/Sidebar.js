import React, { useEffect } from "react";
import SidebarComponent from "./SidebarComponent";
import "./Sidebar.css";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PanToolIcon from "@material-ui/icons/PanTool";
import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";
import CategoryIcon from "@material-ui/icons/Category";
import ReceiptIcon from "@material-ui/icons/Receipt";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Divider } from "@material-ui/core";
import { withRouter } from "react-router";
import { useLocation } from "react-router-dom";
const Sidebar = ({ drawer }) => {
  const location = useLocation();
  const [pathname, setpathname] = React.useState();
  useEffect(() => {
    const currentPath = location.pathname;
    setpathname(currentPath);
  }, [location]);
  return (
    <div className="Sidebar">
      <div className="dashboard__header">
        <AccountBalanceWalletIcon className="dashboard__icon" />
        <h3>
          HRDC <span>Admin</span>
        </h3>
      </div>
      <Divider />

      <SidebarComponent Icon={DashboardIcon} Desc="Dashboard" drawer={drawer} />
      <Divider />

      <SidebarComponent
        drawer={drawer}
        Icon={PanToolIcon}
        Desc="Patient"
        active={pathname === "/Patient" ? true : false}
        subItem={["Admit", "Update"]}
        service="PATIENT RELATED "
        serviceDesc="PATIENT OPERATIONS:"
      />
      <Divider />
      <SidebarComponent
        drawer={drawer}
        Icon={SportsKabaddiIcon}
        // active={location === "/Services" ? true : false}
        active={pathname === "/Services" ? true : false}
        Desc="Services"
        subItem={["Services", "Add Services", "Add Service To Patient"]}
        service="SERVICE RELATED "
        serviceDesc="SERVICE OPERATIONS::"
      />
      <Divider />
      <SidebarComponent
        drawer={drawer}
        Icon={CategoryIcon}
        active={pathname === "/Category" ? true : false}
        Desc="Category"
        subItem={["Add  "]}
        service="CATEGORY RELATED "
        serviceDesc="CATEGORY OPERATIONS:"
      />
      <Divider />
      <SidebarComponent
        drawer={drawer}
        Icon={ReceiptIcon}
        Desc="Billing"
        active={pathname === "/Billing" ? true : false}
        subItem={["Generate  "]}
        service="CATEGORY RELATED "
        serviceDesc="CATEGORY OPERATIONS:"
      />
      <Divider />
      <SidebarComponent
        drawer={drawer}
        Icon={PersonAddIcon}
        active={pathname === "/User" ? true : false}
        Desc="User"
        subItem={["Add User", "Update User"]}
        service="USER RELATED "
        serviceDesc="USER OPERATIONS:"
      />
      <Divider />
    </div>
  );
};
export default withRouter(Sidebar);
