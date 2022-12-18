import { ConfigProvider, theme } from 'antd'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './configs/routes'

const router = createBrowserRouter(routes)

function App() {
  const [isDarkMode] = useAtom(darkModeAtom)
  const DarkModeConfig = useMemo(
    () => ({
      // 三套配色算法: 暗色 darkAlgorithm, 亮色 defaultAlgorithm, 紧凑 compactAlgorithm
      algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    }),
    [isDarkMode]
  )

  return (
    <ConfigProvider theme={{ ...DarkModeConfig }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export const darkModeAtom = atomWithStorage('antd-darkMode', true)

export default App
