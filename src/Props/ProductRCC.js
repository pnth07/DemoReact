import React, { Component } from 'react'

export default class ProductRCC extends Component {
    //this.product: là thuộc tính có sẵn của react class component dùng để nhận giá trị từ component cha truyền vào
    //this.props thuộc tính không được gán lại giá trị mới
    render() {
        let {sanPham}=this.props;
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={sanPham.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">{sanPham.giaBan}</p>
                    </div>
                </div>
            </div>
        )
    }
}
