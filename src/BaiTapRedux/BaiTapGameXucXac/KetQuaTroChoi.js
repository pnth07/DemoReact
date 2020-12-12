import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        return (
            <div className='container text-center'>
                <h1 className='display-4'>Bạn chọn:<span className='display-4 text-success'>{this.props.datCuoc ? 'TÀI' : 'XỈU'}</span></h1>
                <h1 className='display-4'>Số lần thắng:<span className='display-4 text-success'>{this.props.soBanThang}</span></h1>
                <h1 className='display-4'>Số bàn chơi:<span className='display-4 text-success'>{this.props.soBanChoi}</span></h1>
            </div>
        )
    }
}
//Hàm lấy giá trị state từ redux về biến thành props của component
const mapStateToProps = (state) => {
    return {
        datCuoc: state.stateGameXucXac.datCuoc,
        soBanThang: state.stateGameXucXac.soBanThang,
        soBanChoi: state.stateGameXucXac.soBanChoi
    }
}
export default connect(mapStateToProps)(KetQuaTroChoi);
