import React from 'react';
import { createUseStyles } from 'react-jss';
import { Layout, Menu, Icon } from 'antd';

const { Sider} = Layout;

const useStyles = createUseStyles({
  root: {
    minHeight: 'calc(100vh - 140px)',
    padding: '50px '
  }
});

const UserListChats = ({state}) => {

  // const classes = useStyles();

  return (
    <Sider trigger={null} collapsible collapsed={state}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span>user 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user" />
          <span>user 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="user" />
          <span>user 3</span>
        </Menu.Item>
      </Menu>
    </Sider>
  )
};

export default UserListChats;
