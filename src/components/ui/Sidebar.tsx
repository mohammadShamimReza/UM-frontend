"use client";
import { USER_ROLE } from "@/constants/role";
import { sidebarItems } from "@/constants/sidebaritems";

import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";

function SideBar() {
  const [collapsed, setCollapsed] = useState(false);

  const role = USER_ROLE.SUPER_ADMIN;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: "0",
        top: "0",
        bottom: "0",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        PH-University
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
}

export default SideBar;
