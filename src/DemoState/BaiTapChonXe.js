import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state={
        imgSrc:'./img/car/products/red-car.jpg'
    }
    changeColor=(newColor)=>{
        this.setState({
            imgSrc:`./img/car/products/${newColor}-car.jpg`
        })
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            {/* Hình ảnh của xe */}
                            <img src={this.state.imgSrc} className='w-100 mt-5' alt=""></img>
                        </div>
                        <div className="col-6">
                            <div className="card">
                                <div className="card-header bg-dark text-white">Exterior Color</div>
                                <div className="card-body">
                                    <div className="row mt-1 border border-dark p-2">
                                        <div className="col-2">
                                            <img style={{cursor:'pointer'}} onClick={()=>{
                                                this.setState({
                                                    imgSrc:'./img/car/products/black-car.jpg'
                                                })
                                            }} src='./img/car/icons/icon-black.jpg' className="w-100" alt />
                                        </div>
                                        <div className="col-10">
                                            <h3>Black Color</h3>
                                        </div>
                                    </div>
                                    <div className="row mt-1 border border-dark p-2">
                                        <div className="col-2">
                                            <img style={{cursor:'pointer'}} onClick={()=>{
                                                this.setState({
                                                    imgSrc:'./img/car/products/red-car.jpg'
                                                })
                                            }} src='./img/car/icons/icon-red.jpg' className="w-100" alt />
                                        </div>
                                        <div className="col-10">
                                            <h3>Red Color</h3>
                                        </div>
                                    </div>
                                    <div className="row mt-1 border border-dark p-2">
                                        <div className="col-2">
                                            <img style={{cursor:'pointer'}} onClick={()=>{
                                                this.setState({
                                                    imgSrc:'./img/car/products/steel-car.jpg'
                                                })
                                            }} src='./img/car/icons/icon-steel.jpg' className="w-100" alt />
                                        </div>
                                        <div className="col-10">
                                            <h3>Steel Color</h3>
                                        </div>
                                    </div>
                                    <div className="row mt-1 border border-dark p-2">
                                        <div className="col-2">
                                            <img style={{cursor:'pointer'}} onClick={()=>{
                                                this.setState({
                                                    imgSrc:'./img/car/products/silver-car.jpg'
                                                })
                                            }} src='./img/car/icons/icon-silver.jpg' className="w-100" alt />
                                        </div>
                                        <div className="col-10">
                                            <h3>Silver Color</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
