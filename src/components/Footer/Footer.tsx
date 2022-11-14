/*
 * @Date: 2022-11-14 20:35:28
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \react-app-ts\src\components\Footer\Footer.tsx
 */
import React from 'react'
import { Layout, Typography } from "antd";
export const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <Typography.Title level={3} style={{ textAlign: "center" }}>
        版权所有 @ React 旅游网
      </Typography.Title>
    </Layout.Footer>
  )
}