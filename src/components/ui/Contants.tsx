"use client";
import { Layout, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function Contants({ children }: { children: React.ReactNode }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content style={{ margin: "0 16px", minHeight: "100vh", color: "black" }}>
      {children}
    </Content>
  );
}

export default Contants;
