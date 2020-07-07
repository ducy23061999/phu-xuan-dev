import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-home"></i>}
            title="Sách"
        >
            <SidebarMenu.Item title="Quản lí sách" to='/dashboards/sach' exact />
            <SidebarMenu.Item title="Quản lí vị trí sách" to='/dashboards/vitri' exact />
        </SidebarMenu.Item>
        { /* -------- Cards ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-clone"></i>}
            title="Kho"
        >
            <SidebarMenu.Item title="Quản lí nhập kho" to='/dashboards/tao-phieu-nhap' exact />
            <SidebarMenu.Item title="Quản lí xuất kho" to='#' exact />
        </SidebarMenu.Item>
        { /* -------- Layouts ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-columns"></i>}
            title="Thống kê"
            to = '/dashboards/thongke'
        />
         <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-columns"></i>}
            title="Lập hoá đơn"
            to = '/dashboards/billing'
        />

        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-columns"></i>}
            title="Quản trị"
        >
            <SidebarMenu.Item title="Quyền" to='#' exact />
            <SidebarMenu.Item title="Tài khoản" to='#' exact />
            <SidebarMenu.Item title="Đăng xuất" to='#' exact />
        </SidebarMenu.Item>
    </SidebarMenu >
);
