// "use client";

// import {
//   AppstoreOutlined,
//   BankOutlined,
//   BuildOutlined,
//   CalendarOutlined,
//   ClusterOutlined,
//   HomeOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import { Card, Col, Row } from "antd";
// import Link from "next/link";

// const cardBaseStyle = {
//   borderRadius: "10px",
//   transition: "transform 0.3s, box-shadow 0.3s",
//   cursor: "pointer",
//   textAlign: "center",
//   color: "#333333",
// };

// const titleStyle = {
//   fontSize: "1.2em",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   gap: "8px",
// };

// const bodyStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   fontSize: "1.1em",
// };

// const AdminPage = () => {
//   return (
//     <div style={{ padding: "20px", backgroundColor: "#f0f2f5" }}>
//       <h1
//         style={{
//           textAlign: "center",
//           fontSize: "2.5em",
//           color: "#1890ff",
//           marginBottom: "40px",
//         }}
//       >
//         Welcome To Admin Profile
//       </h1>
//       <div>
//         <Row gutter={16}>
//           <Col span={12}>
//             <Link href="/admin/manage-student">
//               <Card
//                 title={
//                   <div style={titleStyle}>
//                     <UserOutlined />
//                     Academic Students
//                   </div>
//                 }
//                 bordered={false}
//                 hoverable
//                 style={{ ...cardBaseStyle, backgroundColor: "#e6f7ff" }}
//                 bodyStyle={bodyStyle}
//               >
//                 <p>20 Students</p>
//               </Card>
//             </Link>
//           </Col>
//           <Col span={12}>
//             <Link href="/admin/manage-faculty">
//               <Card
//                 title={
//                   <div style={titleStyle}>
//                     <TeamOutlined />
//                     Academic Faculty
//                   </div>
//                 }
//                 bordered={false}
//                 hoverable
//                 style={{ ...cardBaseStyle, backgroundColor: "#e8f5e9" }}
//                 bodyStyle={bodyStyle}
//               >
//                 <p>10 Faculty</p>
//               </Card>
//             </Link>
//           </Col>
//         </Row>
//         <br />
//         <Row gutter={16}>
//           <Col span={12}>
//             <Link href="/admin/academic/department">
//               <Card
//                 title={
//                   <div style={titleStyle}>
//                     <AppstoreOutlined />
//                     Academic Departments
//                   </div>
//                 }
//                 bordered={false}
//                 hoverable
//                 style={{ ...cardBaseStyle, backgroundColor: "#e3f2fd" }}
//                 bodyStyle={bodyStyle}
//               >
//                 <p>5 Departments</p>
//               </Card>
//             </Link>
//           </Col>
//           <Col span={12}>
//             <Link href="/admin/academic/semester">
//               <Card
//                 title={
//                   <div style={titleStyle}>
//                     <HomeOutlined /> Semester
//                   </div>
//                 }
//                 bordered={false}
//                 hoverable
//                 style={{ ...cardBaseStyle, backgroundColor: "#fff3e0" }}
//                 bodyStyle={bodyStyle}
//               >
//                 <p>3 Swmesters</p>
//               </Card>
//             </Link>
//           </Col>
//         </Row>
//         <br />
//         <Row gutter={16}>
//           <Col span={12}>
//             <Link href="/admin/department">
//               <Card
//                 title={
//                   <div style={titleStyle}>
//                     <BuildOutlined /> Departments
//                   </div>
//                 }
//                 bordered={false}
//                 hoverable
//                 style={{ ...cardBaseStyle, backgroundColor: "#ffebee" }}
//                 bodyStyle={bodyStyle}
//               >
//                 <p>3 Departments</p>
//               </Card>
//             </Link>
//           </Col>
//           <br />
//           <Col span={12}>
//             <Link href="/admin/building">
//               <Card
//                 title={
//                   <div style={titleStyle}>
//                     <BankOutlined /> Building
//                   </div>
//                 }
//                 bordered={false}
//                 hoverable
//                 style={{ ...cardBaseStyle, backgroundColor: "#f3e5f5" }}
//                 bodyStyle={bodyStyle}
//               >
//                 <p>8 Building</p>
//               </Card>
//             </Link>
//           </Col>
//         </Row>
//         <br />
//         <Row gutter={16}>
//           <Col span={12}>
//             <Link href="/admin/room">
//               <Card
//                 title={
//                   <div style={titleStyle}>
//                     <ClusterOutlined /> Room
//                   </div>
//                 }
//                 bordered={false}
//                 hoverable
//                 style={{ ...cardBaseStyle, backgroundColor: "#fff8e1" }}
//                 bodyStyle={bodyStyle}
//               >
//                 <p>2000 Roomes</p>
//               </Card>
//             </Link>
//           </Col>
//           <br /> <br />
//           <Col span={12}>
//             <Link href="/admin/course">
//               <Card
//                 title={
//                   <div style={titleStyle}>
//                     <CalendarOutlined /> Courses
//                   </div>
//                 }
//                 bordered={false}
//                 hoverable
//                 style={{ ...cardBaseStyle, backgroundColor: "#e0f7fa" }}
//                 bodyStyle={bodyStyle}
//               >
//                 <p>50 Courses</p>
//               </Card>
//             </Link>
//           </Col>
//           <br />
//           <Col span={12}>
//             <Link href="/admin/offered-course">
//               <Card
//                 title={
//                   <div style={titleStyle}>
//                     <CalendarOutlined /> Offered-couses
//                   </div>
//                 }
//                 bordered={false}
//                 hoverable
//                 style={{ ...cardBaseStyle, backgroundColor: "#e0f7fa" }}
//                 bodyStyle={bodyStyle}
//               >
//                 <p>10 offered-couses</p>
//               </Card>
//             </Link>
//           </Col>
//           <Col span={12}>
//             <Link href="/admin/offered-course">
//               <Card
//                 title={
//                   <div style={titleStyle}>
//                     <CalendarOutlined /> Notice
//                   </div>
//                 }
//                 bordered={false}
//                 hoverable
//                 style={{ ...cardBaseStyle, backgroundColor: "#e0f7fa" }}
//                 bodyStyle={bodyStyle}
//               >
//                 <p>See all noti</p>
//               </Card>
//             </Link>
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;

