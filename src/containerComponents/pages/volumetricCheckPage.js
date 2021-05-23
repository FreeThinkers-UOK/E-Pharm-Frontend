import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { Main } from '../../container/styled';
import { Button } from '../../components/buttons/buttons';
import { PageHeader } from '../../components/page-headers/page-headers';

const VolumetricPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
  }, [dispatch]);
  const { productCategories } = useSelector(state => state.productCategory);
  const { products } = useSelector(state => state.product);

  const [state, setState] = useState({
    visible: false,
    title: '',
    action: '',
    modalType: 'primary',
    update: {},
  });
  const showCreateModal = () => {
    setState({
      ...state,
      visible: true,
      action: 'ADD',
      update: {},
      title: 'Create Product',
    });
  };
  const showEditModal = editData => {
    setState({
      ...state,
      visible: true,
      action: 'EDIT',
      update: editData,
      title: 'Edit Product',
    });
  };
  const showDeleteModal = id => {
    setState({
      ...state,
      visible: true,
      action: 'DELETE',
      title: 'Delete Product',
      deleteId: id,
    });
  };
  const onCancel = () => {
    setState({
      ...state,
      visible: false,
      action: null,
    });
  };

  const handleOk = (values, form) => {
    state.action === 'ADD' ? console.log({ newObj:values }) : console.log({ editObj: values });
    onCancel();
    form.resetFields();
  };
  const handleDelete = id => {
    console.log(id);
    setState({
      ...state,
      visible: false,
      action: null,
    });
  };

  return (
    <>
      <PageHeader
        ghost
        title="Product Page"
        buttons={[
          <div key="6" className="page-header-actions">
            <Button size="small" key="4" type="primary" onClick={showCreateModal}>
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      
      <Main className="page-body">
        <Row gutter={25}>
          <Col lg={24} xs={24}>
            
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default VolumetricPage;
