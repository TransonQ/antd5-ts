import { Layout, theme } from 'antd'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { SiderMenu } from './SiderMenu'
import styles from './styles.module.scss'

export const Main = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout className={styles.layout}>
      <Header />
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
