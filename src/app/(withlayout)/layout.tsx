"use client";

import Contants from "@/components/ui/Contants";
import SideBar from "@/components/ui/Sidebar";
import { Layout } from "antd";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <SideBar />
      <Contants>{children}</Contants>
    </Layout>
  );
};

export default DashboardLayout;
