"use client";
import ACDepartmentField from "@/components/Forms/ACDepartmentField";
import ACFacultyField from "@/components/Forms/ACFacultyField";
import ACSemesterField from "@/components/Forms/ACSemesterField";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import StudentBasicInfo from "@/components/StudentForms/StudentBasicInfo";
import StudentInfo from "@/components/StudentForms/StudentInfo";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { bloodGroupOptions, genderOptions } from "@/constants/global";
import { useAddStudentWithFormDataMutation } from "@/redux/api/studentApi";
import { Button, Col, Row, message } from "antd";

const CreateStudentPage = () => {
  const [addStudentWithFormData] = useAddStudentWithFormDataMutation();
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <StudentBasicInfo />,
    },
  ];

  const handleStudentSubmit = async (values: any) => {
    // const obj = { ...values };
    // const file = obj["file"];
    // delete obj["file"];
    // const data = JSON.stringify(obj);
    // const formData = new FormData();
    // formData.append("file", file as Blob);
    // formData.append("data", data);
    // message.loading("Creating...");
    console.log(values);
    values.student.profileImage = "http://localhost:800";
    try {
      const res = await addStudentWithFormData(values);
      if (!!res) {
        message.success("Student created successfully!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const base = "admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-student", link: `/${base}/manage-student` },
        ]}
      />
      <h1 style={{ margin: "10px 0px" }}>Create Student</h1>
      <Form submitHandler={handleStudentSubmit}>
        {/* faculty information */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Faculty information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            {" "}
            <Col
              className="gutter-row"
              span={6}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput
                type="text"
                name="student.firstName"
                size="large"
                label="First Name"
                required={true}
              />
            </Col>
            <Col
              className="gutter-row"
              span={6}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput
                type="text"
                name="student.middleName"
                size="large"
                label="Middle Name"
                required={true}
              />
            </Col>
            <Col
              className="gutter-row"
              span={6}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput
                type="text"
                name="student.lastName"
                size="large"
                label="Last Name"
                required={true}
              />
            </Col>
            <Col
              className="gutter-row"
              span={6}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput
                type="password"
                name="student.password"
                size="large"
                label="Password"
                required={true}
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <ACDepartmentField
                name="student.academicDepartmentId"
                label="Academic Department"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <ACFacultyField
                name="student.academicFacultyId"
                label="Academic Faculty"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <ACSemesterField
                name="student.academicSemesterId"
                label="Academic Semester"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormSelectField
                size="large"
                name="student.gender"
                options={genderOptions}
                label="Gender"
                placeholder="Select"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            ></Col>
          </Row>
          <br />
          <br />
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                type="email"
                name="student.email"
                label="Email address"
                size="large"
                required={true}
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                name="student.contactNo"
                label="Contact no."
                size="large"
                required={true}
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput
                name="student.emergencyContactNo"
                label="Emergency contact no."
                size="large"
                required={true}
              />
            </Col>

            <Col span={12} style={{ margin: "10px 0" }}>
              <FormDatePicker
                name="student.dateOfBirth"
                label="Date of birth"
                size="large"
              />
            </Col>

            <Col span={12} style={{ margin: "10px 0" }}>
              <FormSelectField
                name="student.bloodGroup"
                label="Blood group"
                options={bloodGroupOptions}
                size="large"
              />
            </Col>
          </Row>
        </div>
        <br />
        {/* basic information  */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Basic information
          </p>
        </div>
        <Button htmlType="submit">submit</Button>
      </Form>
    </div>
  );
};

export default CreateStudentPage;
