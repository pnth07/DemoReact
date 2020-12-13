import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableSinhVien extends Component {
    renderMangSinhVien = () => {
        return this.props.mangSinhVien.map((sv, index) => {
            return <tr key={index}>
                <td>{sv.maSinhVien}</td>
                <td>{sv.hoTen}</td>
                <td>{sv.email}</td>
                <td>{sv.soDienThoai}</td>
                <td>
                    <button className='btn btn-success mx-1' onClick={()=>{
                        this.props.dispatch({
                            type:'SUA_SINH_VIEN',
                            sinhVienSua:sv
                        })
                    }}>Sửa</button>
                    <button className='btn btn-danger mx-1'>Xóa</button>
                </td>
            </tr>
        })
    }
    render() {
        return (
            <div className='mt-5'>
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Mã sinh viên</th>
                            <th>Họ tên</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMangSinhVien()}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.danhSachSinhVien
    }
}

export default connect(mapStateToProps)(TableSinhVien)
