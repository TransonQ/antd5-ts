import { Avatar, Button, Layout, Space, theme } from 'antd'
import { useAtom } from 'jotai'
import { darkModeAtom } from '../App'
import styles from './styles.module.scss'
export const Header = () => {
  const {
    token: { colorBgContainer, colorBorder },
  } = theme.useToken()
  const [isDarkMode, setIsDarkMode] = useAtom(darkModeAtom)

  const changeTheme = () => {
    setIsDarkMode((mode) => !mode)
  }

  return (
    <Layout.Header
      style={{
        background: colorBgContainer,
        borderBottom: `1px solid ${colorBorder}`,
        padding: '0 24px',
      }}
    >
      <div className={styles['header-box']}>
        <div className={styles['header-logo']} />
        <div className={styles['header-right']}>
          <Space align="center">
            <Button shape="circle" onClick={changeTheme}>
              {isDarkMode ? '光' : '暗'}
            </Button>
            <Avatar />
          </Space>
        </div>
      </div>
    </Layout.Header>
  )
}
