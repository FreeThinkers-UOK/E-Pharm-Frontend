import React from 'react';
import { Menu } from 'antd';
import { NavLink, useRouteMatch } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import SubMenu from 'antd/lib/menu/SubMenu';

const MenuItems = ({ darkMode, toggleCollapsed, topMenu }) => {
  const { path } = useRouteMatch();
  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');
  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = keys => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = item => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      theme={darkMode && 'dark'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<FeatherIcon icon="more-vertical" />}
      openKeys={openKeys}
    >
      <Menu.Item key="home" icon={!topMenu && <FeatherIcon icon="home" />}>
        <NavLink onClick={toggleCollapsed} to={`${path}`}>
          Dashboard
        </NavLink>
      </Menu.Item>
      <SubMenu key="product" icon={!topMenu && <FeatherIcon icon="home" />} title="Inventory">
        <Menu.Item key="productCategory">
          <NavLink onClick={toggleCollapsed} to={`${path}/product-category`}>
            Medicine Category
          </NavLink>
        </Menu.Item>
        <Menu.Item key="product">
          <NavLink onClick={toggleCollapsed} to={`${path}/product`}>
            Medicine
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="orders" icon={!topMenu && <FeatherIcon icon="home" />} title="Order">
        <Menu.Item key="productCategory">
          <NavLink onClick={toggleCollapsed} to={`${path}/order`}>
            Order
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="wastage" icon={!topMenu && <FeatherIcon icon="home" />}>
        <NavLink onClick={toggleCollapsed} to={`${path}/wastage`}>
          POS
        </NavLink>
      </Menu.Item>
      <Menu.Item key="supplier" icon={!topMenu && <FeatherIcon icon="home" />}>
        <NavLink onClick={toggleCollapsed} to={`${path}/supplier`}>
          Supplier
        </NavLink>
      </Menu.Item>
      <Menu.Item key="users" icon={!topMenu && <FeatherIcon icon="home" />}>
        <NavLink onClick={toggleCollapsed} to={`${path}/users`}>
          Users
        </NavLink>
      </Menu.Item>
      <Menu.Item key="setting" icon={!topMenu && <FeatherIcon icon="home" />}>
        <NavLink onClick={toggleCollapsed} to={`${path}/setting`}>
          Setting
        </NavLink>
      </Menu.Item>
      <Menu.Item key="report" icon={!topMenu && <FeatherIcon icon="home" />}>
        <NavLink onClick={toggleCollapsed} to={`${path}/report`}>
          Report
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
