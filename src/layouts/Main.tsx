import { Layout, theme } from 'antd'
import React, { useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { SiderMenu } from './SiderMenu'
import styles from './styles.module.scss'

export const Main = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const contentStyle = useMemo<React.CSSProperties>(
    () => ({
      padding: "16px 16px",
      minHeight: 280,
      overflowY: 'auto',
      overflowX: 'hidden',
    }),
    []
  )

  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout>
        <Layout.Sider
          width={200}
          style={{
            background: colorBgContainer,
            overflow: 'auto',
          }}
        >
          <SiderMenu />
        </Layout.Sider>
        <Layout>
          <Layout.Content style={contentStyle}>
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
