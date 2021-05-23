import React from 'react';
import { Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';

const ProductList = ({ showEditModal, showDeleteModal, products }) => {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];
  const dataSource = [];
  products.map(product => {
    const { id, name, category, price } = product;
    return dataSource.push({
      key: id,
      id,
      name,
      price,
      category: category.name,
      action: (
        <div className="table-actions">
          <>
            {/* <Button className="btn-icon" type="primary" to="#" shape="circle">
              <FeatherIcon icon="eye" size={16} />
            </Button> */}
            <Button className="btn-icon" type="info" to="#" shape="circle" onClick={() => showEditModal(product)}>
              <FeatherIcon icon="edit" size={16} />
            </Button>
            <Button
              className="btn-icon"
              type="danger"
              to="#"
              shape="circle"
              onClick={() => showDeleteModal(product.id)}
            >
              <FeatherIcon icon="trash-2" size={16} />
            </Button>
          </>
        </div>
      ),
    });
  });
  return (
    <>
      <Cards title="Basic Usage">
        <Table className="table-responsive" pagination={false} dataSource={dataSource} columns={columns} />
      </Cards>
    </>
  );
};
ProductList.propTypes = {
  showEditModal: PropTypes.func,
  showDeleteModal: PropTypes.func,
  products: PropTypes.array,
};
export default ProductList;
