import React, { Component } from 'react';
import productList from '../Data/productList.json';
import Modal from './Modal';
import Product from './Product';

export default class ProductList extends Component {
    state = {
        productDetail: [],
        cart: [
            // {
            //     "maSP": 1,
            //     "tenSP": "VinSmart Live",
            //     "giaBan": 5700000,
            //     "hinhAnh": "./img/vsphone.jpg",
            //     "soLuong": 1,
            // }
        ]
    }

    renderProductListHandler = () => {
        return productList.map((product, index) => {
            return <Product prod={product} key={index} onViewDetail={this.viewDetailHandler} onAddToCart={this.addToCart} />
        })
    }

    viewDetailHandler = (product) => {
        this.setState({
            productDetail: product,
        })
    }

    addToCart = (product) => {
        let cartUpdate = [...this.state.cart]
        const index = this.state.cart.findIndex(prod => prod.maSP === product.maSP)
        if (index !== -1) {
            cartUpdate[index].soLuong += 1
        }
        else {
            cartUpdate = [...this.state.cart, { ...product, soLuong: 1 }]
        }
        this.setState({
            cart: cartUpdate,
        })
    };
    //Định nghĩa sự kiện xóa giỏ hàng tại nơi chứa state giỏ
    deleteItem = (maSPClick) => {
        //mình sẽ tạo ra 1 giỏ hàng mới giống giá trị giỏ hàng cũ
        let gioHangCapNhat = [...this.state.cart];
        //xử lý giỏ hàng mới
        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSPClick);
        if (index !== -1) {
            gioHangCapNhat.splice(index, 1);
        }
        //gán lại giỏ hàng cũ bằng giỏ hàng mới
        this.setState({
            cart: gioHangCapNhat
        });
    }

    //Định nghĩa hàm thay đổi số lượng tại nơi chứa state số lượng (số lượng nằm trong cart[])
    tangGiamSoLuong = (maSPClick,soLuong) => {
        //mình sẽ tạo ra 1 giỏ hàng mới giống giá trị giỏ hàng cũ
        let gioHangCapNhat = [...this.state.cart];
        //tìm trong giỏ hàng có sản phẩm mã === với sản phẩm được click + hoặc -
        let spGioHang = gioHangCapNhat.find(spGH => spGH.maSP === maSPClick);
        //Tìm thấy sơ trong giỏ hàng
        if (spGioHang) {
            spGioHang.soLuong += soLuong
        }
        //gán lại giỏ hàng cũ bằng giỏ hàng mới
        this.setState({
            cart: gioHangCapNhat
        });
    }

    render() {
        //Bóc tách phần tử
        const { productDetail, cart } = this.state;
        return (
            <div className='container'>
                <Modal cart={cart} deleteItem={this.deleteItem} tangGiamSoLuong={this.tangGiamSoLuong} />
                <div className='row'>
                    {this.renderProductListHandler()}
                </div>
                {/* Thông tin chi tiết */}
                <div className='row mt-5'>
                    <div className='col-6'>
                        <h5>{productDetail.tenSP}</h5>
                        <img src={productDetail.hinhAnh} style={{ height: 300 }}></img>
                    </div>
                    <div className='col-6'>
                        <h5>Thông số kỹ thuật</h5>
                        <table className='table'>
                            <tr>
                                <th>Màn hình</th>
                                <td>{productDetail.manHinh}</td>
                            </tr>
                            <tr>
                                <th>Hệ điều hành</th>
                                <td>{productDetail.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <th>Camera trước</th>
                                <td>{productDetail.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <th>Camera sau</th>
                                <td>{productDetail.cameraSau}</td>
                            </tr>
                            <tr>
                                <th>RAM</th>
                                <td>{productDetail.ram}</td>
                            </tr>
                            <tr>
                                <th>ROM</th>
                                <td>{productDetail.rom}</td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}
