import React, { Component } from 'react'

import { connect } from 'react-redux';
import DanhSachSanPham from './DanhSachSanPham';

class GioHang extends Component {
    render() {
        return (
            <div>
                <h1 className='text-center display-4'>
                    Giỏ hàng
                </h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Mã sp</th>
                            <th>Tên sp</th>
                            <th>Hình ảnh</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.gioHang.map((spGH, index) => {
                            return <tr key={index}>
                                <td>{spGH.maSP}</td>
                                <td>{spGH.tenSP}</td>
                                <td><img src={spGH.hinhAnh} style={{ width: 50, height: 50 }} /></td>
                                <td>
                                    <button className='btn btn-primary' onClick={() => { this.props.tangGiamSoLuong(spGH.maSP, 1) }}>+</button>
                                    {spGH.soLuong}
                                    <button className='btn btn-danger' onClick={() => { this.props.tangGiamSoLuong(spGH.maSP, -1) }}>-</button>
                                </td>
                                <td>{spGH.giaBan.toLocaleString()}</td>
                                <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                                <td><button className='btn btn-danger' onClick={() => { this.props.xoaGioHang(spGH.maSP) }}>Xóa</button></td>
                            </tr>

                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

//Định nghĩa hàm lấy state từ redux về biến thành props của reactComponent
const mapStateToProps = (state) => {//State đại diện cho rootReducer
    return {
        gioHang: state.stateGioHang.gioHang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSPClick) => {
            //Đưa dữ liệu lên redux store (reducer)
            const action = {
                type: 'XOA_GIO_HANG',
                maSPXoa: maSPClick
            }
            //Dùng hàm dispatch gửi action lên reducer
            dispatch(action);
        },
        tangGiamSoLuong: (maSPClick, soLuong) => {
            //Tạo ra action
            const action = {
                type: 'TANG_GIAM_SO_LUONG',
                maSPClick: maSPClick,
                soLuong: soLuong
            }
            dispatch(action);
        }
    }
}

//Kết nối react component với redux store tạo ra 1 component mới export ra ngoài
export default connect(mapStateToProps, mapDispatchToProps)(GioHang);
