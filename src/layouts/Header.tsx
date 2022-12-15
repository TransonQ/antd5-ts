import { Layout, theme } from 'antd'
import styles from './styles.module.scss'

export const Header = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout.Header
      className={styles.header}
      style={{ background: colorBgContainer }}
    >
      <div className={styles['header-logo']} />
      123
    </Layout.Header>
  )
}
