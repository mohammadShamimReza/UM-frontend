"use client";

import { useNoticesQuery } from "@/redux/api/noticeApi";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import React from "react";

const cardStyle: React.CSSProperties = {
  width: "100%",
  marginBottom: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const NoticesPage = () => {
  const { data, isLoading } = useNoticesQuery({});
  const notice = data?.notice;
  const meta = data?.meta;
  console.log(notice, meta);
  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f2f5" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ fontSize: "2em", color: "#1890ff" }}>Notices</h1>{" "}
        <Button
          type="primary"
          icon={<PlusOutlined />}
          href="/admin/notice/create"
        >
          Create Notice
        </Button>
      </div>
      <Row gutter={[16, 16]}>
        {notice?.map((notice) => (
          <Col span={24} key={notice.title}>
            <Card title={notice.title} style={cardStyle} hoverable>
              <p>{notice.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NoticesPage;
