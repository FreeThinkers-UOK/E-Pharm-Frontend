import React, { useState } from 'react';
import { Row, Col, Form, Input, Upload, Select } from 'antd';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { BasicFormWrapper } from '../common/styled';
import { Button } from '../../components/buttons/buttons';
import Heading from '../../components/heading/heading';

const { Option } = Select;
const AddUser = () => {
  const roles = [
    { id: 1, name: 'admin' },
    { id: 2, name: 'pharmacist' },
    { id: 3, name: 'assistantpharmacist' },
    { id: 4, name: 'cashier' },
    { id: 5, name: 'storekeeper' },
    { id: 6, name: 'deliveryman' },
  ];

  const [form] = Form.useForm();
  const handleSubmit = values => {
    console.log({ values });
  };

  return (
    <Row justify="center">
      <Col xl={10} md={16} xs={24}>
        <div className="user-info-form">
          <BasicFormWrapper>
            <Form style={{ width: '100%' }} form={form} name="info" onFinish={handleSubmit}>
              <Heading className="form-title" as="h4">
                User Creation
              </Heading>

              <figure className="photo-upload align-center-v">
                <img src={require('../../static/img/avatar/profileImage.png')} alt="" />
                <figcaption>
                  <Upload>
                    <Link className="btn-upload" to="#">
                      <FeatherIcon icon="camera" size={16} />
                    </Link>
                  </Upload>
                  <div className="info">
                    <Heading as="h4">Profile Photo</Heading>
                  </div>
                </figcaption>
              </figure>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ message: 'Please input your First Name!', required: false }]}
              >
                <Input placeholder="your First Name" />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ message: 'Please input your Last Name!', required: false }]}
              >
                <Input placeholder="your Last Name" />
              </Form.Item>
              <Form.Item name="role" label="Role" rules={[{ message: 'Please select role!', required: true }]}>
                <Select style={{ width: '100%' }} placeholder="Select Role">
                  <Option value="">Please Select Role</Option>
                  {roles.map(role => (
                    <Option value={role.id} key={role.id}>
                      {role.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  { message: 'Please Enter valid email!', type: 'email' },
                  { message: 'Please Enter your email!', required: true },
                ]}
              >
                <Input placeholder="name@example.com" />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[{ message: 'Please Enter Password!', required: true }]}
              >
                <Input placeholder="" />
              </Form.Item>
              <Form.Item
                name="confirmPassword"
                label="Confirm Password"
                rules={[{ message: 'Please Enter Confirm Password!', required: true }]}
              >
                <Input placeholder="" />
              </Form.Item>
              <Form.Item>
                <div className="add-user-bottom text-right">
                  <Button
                    className="ant-btn ant-btn-light"
                    onClick={() => {
                      return form.resetFields();
                    }}
                  >
                    Reset
                  </Button>
                  <Button htmlType="submit" type="primary">
                    Save
                    {/* <Link to="info">Save & Next</Link> */}
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </BasicFormWrapper>
        </div>
      </Col>
    </Row>
  );
};

export default AddUser;
