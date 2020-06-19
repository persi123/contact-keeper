import React, { useState, useContext, useEffect } from "react";
import contactContext from "../../context/contact/contactContext";
import { Form, Input, Button, Checkbox, Radio } from "antd";
import styled from "styled-components";

// const Button = styled.button`
// borderRadius: 12px,
// backgroundColor: #74cf4e,
// color: white,
// border: 0,
// width: "75px,
// `;

const ContactForm = (props) => {
  const ContactContext = useContext(contactContext);
  const { addContact, current, clearCurrent, updateContact } = ContactContext;
  const [form] = Form.useForm();
  useEffect(() => {
    if (current !== null) {
      console.log(current);
      form.setFieldsValue({
        name: current.name,
        email: current.email,
        phone: current.phone,
        type: current.type,
      });
    } else {
      form.setFieldsValue({
        name: "",
        email: "",
        phone: "",
        type: "professional",
      });
    }
  }, [ContactContext, current]);

  const clearAll = () => {
    clearCurrent();
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    if (!current) {
      addContact(values);
    } else {
      console.log("Success:", values);
      values.id = current._id;
      updateContact(values);
      clearAll();
    }
  };

  return (
    <Form
      form={form}
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Name"
        name="name"
        type="text"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="email" type="email" name="email">
        <Input />
      </Form.Item>
      <Form.Item label="phone" type="text" name="phone">
        <Input />
      </Form.Item>
      <Form.Item name="type" label="Contact Type">
        <Radio.Group>
          <Radio value="professional">professional</Radio>
          <Radio value="personal">personal</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button
          // type="primary"
          htmlType="submit"
          value={current ? "Update Contact" : "Add Contact"}
          style={{
            borderRadius: "12px",
            backgroundColor: "#74cf4e",
            color: "white",
            border: 0,
            width: "75px",
          }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
