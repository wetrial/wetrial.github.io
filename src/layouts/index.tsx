import { Layout, Menu } from 'antd';
import { connect } from 'dva';
import React from 'react';
import { Link } from 'umi';
import style from './style.less';

const { Header, Content, Footer } = Layout;

@connect(({ base }) => ({ base }))
export default class extends React.PureComponent<any> {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    dispatch({
      type: 'base/getApps',
    });
  }

  render() {
    const { location, children, base } = this.props;
    const { name, apps } = base;
    const selectKey = `/${location.pathname.split('/')[1]}`;
    return (
      <Layout className={style.layout}>
        <Header style={{ zIndex: 200 }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            selectedKeys={[selectKey]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="/">
              <Link to="/">{name}</Link>
            </Menu.Item>
            {apps.map(app => {
              return (
                <Menu.Item key={app.base}>
                  <Link to={app.base}>{app.name}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Header>
        <Content className={style.content}>
          {/* 加载master pages，此处判断较为简单，实际需排除所有子应用base打头的路径 */}
          {selectKey === '/' ? children : null}
          {apps.length ? <div id="root-subapp-container" /> : null}
        </Content>
        <Footer className={style.footer}>Wetrial Dev ©2020 Created by Wetrial</Footer>
      </Layout>
    );
  }
}