"use client";

import {
  AppstoreOutlined,
  BankOutlined,
  BuildOutlined,
  CalendarOutlined,
  ClusterOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Link from "next/link";
import React from "react";

const cardBaseStyle: React.CSSProperties = {
  borderRadius: "10px",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "pointer",
  textAlign: "center",
  color: "#333333",
};

const titleStyle: React.CSSProperties = {
  fontSize: "1.2em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
};

const bodyStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.1em",
};

const AdminPage = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f2f5" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5em",
          color: "#1890ff",
          marginBottom: "40px",
        }}
      >
        Welcome To Admin Profile
      </h1>
      <div>
        <Row gutter={16}>
          <Col span={12}>
            <Link href="/admin/manage-student">
              <Card
                title={
                  <div style={titleStyle}>
                    <UserOutlined /> Students
                  </div>
                }
                bordered={false}
                hoverable
                style={{ ...cardBaseStyle, backgroundColor: "#e6f7ff" }}
                bodyStyle={bodyStyle}
              >
                <p>20 Students</p>
              </Card>
            </Link>
          </Col>
          <Col span={12}>
            <Link href="/admin/manage-faculty">
              <Card
                title={
                  <div style={titleStyle}>
                    <TeamOutlined /> Faculty
                  </div>
                }
                bordered={false}
                hoverable
                style={{ ...cardBaseStyle, backgroundColor: "#e8f5e9" }}
                bodyStyle={bodyStyle}
              >
                <p>10 Faculty</p>
              </Card>
            </Link>
          </Col>
        </Row>
        <br />
        <Row gutter={16}>
          <Col span={12}>
            <Link href="/admin/academic/department">
              <Card
                title={
                  <div style={titleStyle}>
                    <AppstoreOutlined /> Departments
                  </div>
                }
                bordered={false}
                hoverable
                style={{ ...cardBaseStyle, backgroundColor: "#e3f2fd" }}
                bodyStyle={bodyStyle}
              >
                <p>5 Departments</p>
              </Card>
            </Link>
          </Col>
          <Col span={12}>
            <Link href="/admin/academic/semester">
              <Card
                title={
                  <div style={titleStyle}>
                    <HomeOutlined /> Semester
                  </div>
                }
                bordered={false}
                hoverable
                style={{ ...cardBaseStyle, backgroundColor: "#fff3e0" }}
                bodyStyle={bodyStyle}
              >
                <p>3 Semester</p>
              </Card>
            </Link>
          </Col>
        </Row>
        <br />
        <Row gutter={16}>
          <Col span={12}>
            <Link href="/admin/department">
              <Card
                title={
                  <div style={titleStyle}>
                    <BuildOutlined /> Department
                  </div>
                }
                bordered={false}
                hoverable
                style={{ ...cardBaseStyle, backgroundColor: "#ffebee" }}
                bodyStyle={bodyStyle}
              >
                <p>5 Department</p>
              </Card>
            </Link>
          </Col>
          <Col span={12}>
            <Link href="/admin/building">
              <Card
                title={
                  <div style={titleStyle}>
                    <BankOutlined /> Buildings
                  </div>
                }
                bordered={false}
                hoverable
                style={{ ...cardBaseStyle, backgroundColor: "#f3e5f5" }}
                bodyStyle={bodyStyle}
              >
                <p>1 Bildings</p>
              </Card>
            </Link>
          </Col>
        </Row>
        <br />
        <Row gutter={16}>
          <Col span={12}>
            <Link href="/admin/room">
              <Card
                title={
                  <div style={titleStyle}>
                    <ClusterOutlined /> Rooms
                  </div>
                }
                bordered={false}
                hoverable
                style={{ ...cardBaseStyle, backgroundColor: "#fff8e1" }}
                bodyStyle={bodyStyle}
              >
                <p>2000 ROoms</p>
              </Card>
            </Link>
          </Col>
          <Col span={12}>
            <Link href="/admin/course">
              <Card
                title={
                  <div style={titleStyle}>
                    <CalendarOutlined /> course
                  </div>
                }
                bordered={false}
                hoverable
                style={{ ...cardBaseStyle, backgroundColor: "#e0f7fa" }}
                bodyStyle={bodyStyle}
              >
                <p>50 course</p>
              </Card>
            </Link>
          </Col>
        </Row>
        <br />
        <Row gutter={16}>
          <Col span={12}>
            <Link href="/admin/offered-course">
              <Card
                title={
                  <div style={titleStyle}>
                    <ClusterOutlined /> Offered-courses
                  </div>
                }
                bordered={false}
                hoverable
                style={{ ...cardBaseStyle, backgroundColor: "#ffebee" }}
                bodyStyle={bodyStyle}
              >
                <p>100 Courses</p>
              </Card>
            </Link>
          </Col>
          <Col span={12}>
            <Link href="/admin/notice">
              <Card
                title={
                  <div style={titleStyle}>
                    <CalendarOutlined /> Notice
                  </div>
                }
                bordered={false}
                hoverable
                style={{ ...cardBaseStyle, backgroundColor: "#f3e5f5" }}
                bodyStyle={bodyStyle}
              >
                <p>ALL notices</p>
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AdminPage;
