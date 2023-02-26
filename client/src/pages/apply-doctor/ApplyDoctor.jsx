import { Col, Form, Input, message, Row, TimePicker } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { hideLoading, showLoading } from "../../redux/features/AlertSlice";

import './applyDoctor.css';

const ApplyDoctor = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //submit handler
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      console.log('Success:', values);
      // const res = await axios.post("/api/v1/users/register", values);
      // dispatch(hideLoading());
      // if (res.data.success) {
      //   message.success("Registration success");
      //   navigate("/login");
      // } else {
      //   message.error(res.data.message);
      // }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout>
      <div className="card">
        <div className="card-header text-center">
          <h3>
            Apply Doctor
          </h3>
        </div>
        <div className="card-body">
          <Form
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <h4>
              Personal Details :
            </h4>
            <br />
            <Row gutter={20}>
              <Col xs={24} md={24} lg={8}>
                <Form.Item
                  label="First name"
                  name="firstName"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please input first name"
                    }
                  ]}
                >
                  <Input type="text" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={8}>
                <Form.Item
                  label="Last name"
                  name="lastName"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please input last name"
                    }
                  ]}
                >
                  <Input type="text" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={8}>
                <Form.Item
                  label="Phone"
                  name="phone"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please input phone name"
                    }
                  ]}
                >
                  <Input type="text" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={8}>
                <Form.Item
                  label="Email"
                  name="email"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please input email"
                    }
                  ]}
                >
                  <Input type="email" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={8}>
                <Form.Item
                  label="Website"
                  name="website"
                >
                  <Input type="text" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={8}>
                <Form.Item
                  label="Address"
                  name="address"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please input address"
                    }
                  ]}
                >
                  <Input type="text" />
                </Form.Item>
              </Col>
            </Row>
            <h4>
              Professional Details :
            </h4>
            <br />
            <Row gutter={20}>
              <Col xs={24} md={24} lg={8}>
                <Form.Item
                  label="Specialization"
                  name="specialization"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please input specialization"
                    }
                  ]}
                >
                  <Input type="text" />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={8}>
                <Form.Item
                  label="Specialization"
                  name="specialization"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please input specialization"
                    }
                  ]}
                >
                  <Input type="text" />
                </Form.Item>
              </Col>

              <Col xs={24} md={24} lg={8}>
                <Form.Item
                  label="Experience"
                  name="experience"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please input experience"
                    }
                  ]}
                >
                  <Input type="text" />
                </Form.Item>
              </Col>


              <Col xs={24} md={24} lg={8}>
                <Form.Item
                  label="Fees Per Consultation"
                  name="feesPerConsultation"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please input fees per consultation"
                    }
                  ]}
                >
                  <Input type="text" />
                </Form.Item>
              </Col>

              <Col xs={24} md={24} lg={8}>
                <Form.Item
                  label="Work Timings"
                  name="timings"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please input timings"
                    }
                  ]}
                >
                  <TimePicker.RangePicker format="HH:mm" />
                </Form.Item>
              </Col>
            </Row>
            <div className="d-flex justify-content-end">
              <button className="btn btn-success" type="submit">Submit</button>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  )
}

export default ApplyDoctor;