import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { Main } from '../../container/styled';
import { Button } from '../../components/buttons/buttons';
import { PageHeader } from '../../components/page-headers/page-headers';
import ProductList from '../product/ProductList';
import ProductModal from '../product/productModal';
import { getAllProductCategories } from '../../redux/_nfc/productCategory/actionCreator';
import { createProduct, editProduct, getAllProducts } from '../../redux/_nfc/products/actionCreator';

const ProductPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductCategories());
    dispatch(getAllProducts());
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
      title: 'Create Medicine',
    });
  };
  const showEditModal = editData => {
    setState({
      ...state,
      visible: true,
      action: 'EDIT',
      update: editData,
      title: 'Edit Medicine',
    });
  };
  const showDeleteModal = id => {
    setState({
      ...state,
      visible: true,
      action: 'DELETE',
      title: 'Delete Medicine',
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
      const createObj = {
        name: values.name,
        categoryId: values.categoryId,
      };
      dispatch(createProduct(createObj));
    }
    if (state.action === 'EDIT') {
      const editObj = {
        id: values.id,
        name: values.name,
        categoryId: values.categoryId,
      };
      dispatch(editProduct(editObj));
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
        title="Medicine Page"
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
        <ProductModal
          state={state}
          onCancel={onCancel}
          handleOk={(values, form) => handleOk(values, form)}
          handleDelete={id => handleDelete(id)}
          productCategories={productCategories}
        />
      )}
      <Main className="page-body">
        <Row gutter={25}>
          <Col lg={24} xs={24}>
            <ProductList
              showEditModal={obj => showEditModal(obj)}
              products={products}
              showDeleteModal={id => showDeleteModal(id)}
            />
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default ProductPage;
