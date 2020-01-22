import React from 'react';
import { createUseStyles } from 'react-jss';
import './App.css';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

const useStyles = createUseStyles({
  root: {
    minHeight: 'calc(100vh - 140px)',
    padding: '25px 50px '
  }
});

const App = () => {

  const classes = useStyles();

  return (
    <Layout>
      <Header>Header</Header>
      <Content className={classes.root}>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  )
};

export default App;
