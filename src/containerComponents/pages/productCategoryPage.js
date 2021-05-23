import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { Main } from '../../container/styled';
import { Button } from '../../components/buttons/buttons';
import { PageHeader } from '../../components/page-headers/page-headers';
import ProductCategoryList from '../productCategory/ProductCategoryList';
import CategoryModal from '../productCategory/productCategoryModal';
import {
  createProductCategory,
  getAllProductCategories,
  editProductCategory,
} from '../../redux/_nfc/productCategory/actionCreator';

const ProductCategoryPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductCategories());
  }, [dispatch]);
  const { productCategories } = useSelector(state => state.productCategory);
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
      title: 'Create Medicine Category',
    });
  };
  const showEditModal = editData => {
    setState({
      ...state,
      visible: true,
      action: 'EDIT',
      update: editData,
      title: 'Edit Medicine Category',
    });
  };
  const showDeleteModal = id => {
    setState({
      ...state,
      visible: true,
      action: 'DELETE',
      title: 'Delete Medicine Category',
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
    if (state.action === 'ADD') {
      const obj = { categoryName: values.name };
      dispatch(createProductCategory(obj));
    }
    if (state.action === 'EDIT') {
      const editObj = {
        id: values.id,
        categoryName: values.name,
      };
      dispatch(editProductCategory(editObj));
    }
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
        title="Medicine Category Page"
        buttons={[
          <div key="6" className="page-header-actions">
            <Button size="small" key="4" type="primary" onClick={showCreateModal}>
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      {state.visible && (
        <CategoryModal
          state={state}
          onCancel={onCancel}
          handleOk={(values, form) => handleOk(values, form)}
          handleDelete={id => handleDelete(id)}
        />
      )}
      <Main className="page-body">
        <Row gutter={50}>
          <Col lg={24} xs={24}>
            <ProductCategoryList
              showEditModal={obj => showEditModal(obj)}
              productCategories={productCategories}
              showDeleteModal={id => showDeleteModal(id)}
            />
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default ProductCategoryPage;
