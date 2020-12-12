import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const { prod, onViewDetail, onAddToCart} = this.props;
        return (
            <div className='col-4' >
                <div className="card">
                    <img className="card-img-top" src={prod.hinhAnh} style={{ height: 300 }} alt />
                    <div className="card-body">
                        <h4 className="card-title">{prod.tenSP}</h4>
                        <p className="btn btn-success" onClick={() => onViewDetail(prod)}>Xem chi tiết</p>
                        <p className="btn btn-danger" onClick={()=>onAddToCart(prod)}>Thêm giỏ hàng</p>
                    </div>
                </div>

            </div>
        )
    }
}
