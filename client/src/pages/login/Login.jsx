import React, { useState, useEffect } from 'react'
import { Button, Form, Input, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Spinner from '../../components/Spinner';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post('/api/v1/users/login', values);
      setLoading(false);
      message.success("Login Success");
      localStorage.setItem('user', JSON.stringify({ ...data.data, password: '' }));
      navigate("/");
    } catch (err) {
      setLoading(false);
      message.error("Something went wrong!")
    }
  };
  const onFinishFailed = (errorInfo) => {

    console.log('Failed:', errorInfo);
  };


  return (
    <>
      <div className="container">
        <div className="card col-sm-6 offset-sm-3 mt-5">
          <div className="card-header text-center">Login Form</div>
          <div className="card-body">
            <Form layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{ remember: true }}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  }
                ]}
              >
                <Input
                  type="email"
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input
                  type="password"

                />
              </Form.Item>
              <div className="d-flex justify-content-between">
                <Link
                  to="/register">
                  Not register yet? click here to register
                </Link>
                {
                  loading
                    ?
                    <Spinner />
                    :
                    <Form.Item>
                      <Button
                        className="btn btn-warning"
                        htmlType="submit">
                        login
                      </Button>
                    </Form.Item>
                }
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login