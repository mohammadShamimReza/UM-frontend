"use client";
import { Layout, theme } from "antd";
import Header from "./Header";
import UMBreadCrumb from "./UMBreadCrumb";

const { Content, Footer, Sider } = Layout;

function Contants({ children }: { children: React.ReactNode }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const base = "admin";

  return (
    <Content style={{ minHeight: "100vh", color: "black" }}>
      <Header />
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: `student`, link: `/${base}/student` },
        ]}
      />
      {children}
    </Content>
  );
}

export default Contants;
