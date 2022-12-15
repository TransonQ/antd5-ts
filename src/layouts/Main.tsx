import { Layout, Menu, MenuProps, theme } from 'antd'
import { Outlet } from 'react-router-dom'
import { SiderMenu } from './SiderMenu'
import styles from './styles.module.scss'

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}))

export const Main = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout className={styles.layout}>
      <Layout.Header style={{ background: colorBgContainer, paddingInline: 0 }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
        />
      </Layout.Header>
      {/* <Header /> */}
      <Layout>
        <Layout.Sider
          width={200}
          style={{ background: colorBgContainer, overflow: 'auto' }}
        >
          <SiderMenu />
        </Layout.Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Layout.Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
