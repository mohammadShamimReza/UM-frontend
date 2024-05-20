"use client";
import { FC } from "react";
import { Button, Col, Row, message } from "antd";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useUpdateMarksMutation } from "@/redux/api/studentEnrollCourseMarkApi";

interface UpdateMarksPageProps {
  searchParams: {
    examType?: string;
    marks?: number;
    academicSemesterId?: string;
    studentId?: string;
    courseId?: string;
    offeredCourseSectionId?: string;
  };
}

const UpdateMarksPage: FC<UpdateMarksPageProps> = ({ searchParams }) => {
  const {
    examType,
    marks,
    academicSemesterId,
    studentId,
    courseId,
    offeredCourseSectionId,
  } = searchParams;

  const [updateMarks] = useUpdateMarksMutation();

  const onSubmit = async (values: { marks: number }) => {
    try {
      const res = await updateMarks({
        ...values,
        academicSemesterId,
        studentId,
        courseId,
        offeredCourseSectionId,
        examType,
      }).unwrap();
      if (res) {
        message.success("Marks updated");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues = {
    marks,
  };

  return (
    <>
      <UMBreadCrumb
        items={[
          { label: "faculty", link: "/faculty" },
          { label: "courses", link: "/faculty/courses" },
          { label: "students", link: "/faculty/courses/student" },
          { label: "result", link: "/faculty/student-result" },
        ]}
      />
      <ActionBar title="Update mark" />
      <Form defaultValues={defaultValues} submitHandler={onSubmit}>
        <p>Exam type: {examType}</p>
        <Row>
          <Col span={10} style={{ margin: "10px 0px" }}>
            <FormInput name="marks" label="Marks" />
          </Col>
          <Col span={24}>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default UpdateMarksPage;
