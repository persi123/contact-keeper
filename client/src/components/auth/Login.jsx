import React, { useState, useContext, useEffect } from "react";
import alertContext from "../../context/alert/alertContext";
import authContext from "../../context/auth/authContext";
import { Form, Input, Button } from "antd";

const Login = (props) => {
  const AlertContext = useContext(alertContext);
  const AuthContext = useContext(authContext);

  const { setAlert } = AlertContext;
  const { loginUser, error, clearErrors, isAuthenticated } = AuthContext;
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "Invalid credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onFinish = (values) => {
    console.log(values);
    loginUser(values);
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
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button
            // type="primary"
            htmlType="submit"
            //  value={current ? "Update Contact" : "Add Contact"}
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
    </div>
  );
};

export default Login;
