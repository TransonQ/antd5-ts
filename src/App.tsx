import { ConfigProvider } from 'antd'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './configs/routes'

const router = createBrowserRouter(routes)

// 三套配色算法: 暗色 darkAlgorithm, 亮色 defaultAlgorithm, 紧凑 compactAlgorithm
function App() {
  return (
    <ConfigProvider >
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
