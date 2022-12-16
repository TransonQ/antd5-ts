import { Layout, theme } from 'antd'
import styles from './styles.module.scss'

export const Header = () => {
  const {
    token: { colorBgContainer, colorBorder },
  } = theme.useToken()

  return (
    <Layout.Header
      className={styles.header}
      style={{
        background: colorBgContainer,
        borderBottom: `1px solid ${colorBorder}`,
      }}
    >
      <div className={styles['header-box']}>
        <div className={styles['header-logo']} />
        123
      </div>
    </Layout.Header>
  )
}
