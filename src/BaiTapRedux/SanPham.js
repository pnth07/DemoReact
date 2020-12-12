import React, { Component } from 'react'
import { connect } from 'react-redux'

class SanPham extends Component {
    render() {
      
        let { sanPham } = this.props;
        return (
            <div className='container'>
                <div className="card">
                    <img className="card-img-top" src={sanPham.hinhAnh} alt='hi' style={{ width: 300, height: 300 }} />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">{sanPham.giaBan}</p>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-success' onClick={() => (this.props.themGioHang(sanPham))}>Thêm giỏ hàng</button>
                    </div>
                </div>

            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    //dispatch là tham số từ redux trả ra (nó là 1 hàm dùng để gửi giá trị lên store)
    return {
        themGioHang: (spClick) => {
            //Gửi dữ liệu lên redux

            //Bước 1:tạo action
            const action={
                type:'THEM_GIO_HANG',//Type thuộc tính bắt buộc
                sanPhamClick:{...spClick,soLuong:1}
                //Thuộc tính thứ 2 là giá trị gửi lên redux
            }
            //Bước 2:sử dụng phương thức dispatch để đưa action lên redux (reducer)
            dispatch(action);
            
        }
    }
}

//Kêt nối component sản phẩm với store
//Tham số 1 của connect: là mapStateToProps(nếu không lấy dữ liệu nào từ store về thì để null)
//Tham số 2 của connect: là 
export default connect(null, mapDispatchToProps)(SanPham)