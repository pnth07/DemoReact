import React, { Component } from 'react'

export default class Modal extends Component {
    tinhTongTien=()=>{
        let tongTien=this.props.cart.reduce((tt,spGH,index)=>{
            return tt += spGH.soLuong*spGH.giaBan;
        },0)
        return tongTien.toLocaleString();
    }
    render() {
        const { cart = [] } = this.props
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Giỏ hàng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className='table'>
                                <tr>
                                    <td>Mã sản phẩm</td>
                                    <td>Hình ảnh</td>
                                    <td>Tên sản phẩm</td>
                                    <td>Số lượng</td>
                                    <td>Đơn giá</td>
                                    <td>Thành tiền</td>


                                </tr>
                                {cart.map((product, index) => {
                                    return (
                                        <tr>
                                            <td>{product.maSP}</td>
                                            <td><img src={product.hinhAnh} style={{ height: 50, width: 50 }} /></td>
                                            <td>{product.tenSP}</td>
                                            <td className='d-flex'>
                                                <button onClick={() => { this.props.tangGiamSoLuong(product.maSP, 1) }}>+</button>
                                                {product.soLuong}
                                                <button onClick={() => { this.props.tangGiamSoLuong(product.maSP, -1) }}>-</button>
                                            </td>
                                            <td>{product.giaBan.toLocaleString()}</td>
                                            <td>{(product.soLuong * product.giaBan).toLocaleString()}</td>
                                            <td><button className='btn btn-danger' onClick={() => { this.props.deleteItem(product.maSP) }}>Xóa</button></td>
                                        </tr>
                                    )
                                })}
                                <t foot>
                                    <tr>
                                        <td colSpan='5'></td>
                                        <td>Tổng tiền</td>
                                        <td>{this.tinhTongTien()}</td>
                                    </tr>
                                </t>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}
