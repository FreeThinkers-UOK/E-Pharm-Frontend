import React, { useEffect } from 'react';
import { Input, Form, Select } from 'antd';
import PropTypes from 'prop-types';
import { BasicFormWrapper } from '../../container/styled';
import { Button } from '../../components/buttons/buttons';
import { AddUser } from '../../container/pages/style';
import { Modal } from '../../components/modals/antd-modals';

const { Option } = Select;

const ProductModal = ({ state, onCancel, handleOk, handleDelete, productCategories }) => {
  const { modalType, title, visible, update, action } = state;
  const [form] = Form.useForm();
  const handleCancel = () => {
    onCancel();
  };
  useEffect(() => {
    if (action === 'EDIT') {
      form.setFieldsValue(update);
    }
  }, [state]);
  return (
    <>
      <Modal type={modalType} title={title} visible={visible} footer={null} onCancel={handleCancel}>
        <div className="product-modal">
          <AddUser>
            <BasicFormWrapper>
              {action !== 'DELETE' ? (
                <Form form={form} name="product" onFinish={values => handleOk(values, form)}>
                  {action === 'EDIT' && (
                    <Form.Item label="Id" name="id">
                      <Input disabled />
                    </Form.Item>
                  )}
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Please Enter Medicine Name!',
                      },
                    ]}
                  >
                    <Input placeholder="Input Name" />
                  </Form.Item>
                  <Form.Item
                    label="Price"
                    name="price"
                    rules={[
                      {
                        required: true,
                        message: 'Please Enter Price!',
                      },
                    ]}
                  >
                    <Input placeholder="Input Price" />
                  </Form.Item>
                  <Form.Item
                    initialValue={action === 'EDIT' ? update.category.id : ''}
                    name="categoryId"
                    label="Product Category"
                    rules={[
                      {
                        required: true,
                        message: 'Please Select Medicine Category!',
                      },
                    ]}
                  >
                    <Select style={{ width: '100%' }}>
                      <Option value="">Please Select</Option>
                      {productCategories.map(productCategory => (
                        <Option value={productCategory.id} key={productCategory.id}>
                          {productCategory.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Button htmlType="submit" size="default" type="primary" key="submit">
                    Save
                  </Button>
                </Form>
              ) : (
                <>
                  <p>Do You Have Delete?</p>
                  <Button size="default" type="primary" key="submit" onClick={() => handleDelete(state.deleteId)}>
                    Delete
                  </Button>
                </>
              )}
            </BasicFormWrapper>
          </AddUser>
        </div>
      </Modal>
    </>
  );
};
ProductModal.propTypes = {
  state: PropTypes.object,
  productCategories: PropTypes.array,
  onCancel: PropTypes.func,
  handleOk: PropTypes.func,
  handleDelete: PropTypes.func,
};
export default ProductModal;
