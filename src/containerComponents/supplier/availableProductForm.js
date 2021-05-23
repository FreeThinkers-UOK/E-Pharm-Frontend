import React, { useEffect, useState } from 'react';
import { Form, Input, Row, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { BasicFormWrapper } from '../common/styled';
import Heading from '../../components/heading/heading';
import { getAllProducts } from '../../redux/_nfc/products/actionCreator';

const { Option } = Select;
const AvailableProductForm = () => {
  const { products } = useSelector(state => state.product);
  const [form] = Form.useForm();
  const handleSubmit = values => {
    // setState({ ...state, values });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <>
      <BasicFormWrapper>
        <Form style={{ width: '100%' }} form={form} name="info" onFinish={handleSubmit}>
          <Heading className="form-title" as="h4">
            Available Products
          </Heading>
          <Row>
            <Form.Item
              name="product"
              label="Product"
              rules={[{ message: 'Please select product!', required: true }]}
              style={{ marginRight: 15 }}
            >
              <Select style={{ width: '100%' }} placeholder="Select Product">
                <Option value="">Please Select Products</Option>
                {products.map(product => (
                  <Option value={product.id} key={product.id}>
                    {product.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Quantity"
              name="quantity"
              rules={[{ message: 'Please enter Maximum Quantity!', type: 'number' }]}
            >
              <Input placeholder="Enter Country" />
            </Form.Item>
          </Row>
        </Form>
      </BasicFormWrapper>
    </>
  );
};
export default AvailableProductForm;
