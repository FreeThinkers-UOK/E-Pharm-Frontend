import React, { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { AuthWrapper } from './style';
import { login } from '../../../../redux/authentication/actionCreator';
// import { Checkbox } from '../../../../components/checkbox/checkbox';
import Heading from '../../../../components/heading/heading';

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {isLoading, error, isLogin} = useSelector(state => state.auth);
  const [form] = Form.useForm();
  // const [state, setState] = useState({
  //   checked: null,
  // });

  const handleSubmit = values => {
    dispatch(login(values));
    isLogin && history.push('/admin');
  };

  // const onChange = checked => {
  //   setState({ ...state, checked });
  // };

  return (
    <AuthWrapper>
      {/* <p className="auth-notice">
        Don&rsquo;t have an account? <NavLink to="#">Sign up now</NavLink>
      </p> */}
      <div className="auth-contents">
        <Form name="login" form={form} onFinish={values => handleSubmit(values, form)} layout="vertical">
          <Heading as="h3">Sign in</Heading>
          <Form.Item
            name="email"
            rules={[{ message: 'Please input your username or Email!', required: true }]}
            initialValue="admin@admin.com"
            label="Username or Email Address"
          >
            <Input />
          </Form.Item>
          <Form.Item name="password" initialValue="password" label="Password">
            <Input.Password placeholder="Password" />
          </Form.Item>
          <div className="auth-form-action md-4">
            <NavLink className="forgot-pass-link" to="#">
              Forgot password?
            </NavLink>
          </div>
          <Form.Item>
            <Button className="btn-signin" htmlType="submit" type="primary" size="large">
              {isLoading ? 'Loading...' : 'Sign In'}
            </Button>
          </Form.Item>
          {/* <p className="form-divider">
            <span>Or</span>
          </p>
          <ul className="social-login">
            <li>
              <Link className="google-signup" to="#">
                <img src={require('../../../../static/img/google.png')} alt="" />
              </Link>
            </li>
            <li>
              <Link className="facebook-sign" to="#">
                <FacebookOutlined />
              </Link>
            </li>
            <li>
              <Link className="twitter-sign" to="#">
                <TwitterOutlined />
              </Link>
            </li>
          </ul> */}
        </Form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
