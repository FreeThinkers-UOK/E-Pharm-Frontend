import React, { useState } from 'react';
import { Row, Col, Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import { BasicFormWrapper } from '../common/styled';
import { Button } from '../../components/buttons/buttons';
import Heading from '../../components/heading/heading';
import AvailableProductForm from '../supplier/availableProductForm';

const { TextArea } = Input;
const UserInfo = () => {
  const [state, setState] = useState({
    values: '',
  });
  const [form] = Form.useForm();
  const handleSubmit = values => {
    setState({ ...state, values });
  };

  return (
    <Row justify="center">
      <Col xl={10} md={16} xs={24}>
        <div className="user-info-form">
          <BasicFormWrapper>
            <Form style={{ width: '100%' }} form={form} name="info" onFinish={handleSubmit}>
              <Heading className="form-title" as="h4">
                Personal Information
              </Heading>
              <Form.Item
                label="Contact Number"
                name="contactNo"
                rules={[{ message: 'Please enter your Contact Number!', type: 'number' }]}
              >
                <Input placeholder="Enter Contact Number" />
              </Form.Item>
              <Form.Item
                label="Country"
                name="country"
                rules={[{ message: 'Please enter your Contact Number!', type: 'number' }]}
              >
                <Input placeholder="Enter Country" />
              </Form.Item>
              <Form.Item label="Address" name="address" rules={[{ message: 'Please enter Address!', type: 'text' }]}>
                <TextArea placeholder="Enter Country" />
              </Form.Item>
              <AvailableProductForm />
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
                    <Link to="info">Save & Next</Link>
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

export default UserInfo;
