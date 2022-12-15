import { Button, ConfigProvider, theme } from 'antd'
import './App.css'

// 三套配色算法: 暗色 darkAlgorithm, 亮色 defaultAlgorithm, 紧凑 compactAlgorithm
function App() {
  return (
    <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
      <Button type="primary">Button</Button>
    </ConfigProvider>
  )
}

export default App
