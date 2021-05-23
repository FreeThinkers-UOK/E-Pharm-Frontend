import React, { useEffect } from 'react';
import { Input, Form } from 'antd';
import PropTypes from 'prop-types';
import { BasicFormWrapper } from '../../container/styled';
import { Button } from '../../components/buttons/buttons';
import { AddUser } from '../../container/pages/style';
import { Modal } from '../../components/modals/antd-modals';

const CategoryModal = ({ state, onCancel, handleOk, handleDelete }) => {
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
        <div className="project-modal">
          <AddUser>
            <BasicFormWrapper>
              {action !== 'DELETE' ? (
                <Form form={form} name="contact" onFinish={values => handleOk(values, form)}>
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
                        message: 'Please input Category Name!',
                      },
                    ]}
                  >
                    <Input placeholder="Input Name" />
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
CategoryModal.propTypes = {
  state: PropTypes.object,
  onCancel: PropTypes.func,
  handleOk: PropTypes.func,
  handleDelete: PropTypes.func,
};
export default CategoryModal;
