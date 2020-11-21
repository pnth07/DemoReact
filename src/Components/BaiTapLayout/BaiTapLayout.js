import React, { Component } from 'react'
import FooterComponent from './FooterComponent'
import Header from './Header'
import ProductListComponent from './ProductListComponent'
import Slider from './Slider'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slider/>
                <ProductListComponent/>
                <FooterComponent/>
            </div>
        )
    }
}
