import React, {useState} from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import { Layout, Icon } from 'antd';
import UserListChats from './components/UserListChats';
import Chat from './components/Chat';

const { Content } = Layout;

const useStyles = createUseStyles({
  root: {
    minHeight: '100vh',
    padding: '43px 50px',
    width: '100%',
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    top: '15px',
    left: '10px',

    '& svg':{
      width: '20px',
      height: '20px'
    }
  },
});

const App = () => {

  const classes = useStyles();

  const [isOpenSider, setIsOpenSider]= useState(false)

  return (
    <Layout>
      <UserListChats state={isOpenSider}/>
      <Content className={classNames(classes.root)}>
        <Icon
          className={classNames(classes.icon, `trigger`)}
          type={isOpenSider ? 'menu-unfold' : 'menu-fold'}
          onClick={() => setIsOpenSider(!isOpenSider)}
        />
        <Chat />
      </Content>
    </Layout>
  )
};

export default App;
