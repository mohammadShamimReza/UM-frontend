"use client";
import { Layout, theme } from "antd";
import UMBreadCrumb from "./UMBreadCrumb";

const { Header, Content, Footer, Sider } = Layout;

function Contants({ children }: { children: React.ReactNode }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const base = "admin";

  return (
    <Content style={{ margin: "0 16px", minHeight: "100vh", color: "black" }}>
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
