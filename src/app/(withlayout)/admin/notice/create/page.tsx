"use client";

import { useAddNoticeMutation } from "@/redux/api/noticeApi";
import { Button, Form, Input, message } from "antd";

const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 14,
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    span: 14,
    offset: 4,
  },
};

const NoticeForm = () => {
  const [addNotice] = useAddNoticeMutation();

  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    message.loading("Creating.....");
    try {
      const res = await addNotice(values).unwrap();
      console.log(res);
      if (res?.id) {
        message.success("Notice added successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f2f5" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2em",
          color: "#1890ff",
          marginBottom: "20px",
        }}
      >
        Create Notice
      </h1>
      <Form
        {...formItemLayout}
        form={form}
        name="create-notice"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title of the notice!",
            },
          ]}
        >
          <Input placeholder="Enter the title" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please input the description of the notice!",
            },
          ]}
        >
          <Input.TextArea rows={4} placeholder="Enter the description" />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NoticeForm;
