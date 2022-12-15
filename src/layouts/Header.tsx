import { Layout, Menu, MenuProps, theme } from 'antd'

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}))

export const Header = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout.Header style={{ background: colorBgContainer, paddingInline: 0 }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
      />
    </Layout.Header>
  )
}
