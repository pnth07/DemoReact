import React, { Component } from 'react'

export default class DataBindingClassComponent extends Component {
    sinhVien = {
        ma: '0001',
        ten: 'Nguyễn Văn Tèo',
        hinhAnh: 'https://picsum.photos/200'
    }
    renderPicture=()=>{
        return <img src={this.sinhVien.hinhAnh} width="300" height="300" alt="321"/>
    }
    render() {
        const title = 'frontend54';
        const renderTitle = () => {
            return <p className="text-danger">
                {title}
            </p>
        }
        return (
            <div className="container">
                <h3>React databinding class component</h3>
                <p>Tiêu đề: {title}</p>
                {renderTitle()}
                <h3>Thông tin sinh viên</h3>
                <ul>
                    <li>Mã sinh viên: {this.sinhVien.ma}</li>
                    <li>Tên sinh viên: {this.sinhVien.ten}</li>
                    <li><img src={this.sinhVien.hinhAnh} width="200" height="200" alt="123" /></li>
                </ul>
                {this.renderPicture()}
            </div>
        )
    }
}
