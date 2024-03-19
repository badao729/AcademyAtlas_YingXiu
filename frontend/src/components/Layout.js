import React from 'react';
import Header from './Header/Header'; // 假设你有一个Header组件
import Footer from './Footer/Footer'; // 假设你有一个Footer组件

const Layout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main> {/* 主内容区域 */}
    <Footer />
  </div>
);

export default Layout;