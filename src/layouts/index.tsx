import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Layout } from 'antd';

import NavHeader from 'layouts/header';
import Sider from 'layouts/sider';
import Footer from 'layouts/footer';

const { Content } = Layout;

const MainLayout: FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSider = (isCollapsed: boolean) => {
    if (typeof isCollapsed === 'boolean') {
      setCollapsed(isCollapsed);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <Layout className="mainlayout">
      <Sider toggleSider={toggleSider} collapsed={collapsed} />
      <Layout className="mainlayout__layout">
        <NavHeader toggleSider={toggleSider} collapsed={collapsed} />
        <Content className="mainlayout__content">{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default observer(MainLayout);
