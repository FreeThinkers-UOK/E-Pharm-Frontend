import React, { useEffect } from 'react';
import { Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { getAllUsers } from '../../redux/_nfc/users/actionCreator';

const UserList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const users = useSelector(state => state.users.userList);
  console.log({users})
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstname',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastname',
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
      key: 'email',
    },
    // {
    //   title: 'Role',
    //   dataIndex: 'role',
    //   key: 'role',
    // },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];
  const dataSource = [];
  users.map(user => {
    const { id, firstName, lastName, email } = user;
    // const roleName = user.role.name;
    return dataSource.push({
      key: id,
      id,
      firstName,
      lastName,
      email,
      // role: roleName,
      action: (
        <div className="table-actions">
          <>
            {/* <Button className="btn-icon" type="primary" to="#" shape="circle">
              <FeatherIcon icon="eye" size={16} />
            </Button> */}
            <Button className="btn-icon" type="info" to="#" shape="circle">
              <FeatherIcon icon="edit" size={16} />
            </Button>
            {/* <Button
              className="btn-icon"
              type="danger"
              to="#"
              shape="circle"
              // onClick={() => showDeleteModal(product.id)}
            >
              <FeatherIcon icon="trash-2" size={16} />
            </Button> */}
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
export default UserList;
