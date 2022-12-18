import { Card, Space, Typography } from 'antd'

export const HomePage = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Card title="Home page title">
        <Typography.Text>
          测试文本 - test text - ABCD - 1234567890
        </Typography.Text>
      </Card>
      <Card title="Home page title">
        <Typography.Text>
          测试文本 - test text - ABCD - 1234567890
        </Typography.Text>
      </Card>
    </Space>
  )
}
