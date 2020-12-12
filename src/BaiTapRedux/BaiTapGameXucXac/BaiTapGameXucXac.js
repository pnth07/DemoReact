import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import styleGame from './BaiTapGameXucXac.module.css'
import {connect} from 'react-redux'

class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className={`text-center ${styleGame.bgGame}`} >
                <h1 className='display-4 text-center mt-5'>BÀI TẬP GAME XÚC XẮC</h1>
                <XucXac/>
                <KetQuaTroChoi/>
                <button className='btn btn-primary p-4' onClick={()=>{
                    this.props.dispatch({
                        type:'RANDOM_XUC_XAC'
                        
                    })
                }}>Play Game</button>
            </div>
        )
    }
}

export default connect()(BaiTapGameXucXac)
