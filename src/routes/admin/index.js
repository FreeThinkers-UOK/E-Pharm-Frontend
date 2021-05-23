import React, { Suspense } from 'react';
import { Spin } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import withAdminLayout from '../../layout/withAdminLayout';
import DashboardPage from '../../containerComponents/pages/dashboardPage';
import ProductPage from '../../containerComponents/pages/productPage';
import ProductCategoryPage from '../../containerComponents/pages/productCategoryPage';
import SupplierPage from '../../containerComponents/pages/supplierPage';
import OrderPage from '../../containerComponents/pages/orderPage';
import WastagePage from '../../containerComponents/pages/wastagePage';
import SettingPage from '../../containerComponents/pages/SettingPage';
import UserPage from '../../containerComponents/pages/userPage';
import VolumetricPage from '../../containerComponents/pages/volumetricCheckPage';

const Admin = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
        <Route exact path={path} component={DashboardPage} />
        <Route path={`${path}/product`} component={ProductPage} />
        <Route path={`${path}/product-category`} component={ProductCategoryPage} />
        <Route path={`${path}/volumatric`} component={VolumetricPage} />
        <Route path={`${path}/supplier`} component={SupplierPage} />
        <Route path={`${path}/order`} component={OrderPage} />
        <Route path={`${path}/wastage`} component={WastagePage} />
        <Route path={`${path}/setting`} component={SettingPage} />
        <Route path={`${path}/users`} component={UserPage} />
      </Suspense>
    </Switch>
  );
};

export default withAdminLayout(Admin);
