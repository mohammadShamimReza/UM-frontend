"use client";

import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import React from "react";

const notices = [
  { id: 1, title: "Notice 1", description: "This is the first notice." },
  { id: 2, title: "Notice 2", description: "This is the second notice." },
  { id: 3, title: "Notice 3", description: "This is the third notice." },
  { id: 4, title: "Notice 4", description: "This is the fourth notice." },
  { id: 5, title: "Notice 5", description: "This is the fifth notice." },
];

const cardStyle: React.CSSProperties = {
  width: "100%",
  marginBottom: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const NoticesPage = () => {
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
        {notices.map((notice) => (
          <Col span={24} key={notice.id}>
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
