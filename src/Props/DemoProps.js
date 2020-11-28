import React, { Component } from 'react'
import ProductRFC from './ProductRFC'

export default class DemoProps extends Component {
    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>Danh sách sản phẩm</h3>
                <div className='row'>
                    <div className="col-3">
                        <ProductRFC name="Samsung" price="1000$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="Iphone" price="1500$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="Nokia" price="750$"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="Xiaomi" price="500$"/>
                    </div>
                </div>
            </div>
        )
    }
}
