import React, { lazy, Suspense } from 'react';
import { Row, Col, Spin } from 'antd';
import { Switch, Route, NavLink, Redirect, Link } from 'react-router-dom';
import propTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import { Main } from '../../container/styled';
import { Button } from '../../components/buttons/buttons';
import { PageHeader } from '../../components/page-headers/page-headers';
import UserList from '../user/userList';
import { Cards } from '../../components/cards/frame/cards-frame';
import { AddUser } from '../user/style';
import UserInfo from '../user/userInfo';

const AddUserForm = lazy(() => import('../user/addUser'));
const UserPage = ({ match }) => {
  return (
    <>
      <PageHeader
        ghost
        title="User Page"
        buttons={[
          <div key="6" className="page-header-actions">
            <Button size="small" key="4" type="primary">
              <Link to={`${match.path}/add-user`}><FeatherIcon icon="plus" size={14} />Create User</Link>
            </Button>
          </div>,
        ]}
      />
      <Main className="page-body">
        <Row gutter={15}>
          <Col xs={24}>
            <AddUser>
              <Cards
                title={
                  <div className="card-nav">
                    <ul>
                      <li>
                        <NavLink to={`${match.path}/add-user`}>
                          <FeatherIcon icon="user" size={14} />
                          Add User
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={`${match.path}/info`}>
                          <FeatherIcon icon="briefcase" size={14} />
                          User Info
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                }
              >
                <Switch>
                  <Suspense
                    fallback={
                      <div className="spin">
                        <Spin />
                      </div>
                    }
                  >
                    <Route exact path={`${match.path}/add-user`} component={AddUserForm} />
                    <Route exact path={`${match.path}/info`} component={UserInfo} />
                    <Route exact path={`${match.path}/list`} component={UserList} />
                    <Redirect to={`${match.path}/list`} from={`${match.path}`} />
                  </Suspense>
                </Switch>
              </Cards>
            </AddUser>
          </Col>
        </Row>
      </Main>
    </>
  );
};
UserPage.propTypes = {
    match: propTypes.object,
  };
export default UserPage;
