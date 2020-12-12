import React, { Component } from 'react'
import SanPham from './SanPham'
import dsSanPham from '../Props/Data/productList.json'

export default class DanhSachSanPham extends Component {
    renderSanPham = () => {
        return dsSanPham.map((sp, index) => {
            return <div className='col-4' key={index}>
                <SanPham sanPham={sp} />
            </div>
        })
    }
    render() {
        return (
            <div className='container'>
                <h1 className='text-center'>Danh sách sản phẩm</h1>
                <div className='row'>
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
