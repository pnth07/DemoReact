import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'

export default class BaiTapGioHangRedux extends Component {
    render() {
        return (
            <div>
                <GioHang/>
                <DanhSachSanPham/>
            </div>
        )
    }
}
