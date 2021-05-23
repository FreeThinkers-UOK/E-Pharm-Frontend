import React, { lazy, Suspense } from 'react';
import { Row, Col, Spin } from 'antd';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import { AddUser } from '../user/style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../common/styled';
import UserInfo from '../user/userInfo';

const AddUserForm = lazy(() => import('../user/addUser'));

const SettingPage = ({ match }) => {
  return (
    <>
      <PageHeader ghost title="Setting Page" />
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
                    <Redirect to={`${match.path}/add-user`} from={`${match.path}`} />
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

SettingPage.propTypes = {
  match: propTypes.object,
};

export default SettingPage;
