import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormSinhVienRedux extends Component {


    handleChangeInput = (event) => {
        let { value, name } = event.target;
        let typeInput = event.target.getAttribute('typeInput')//attribute là thuộc tính người dùng tự thêm trên thẻ
        //Xử lý cập nhật values
        const newValues = { ...this.props.sinhVienRedux.values };//Lưu trữ lại các giá trị trước người dùng đã nhập
        newValues[name] = value;//Gán giá trị mới cho thuộc tính đang nhập

        //Xử lý errors
        const newErrors = { ...this.props.sinhVienRedux.errors };
        newErrors[name] = value.trim() === '' ? name + ' không được bỏ trống!' : '';
        if (typeInput === 'email') {
            const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexEmail.test(value)) {
                newErrors[name] = name + ' không đúng định dạng'
            }

        }
        if (typeInput === 'phone') {
            const regexNumBer = /^[0-9]+$/;
            if (!regexNumBer.test(value)) {
                newErrors[name] = name + ' không đúng định dạng!';
            }
        }
        this.props.dispatch({
            type: 'SET_SV_REDUX',
            sinhVien: {
                values: newValues,
                errors: newErrors
            }
        })

        //setState lại
        this.setState({
            values: newValues,
            errors: newErrors
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();//Chặn sự kiện submit của browser khi người dùng submit=reactform
        //Kiểm tra dữ liệu người dùng hợp lê =>submit
        let valid = true;
        for (let key in this.props.sinhVienRedux.values) {
            if (this.props.sinhVienRedux.values[key].trim() === '') {
                valid = false;
            }
        }
        //Kiểm tra tất cả các thuộc tính của this.props.sinhVienRedux.errors
        for (let key in this.props.sinhVienRedux.errors) {
            if (this.props.sinhVienRedux.errors[key] !== '') {
                valid = false;
            }
        }
        if (!valid) {
            alert('Dữ liệu không hợp lệ !');
            return;
        }
        //Xử lý submit=>api hoặc redux (dispatch)..
        this.props.dispatch({
            type: 'THEM_SINH_VIEN',
            sinhVien: this.props.sinhVienRedux.values
        })
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        //Lấy props từ redux gán vào state của component
        this.setState({
            values: newProps.sinhVienSua
        });
        //Sau đó binding giá trị này lên giao diện từ state
    }

    render() {
        let { maSinhVien, hoTen, email, soDienThoai } = this.props.sinhVienRedux.values;

        return (
            <div>
                <form className="card text-left" onSubmit={this.handleSubmit}>
                    <div className='card-header bg-dark text-white'><h1>Thông tin sinh viên</h1></div>
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <h3>Mã sinh viên</h3>
                                    <input typeInput='' className='form-control' name='maSinhVien' value={maSinhVien} onChange={this.handleChangeInput} />
                                    <p className='text text-danger'>{this.props.sinhVienRedux.errors.maSinhVien}</p>
                                </div>
                                <div className='form-group'>
                                    <h3>Họ tên</h3>
                                    <input typeInput='' className='form-control' name='hoTen' value={hoTen} onChange={this.handleChangeInput} />
                                    <p className='text text-danger'>{this.props.sinhVienRedux.errors.hoTen}</p>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <h3>Email</h3>
                                    <input typeInput='email' className='form-control' name='email' value={email} onChange={this.handleChangeInput} />
                                    <p className='text text-danger'>{this.props.sinhVienRedux.errors.email}</p>
                                </div>
                                <div className='form-group'>
                                    <h3>Số điện thoại</h3>
                                    <input typeInput='phone' className='form-control' name='soDienThoai' value={soDienThoai} onChange={this.handleChangeInput} />
                                    <p className='text text-danger'>{this.props.sinhVienRedux.errors.soDienThoai}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-success mx-1' type='submit'>Thêm sinh viên</button>
                        <button className='btn btn-primary mx-1' type='button' onClick={() => {
                                    this.props.dispatch({
                                        type:'CAP_NHAT_SINH_VIEN'
                                    })
                        }}>Cập nhật sinh viên</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sinhVienRedux: state.QuanLySinhVienReducer.sinhVienRedux
    }
}
export default connect(mapStateToProps)(FormSinhVienRedux);
