import React, { Component } from 'react'
// import Modal from './Modal'
import ProductList from './ProductList'

export default class PropsWithEvent extends Component {
    render() {
        return (
            <div className='container'>
                 <h3 className='text-center text-danger'>Danh sách sản phẩm</h3>
                <div>
                    <button className='btn btn-danger' data-toggle="modal" data-target="#modelId">Giỏ hàng</button>
                </div>
                <ProductList/>
            </div>
        )
    }
}
