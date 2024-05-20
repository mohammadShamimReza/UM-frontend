"use client";

import { Button, Form, Input } from "antd";

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
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values from form: ", values);
    // Handle form submission logic here (e.g., send data to the server)
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
